export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json",
  };

  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    const repos = await reposRes.json();
    if (!Array.isArray(repos)) throw new Error("Failed to fetch repos");

    async function getCommitCountForRepo(repoName) {
      let page = 1;
      let perPage = 200;
      let total = 0;
      let hasMore = true;

      while (hasMore) {
        const res = await fetch(
          `https://api.github.com/repos/${username}/${repoName}/commits?author=${username}&per_page=${perPage}&page=${page}`,
          { headers }
        );

        if (!res.ok) {
          console.warn(`❌ Skipped ${repoName} due to error`);
          break;
        }

        const data = await res.json();
        total += data.length;

        const link = res.headers.get("link");
        hasMore = link && link.includes('rel="next"');
        page += 1;
      }

      return total;
    }

    const commitCounts = await Promise.all(
      repos.map((repo) => getCommitCountForRepo(repo.name))
    );

    const totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);

    return Response.json({ totalCommits });
  } catch (error) {
    console.error("🔥 GitHub commit fetch error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

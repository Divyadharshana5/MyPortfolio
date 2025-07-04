export async function getGithubContributions(username) {
  // This API returns the total contributions for the last year
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}`
  );
  if (!res.ok) return 0;
  const data = await res.json();
  return data.totalContributions || 0;
}

export async function getGithubContributions(username) {
  // This API returns the total contributions for the last year
  const res = await fetch(
    `https://github.com/Divyadharshana5${Divyadharshana5}`
  );
  if (!res.ok) return 0;
  const data = await res.json();
  return data.totalContributions || 0;
}

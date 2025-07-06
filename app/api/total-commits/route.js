export async function GET() {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/Divyadharshana5?y=last",
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    const totalLastYear = data.total?.lastYear ?? 0;

    const sumDaily = data.contributions.reduce((sum, d) => sum + d.count, 0);

    return Response.json({ totalLastYear, sumDaily });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Failed to fetch contributions" },
      { status: 500 }
    );
  }
}

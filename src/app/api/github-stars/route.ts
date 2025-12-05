export async function GET() {
  try {
    // Use the correct GitHub API endpoint
    const res = await fetch(
      'https://api.github.com/repos/SuryaPrakash-root/Portfolio',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!res.ok) {
      console.error('GitHub API error:', res.status, res.statusText);
      // Return a default value instead of throwing an error
      return Response.json({ stars: 0 });
    }

    // Check if response is JSON
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('GitHub API returned non-JSON response:', contentType);
      const text = await res.text();
      console.error('Response body:', text.substring(0, 200));
      return Response.json({ stars: 0 });
    }

    const data = await res.json();
    return Response.json({ stars: data.stargazers_count || 0 });
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
    // Return a default value on error
    return Response.json({ stars: 0 });
  }
}
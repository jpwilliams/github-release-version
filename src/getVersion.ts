export async function getVersion(
  username: string,
  repo: string,
  prerelease?: boolean
) {
  try {
    const headers = new Headers();
    headers.set("accept", "application/vnd.github.v3+json");
    headers.set("authorization", `token ${GITHUB_API_TOKEN}`);
    headers.set("user-agent", "jpwilliams");

    const targetUrl = prerelease
      ? `https://api.github.com/repos/${username}/${repo}/releases?per_page=1`
      : `https://api.github.com/repos/${username}/${repo}/releases/latest`;

    const res = await fetch(targetUrl, { headers });
    const data = await res.json();

    const release = Array.isArray(data) ? data[0] || {} : data;
    if (!release)
      throw new Error(`No valid releases found for ${username}/${repo}`);

    return new Response(release.tag_name || "");
  } catch (err) {
    console.log(err);

    return new Response("");
  }
}

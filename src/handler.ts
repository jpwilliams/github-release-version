// local
import { getVersion } from "./getVersion";
import { setCorsHeaders } from "./utils/setCorsHeaders";

export async function handleRequest(request: Request) {
  const url = new URL(request.url);
  const [username, repo] = url.pathname.slice(1).split("/").slice(-2);

  if (!username || !repo) {
    return setCorsHeaders(
      new Response(
        "Invalid request. No username or repository specified. URL should be /github-release-version/USERNAME/REPO",
        {
          status: 400,
        }
      )
    );
  }

  const prerelease = url.searchParams.has("prerelease");

  try {
    const versionRes = await getVersion(username, repo, prerelease);
    const res = setCorsHeaders(versionRes);

    return res;
  } catch (err) {
    console.log(err);

    return setCorsHeaders(new Response(""));
  }
}

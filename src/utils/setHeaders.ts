export function setHeaders(res: Response) {
  const ret = new Response(res.body, res);
  ret.headers.set("Access-Control-Allow-Origin", "*");
  ret.headers.set("Cache-Control", `public, max-age=${CACHE_TIME}`);
  ret.headers.set("Age", "0");

  return ret;
}

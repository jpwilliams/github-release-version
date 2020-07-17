export function setCorsHeaders(res: Response) {
  const ret = new Response(res.body, res);
  ret.headers.set("Access-Control-Allow-Origin", "*");

  return ret;
}

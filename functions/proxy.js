export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('Missing url', { status: 400 });
  }

  // Optionally: Whitelist domains!
  // const allowed = ['mini.allinonereborn.online'];
  // if (!allowed.includes(new URL(url).host)) {
  //   return new Response('Not allowed', { status: 403 });
  // }

  const response = await fetch(url);
  const headers = new Headers(response.headers);
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Headers', '*');
  headers.set('Access-Control-Allow-Methods', '*');
  return new Response(response.body, {
    status: response.status,
    headers
  });
}

export default async function handlePost(url, body) {
  const respon = await fetch(url, {
    method: "POST",
    body: body,
  });
  const json = await respon.json();
  return { respon, json };
}

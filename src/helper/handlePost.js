export default async function handlePost(url, body, token) {
  const respon = await fetch(url, {
    method: "POST",
    body: body,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const json = await respon.json();
  return { respon, json };
}

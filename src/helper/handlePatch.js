export default async function handlePatch(url, body, token) {
  const respon = await fetch(url, {
    method: "PATCH",
    body: body,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const json = await respon.json();
  return { respon, json };
}

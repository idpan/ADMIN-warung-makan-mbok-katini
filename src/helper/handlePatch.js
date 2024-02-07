export default async function handlePatch(url, body) {
  const respon = await fetch(url, {
    method: "PATCH",
    body: body,
  });
  const json = await respon.json();
  return { respon, json };
}

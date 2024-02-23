export default async function handlePatch(url, body, token, contentType) {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  if (contentType === "json") {
    headers["Content-Type"] = "application/json";
  }
  const respon = await fetch(url, {
    method: "PATCH",
    body: body,
    headers,
  });
  const json = await respon.json();
  return { respon, json };
}

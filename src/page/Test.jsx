import React from "react";

function Test() {
  return (
    <>
      <div>Test</div>
      <br />
      <form
        action="http://localhost:8000/api/content"
        encType="multipart/form-data"
        method="post"
      >
        <input name="image" type="file" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Test;

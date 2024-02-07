import React, { useState } from "react";
import InputFile from "../../../components/atom/input/InputFile";
import handlePatch from "../../../helper/handlePatch";

function TestUpdate() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMenu();
    console.log("submit ....");
  };
  async function addNewMenu() {
    // const data = {
    //   name: formValues.name,
    //   image: formValues.image,
    //   description: formValues.description,
    //   sub_category: formValues.category,
    //   category: "tumpeng",
    //   // price: formValues.price,
    // };

    const formData = new FormData();
    // formData.append("image", formValues.image); // formValues.image adalah file yang diunggah
    // formData.append("name", "baru");
    // formData.append("description", formValues.description);
    // formData.append("sub_category", formValues.category);
    // formData.append("category", "tumpeng-mini");
    formData.append("price", 45000);

    const api_url = import.meta.env.VITE_API_SERVER + "/api/tumpeng/" + 6;

    const { respon, json } = await handlePatch(api_url, formData);

    if (!respon.ok) {
      throw respon.error;
    }
    if (respon.ok) {
      console.log(json);
      //   dispatchMenu({ type: "CREATE", payload: json.data[0] });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputFile
        id="image"
        name="image"
        required
        onInputChange={(value) => {
          handleInputChange("image", value);
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default TestUpdate;

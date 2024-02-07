import React, { useState } from "react";

import useMenuSatuanContext from "../../../hooks/context/useMenuSatuanContext";
import InputText from "../../../components/atom/input/InputText";
import Select from "../../../components/atom/input/Select";
import EditingPanel from "../../../components/molecule/EditingPanel";
import handlePost from "../../../helper/handlePost";
import InputFile from "../../../components/atom/input/InputFile";
import PageTitle from "../../../components/atom/PageTitle";
import ContainerInput from "../../../components/atom/ContainerInput";
import SubmitButton from "../../../components/atom/button/SubmitButton";
import BackToMenuButton from "../../../components/atom/button/BackToMenuButton";
function MenuSatuanCreate() {
  const [formValues, setFormValues] = useState({});
  const { dispatchMenu } = useMenuSatuanContext();

  const handleInputChange = (fieldName, value) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMenu();
  };
  async function addNewMenu() {
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("image", formValues.image); // formValues.image adalah file yang diunggah
    formData.append("category", formValues.category);

    const api_url = import.meta.env.VITE_API_SERVER + "/api/menu-satuan";

    const { respon, json } = await handlePost(api_url, formData);

    if (!respon.ok) {
      throw respon.error;
    }
    if (respon.ok) {
      dispatchMenu({ type: "CREATE", payload: json.data[0] });
    }
  }

  const menuSatuanOptions = [
    { value: "goreng", label: "Goreng" },
    { value: "bakaran", label: "Bakaran" },
    { value: "mie", label: "Mie" },
    { value: "nasi-goreng", label: "Nasi Goreng" },
    { value: "minuman", label: "Minuman" },
  ];
  return (
    <>
      <div className="absolute top-5 left-[250px]">
        <BackToMenuButton />
      </div>
      <PageTitle>Tambah Menu</PageTitle>
      <EditingPanel>
        <form onSubmit={handleSubmit}>
          <ContainerInput id="image" label="Gambar">
            <InputFile
              id="image"
              name="image"
              required
              onInputChange={(value) => {
                handleInputChange("image", value);
              }}
            />
          </ContainerInput>
          <ContainerInput id="name" label="Nama">
            <InputText
              id="name"
              required
              onInputChange={(value) => {
                handleInputChange("name", value);
              }}
            />
          </ContainerInput>

          <ContainerInput id="category" label="Kategori">
            <Select
              id="category"
              required
              placeholder="pilih kategori menu satuan ..."
              options={menuSatuanOptions}
              onSelectChange={(value) => {
                handleInputChange("category", value);
              }}
            />
          </ContainerInput>
          <SubmitButton>Tambah Menu</SubmitButton>
        </form>
      </EditingPanel>
    </>
  );
}

export default MenuSatuanCreate;

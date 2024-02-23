import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputText from "../../../components/atom/input/InputText";
import EditingPanel from "../../../components/molecule/EditingPanel";
import handlePost from "../../../helper/handlePost";
import useNasiBoxContext from "../../../hooks/context/useNasiBoxContext";
import InputFile from "../../../components/atom/input/InputFile";
import Select from "../../../components/atom/input/Select";
import PageTitle from "../../../components/atom/PageTitle";
import ContainerInput from "../../../components/atom/ContainerInput";
import SubmitButton from "../../../components/atom/button/SubmitButton";
import BackToMenuButton from "../../../components/atom/button/BackToMenuButton";
import useAuthContext from "../../../hooks/context/useAuthContext";

function NasiBoxCreate() {
  const [formValues, setFormValues] = useState({});
  const { dispatchMenu } = useNasiBoxContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleInputChange = (fieldName, value) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMenu();
    navigate("/menu/nasi-box");
  };
  async function addNewMenu() {
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("image", formValues.image); // formValues.image adalah file yang diunggah
    formData.append("description", formValues.description);
    formData.append("category", formValues.category);
    formData.append("price", parseInt(formValues.price));

    const api_url = import.meta.env.VITE_API_SERVER + "/api/nasi-box";

    const { respon, json } = await handlePost(api_url, formData, user.token);

    if (!respon.ok) {
      throw respon.error;
    }
    if (respon.ok) {
      dispatchMenu({ type: "CREATE", payload: json.data[0] });
    }
  }

  const nasiBoxOptions = [{ value: "nasi-box", label: "Nasi Box" }];
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
          <ContainerInput id="price" label="Harga">
            <InputText
              id="price"
              required
              onInputChange={(value) => {
                handleInputChange("price", value);
              }}
            />
          </ContainerInput>
          <ContainerInput id="category" label="Kategori">
            <Select
              id="category"
              required
              placeholder="pilih kategori tumpeng ..."
              options={nasiBoxOptions}
              onSelectChange={(value) => {
                handleInputChange("category", value);
              }}
            />
          </ContainerInput>
          <ContainerInput id="description" label="Deskripsi">
            <InputText
              required
              id="description"
              isTextarea
              onInputChange={(value) => {
                handleInputChange("description", value);
              }}
            />
          </ContainerInput>
          <SubmitButton>Tambah Menu</SubmitButton>
        </form>
      </EditingPanel>
    </>
  );
}

export default NasiBoxCreate;

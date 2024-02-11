import React from "react";
import BackToMenuButton from "../../../components/atom/button/BackToMenuButton";
import { useParams } from "react-router-dom";
import { getNasiBoxById } from "../../../helper/getMenuById";
import EditingPanel from "../../../components/molecule/EditingPanel";
import EditingRow from "../../../components/molecule/EditingRow";
import handlePatch from "../../../helper/handlePatch";
import useNasiBoxContext from "../../../hooks/context/useNasiBoxContext";
import EditableImage from "../../../components/molecule/EditableImage";
import EditableSelect from "../../../components/molecule/EditableSelect";
import PageTitle from "../../../components/atom/PageTitle";
import useAuthContext from "../../../hooks/context/useAuthContext";

function DetailNasiBox() {
  const { id } = useParams();
  const { menu, dispatchMenu } = useNasiBoxContext();
  const { user } = useAuthContext();
  const nasiBox = getNasiBoxById(id, menu);
  async function handleEdit(body) {
    const api_url = import.meta.env.VITE_API_SERVER + "/api/menu/" + id;
    const { respon, json } = await handlePatch(api_url, body);
    if (!respon.ok) {
      throw Error;
    }
    if (respon.ok) {
      dispatchMenu({ type: "SET", payload: json.data });
    }
  }

  async function handleEdit(body) {
    const api_url = import.meta.env.VITE_API_SERVER + "/api/nasi-box/" + id;
    const formData = new FormData();
    for (let key in body) {
      console.log(key);
      formData.append(key, body[key]);
    }
    const { respon, json } = await handlePatch(api_url, formData, user.token);
    if (!respon.ok) {
      throw Error;
    }
    if (respon.ok) {
      const newMenu = menu.map((el) => {
        if (el.nasi_box_id == id) {
          return json.data[0];
        }
        return el;
      });
      dispatchMenu({ type: "SET", payload: newMenu });
    }
  }

  return (
    <>
      <div className="absolute top-5 left-[250px]">
        <BackToMenuButton />
      </div>
      <PageTitle>Detail Menu</PageTitle>

      <EditingPanel>
        <div>
          <div className="mb-2">
            <strong>Gambar</strong>
          </div>
          <EditableImage
            initialImage={import.meta.env.VITE_IMAGE_PATH + nasiBox?.image}
            initialImageName={nasiBox?.image}
            onSave={(value) => {
              handleEdit({ image: value });
            }}
          />
        </div>
        <EditingRow
          label="Nama"
          initialValue={nasiBox.name}
          onSave={(value) => {
            handleEdit({ name: value });
          }}
        />
        <EditingRow
          label="Harga"
          initialValue={nasiBox.price}
          onSave={(value) => {
            handleEdit({ price: value });
          }}
        />
        <div>
          <div className="mb-2">
            <strong>Kategori</strong>
          </div>
          <EditableSelect
            initialValue={nasiBox?.category}
            onSave={(value) => {
              handleEdit({ category: value });
            }}
            options={[
              { value: "nasi-box", label: "nasi box" },
              { value: "nasi-box-ayam", label: "nasi box ayam" },
            ]}
          />
        </div>

        <EditingRow
          label="Deskripsi"
          isTextarea
          initialValue={nasiBox.description}
          onSave={(value) => {
            handleEdit({ description: value });
          }}
        />
      </EditingPanel>
    </>
  );
}

export default DetailNasiBox;

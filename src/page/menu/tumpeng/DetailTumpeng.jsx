import React from "react";
import BackToMenuButton from "../../../components/atom/button/BackToMenuButton";
import { useParams } from "react-router-dom";
import useTumpengContext from "../../../hooks/context/useTumpengContext";
import { getTumpengById } from "../../../helper/getMenuById";
import EditingPanel from "../../../components/molecule/EditingPanel";
import EditingRow from "../../../components/molecule/EditingRow";
import handlePatch from "../../../helper/handlePatch";
import EditableImage from "../../../components/molecule/EditableImage";
import EditableSelect from "../../../components/molecule/EditableSelect";
import PageTitle from "../../../components/atom/PageTitle";

function DetailTumpeng() {
  const { id } = useParams();
  const { menu, dispatchMenu } = useTumpengContext();
  const tumpeng = getTumpengById(id, menu);
  async function handleEdit(body) {
    const api_url = import.meta.env.VITE_API_SERVER + "/api/tumpeng/" + id;
    const formData = new FormData();
    for (let key in body) {
      formData.append(key, body[key]);
    }

    const { respon, json } = await handlePatch(api_url, formData);
    if (!respon.ok) {
      throw Error;
    }
    if (respon.ok) {
      const newMenu = menu.map((el) => {
        if (el.tumpeng_id == id) {
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
          <h5>Gambar</h5>

          <EditableImage
            initialImage={import.meta.env.VITE_IMAGE_PATH + tumpeng?.image}
            initialImageName={tumpeng?.image}
            onSave={(value) => {
              handleEdit({ image: value });
            }}
          />
        </div>
        <EditingRow
          label="Nama"
          initialValue={tumpeng.name}
          onSave={(value) => {
            handleEdit({ name: value });
          }}
        />
        <EditingRow
          label="Harga"
          initialValue={tumpeng.price}
          onSave={(value) => {
            handleEdit({ price: value });
          }}
        />
        <div>
          <div className="mb-2">
            <strong>Kategori</strong>
          </div>
          <EditableSelect
            initialValue={tumpeng?.category}
            onSave={(value) => {
              handleEdit({ category: value });
            }}
            options={[
              { value: "tumpeng", label: "tumpeng" },
              { value: "tumpeng-mini", label: "tumpeng mini" },
            ]}
          />
        </div>
        <EditingRow
          label="Deskripsi"
          isTextarea
          initialValue={tumpeng.description}
          onSave={(value) => {
            handleEdit({ description: value });
          }}
        />
      </EditingPanel>
    </>
  );
}

export default DetailTumpeng;

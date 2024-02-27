import React from "react";

import DeleteMenuButton from "../../atom/button/DeleteMenuButton";
import EditableText from "../EditableText";
import handlePatch from "../../../helper/handlePatch";
import useMenuSatuanContext from "../../../hooks/context/useMenuSatuanContext";
import EditableSelect from "../EditableSelect";
import EditableImage from "../EditableImage";
import useAuthContext from "../../../hooks/context/useAuthContext";
import ModalDelete from "../ModalDelete";

function EditableTableRow({ rowNumber, item, onDelete }) {
  const { menu, dispatchMenu } = useMenuSatuanContext();
  const { user } = useAuthContext();
  async function handleEdit(id, data) {
    const api_url = import.meta.env.VITE_API_SERVER + "/api/menu-satuan/" + id;
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    const { respon, json } = await handlePatch(api_url, formData, user.token);
    if (!respon.ok) {
      throw Error;
    }
    if (respon.ok) {
      const newMenu = menu.map((el) => {
        if (el.menu_satuan_id === id) {
          return json.data[0];
        }
        return el;
      });
      dispatchMenu({ type: "SET", payload: newMenu });
    }
  }

  return (
    <tr>
      <th className="text-left pl-4 max-w-8  border" scope="row">
        {rowNumber}
      </th>
      <td className=" border h-[100px]">
        <EditableImage
          initialImage={import.meta.env.VITE_IMAGE_PATH + item?.image}
          initialImageName={item?.image}
          onSave={(value) => {
            handleEdit(item?.menu_satuan_id, { image: value });
          }}
        />
      </td>
      <td className="border">
        <EditableText
          initialValue={item?.name}
          onSave={(value) => {
            handleEdit(item?.menu_satuan_id, { name: value });
          }}
        />
      </td>

      <td className="border">
        <EditableSelect
          initialValue={item?.category}
          onSave={(value) => {
            handleEdit(item?.menu_satuan_id, { category: value });
          }}
          options={[
            { value: "goreng", label: "goreng" },
            { value: "bakaran", label: "bakaran" },
            { value: "mie", label: "mie" },
            { value: "nasi-goreng", label: "nasi goreng" },
            { value: "minuman", label: "minuman" },
          ]}
        />
      </td>
      <td className="text-center td-aksi border">
        <ModalDelete onDelete={onDelete} id={item?.menu_satuan_id} />
      </td>
    </tr>
  );
}

export default EditableTableRow;

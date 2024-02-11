import React from "react";

import useMenuSatuanContext from "../../../hooks/context/useMenuSatuanContext";
import AddMenuButton from "../../../components/atom/button/AddMenuButton";
import GenericTable from "../../../components/molecule/menu/GenericTable";
import EditableTableRow from "../../../components/molecule/menu/EditableTableRow";
import useFetchMenuSatuan from "../../../hooks/fetch/useFetchMenuSatuan";
import PageTitle from "../../../components/atom/PageTitle";
import useAuthContext from "../../../hooks/context/useAuthContext";

function MenuSatuan() {
  const { menu, dispatchMenu } = useMenuSatuanContext();
  const { user } = useAuthContext();
  async function handleDelete(id) {
    const res = await fetch(
      import.meta.env.VITE_API_SERVER + "/api/menu-satuan/" + id,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await res.json();
    console.log(json);
    if (!res.ok) {
      throw Error;
    }
    if (res.ok) {
      dispatchMenu({ type: "DELETE", payload: id });
    }
  }
  if (user) {
    if (!menu) {
      useFetchMenuSatuan();
    }
  }
  const columns = [
    { key: "order", header: "No." },
    { key: "image", header: "Gambar" },
    { key: "name", header: "Nama" },
    { key: "category", header: "Kategori" },
  ];
  return (
    <>
      <div className="tab-content px-8">
        <div className="sticky top-0">
          <div className=" flex justify-between mt-8 mb-5 ">
            <h5 className="text-3xl">Menu Satuan</h5>
            <AddMenuButton groupPath="menu-satuan" />
          </div>
          <GenericTable columns={columns}>
            {menu?.map((m, index) => {
              return (
                <EditableTableRow
                  key={m.menu_satuan_id}
                  rowNumber={index + 1}
                  item={m}
                  onDelete={() => {
                    handleDelete(m.menu_satuan_id);
                  }}
                />
              );
            })}
          </GenericTable>
        </div>
      </div>
    </>
  );
}

export default MenuSatuan;

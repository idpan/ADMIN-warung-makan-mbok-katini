import React from "react";

import useTumpengContext from "../../../hooks/context/useTumpengContext";
import GenericTable from "../../../components/molecule/menu/GenericTable";
import TableRowWithDetail from "../../../components/molecule/menu/TableRowWithDetail";
import AddMenuButton from "../../../components/atom/button/AddMenuButton";
import useFetchTumpeng from "../../../hooks/fetch/useFetchTumpeng";
import PageTitle from "../../../components/atom/PageTitle";

function Tumpeng() {
  const { menu, dispatchMenu } = useTumpengContext();
  if (!menu) {
    useFetchTumpeng();
  }
  async function handleDelete(id) {
    const res = await fetch(
      import.meta.env.VITE_API_SERVER + "/api/tumpeng/" + id,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) {
      throw Error;
    }
    if (res.ok) {
      console.log("deleted");
      dispatchMenu({ type: "DELETE", payload: id });
    }
  }
  const columns = [
    { key: "order", header: "No." },
    { key: "image", header: "Gambar" },
    { key: "name", header: "Nama" },
    { key: "category", header: "Kategori" },
    { key: "price", header: "Harga" },
    { key: "description", header: "Deskripsi" },
  ];

  return (
    <div className="tab-content px-8">
      <div className=" flex justify-between mt-8 mb-5">
        <h5 className="text-3xl">Tumpeng</h5>
        <AddMenuButton groupPath="tumpeng" />
      </div>
      <GenericTable columns={columns}>
        {menu?.map((m, index) => {
          return (
            <TableRowWithDetail
              key={m.tumpeng_id}
              rowNumber={index + 1}
              item={m}
              menuId={m?.tumpeng_id}
              onDelete={() => {
                handleDelete(m.tumpeng_id);
              }}
            />
          );
        })}
      </GenericTable>
    </div>
  );
}

export default Tumpeng;

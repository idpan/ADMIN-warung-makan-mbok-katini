import React from "react";

import useNasiBoxContext from "../../../hooks/context/useNasiBoxContext";
import AddMenuButton from "../../../components/atom/button/AddMenuButton";
import GenericTable from "../../../components/molecule/menu/GenericTable";
import TableRowWithDetail from "../../../components/molecule/menu/TableRowWithDetail";
import useFetchNasiBox from "../../../hooks/fetch/useFetchNasiBox";
import PageTitle from "../../../components/atom/PageTitle";
import useAuthContext from "../../../hooks/context/useAuthContext";

function NasiBox() {
  const { menu, dispatchMenu } = useNasiBoxContext();
  const { user } = useAuthContext();
  if (user) {
    if (!menu) {
      useFetchNasiBox();
    }
  }
  async function handleDelete(id) {
    const res = await fetch(
      import.meta.env.VITE_API_SERVER + "/api/nasi-box/" + id,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (!res.ok) {
      throw Error;
    }
    if (res.ok) {
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
    <>
      <div className="tab-content px-8">
        <div className=" flex justify-between mt-8 mb-5">
          <h5 className="text-3xl">Nasi Box</h5>
          <AddMenuButton groupPath="nasi-box" />
        </div>
        <GenericTable columns={columns}>
          {menu?.map((m, index) => {
            return (
              <TableRowWithDetail
                key={m.nasi_box_id}
                rowNumber={index + 1}
                item={m}
                menuId={m.nasi_box_id}
                onDelete={() => {
                  handleDelete(m.nasi_box_id);
                }}
              />
            );
          })}
        </GenericTable>
      </div>
    </>
  );
}

export default NasiBox;

import React from "react";
import DeleteMenuButton from "../atom/button/DeleteMenuButton";

function ModalDelete({ onDelete, id }) {
  const handleModal = (id) => {
    const activeTab = document.querySelector(".tab-active");
    const activeDialog = activeTab.nextSibling.querySelector(`#modal_${id}`);

    activeDialog.showModal();
  };
  return (
    <>
      <DeleteMenuButton
        onDelete={() => {
          handleModal(id);
        }}
      />
      <dialog id={`modal_${id}`} className="modal">
        <div className="modal-box">
          <p className="font-bold text-lg">
            Apakah anda yakin, ingin menghapus menu ?
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn me-4">Tidak jadi</button>
              <DeleteMenuButton onDelete={onDelete} />
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalDelete;

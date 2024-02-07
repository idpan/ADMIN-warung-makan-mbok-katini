import React, { useEffect, useRef, useState } from "react";
import useFetchContact from "../hooks/fetch/useFetchContact";
import useContactContext from "../hooks/context/useContactContext";
import { XLg, CheckLg, PencilSquare } from "react-bootstrap-icons";
import handlePatch from "../helper/handlePatch";
import EditingRow from "../components/molecule/EditingRow";
import EditingPanel from "../components/molecule/EditingPanel";
import PageTitle from "../components/atom/PageTitle";

export default function Contact() {
  const { contact, dispatchContact } = useContactContext();
  if (!contact) {
    useFetchContact();
  }
  async function handleSubmit(body) {
    const api_url = import.meta.env.VITE_API_SERVER + "/api/contact/1";
    const { respon, json } = await handlePatch(api_url, body);
    if (!respon.ok) {
      throw Error;
    }
    if (respon.ok) {
      dispatchContact({ type: "SET", payload: json.data });
    }
  }
  return (
    <>
      <PageTitle>Contact</PageTitle>
      {contact && (
        <EditingPanel>
          <EditingRow
            label="E-mail"
            initialValue={contact.email}
            onSave={(value) => {
              handleSubmit({ email: value });
            }}
          />
          <EditingRow
            label="No. Handphone"
            initialValue={contact.phone_number}
            onSave={(value) => {
              handleSubmit({ phone_number: value });
            }}
          />
          <EditingRow
            label="Account Instagram"
            isTextarea
            initialValue={contact.instagram_account}
            onSave={(value) => {
              handleSubmit({ instagram_account: value });
            }}
          />
          <EditingRow
            label="Gofood Account"
            isTextarea
            initialValue={contact.gofood_account}
            onSave={(value) => {
              handleSubmit({ gofood_account: value });
            }}
          />
          <EditingRow
            label="Alamat"
            isTextarea
            initialValue={contact.address}
            onSave={(value) => {
              handleSubmit({ address: value });
            }}
          />
          <EditingRow
            label="Link google map"
            isTextarea
            initialValue={contact.address_url}
            onSave={(value) => {
              handleSubmit({ address_url: value });
            }}
          />
        </EditingPanel>
      )}
    </>
  );
}

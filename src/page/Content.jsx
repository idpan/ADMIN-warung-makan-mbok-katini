import React from "react";

import useContentContext from "../hooks/context/useContentContext";
import useFetchContent from "../hooks/fetch/useFetchContent";
import handlePatch from "../helper/handlePatch";
import EditingRow from "../components/molecule/EditingRow";
import EditingPanel from "../components/molecule/EditingPanel";
import EditableImage from "../components/molecule/EditableImage";
import PageTitle from "../components/atom/PageTitle";
import useAuthContext from "../hooks/context/useAuthContext";

function Content() {
  const { content, dispatchContent } = useContentContext();
  const { user } = useAuthContext();
  if (user) {
    if (!content) {
      useFetchContent();
    }
  }
  async function handleEdit(body) {
    const api_url = import.meta.env.VITE_API_SERVER + "/api/content/1";
    const formData = new FormData();
    console.log(body);
    for (let key in body) {
      console.log(key);
      console.log(body[key]);

      formData.append(key, body[key]);
    }
    console.log(formData);
    const { respon, json } = await handlePatch(api_url, formData);
    if (!respon.ok) {
      throw Error;
    }
    if (respon.ok) {
      dispatchContent({ type: "SET", payload: json.data });
    }
  }
  return (
    <>
      <PageTitle>Content</PageTitle>
      {content && (
        <>
          <EditingPanel title="Head">
            <EditingRow
              label="Heading"
              isTextarea
              initialValue={content.hero.heading}
              onSave={(value) => {
                handleEdit({ heading: value });
              }}
            />
            <EditingRow
              label="Deskripsi"
              isTextarea
              initialValue={content.hero.description}
              onSave={(value) => {
                handleEdit({ description: value });
              }}
            />
            <div>
              <div className="mb-3">
                <strong>Gambar</strong>
              </div>
              <EditableImage
                initialImage={
                  import.meta.env.VITE_IMAGE_PATH + content?.hero?.image
                }
                initialImageName={content?.hero?.image}
                onSave={(value) => {
                  handleEdit({ hero_image: value });
                }}
              />
            </div>
          </EditingPanel>
          <div className="divider"></div>
          <EditingPanel title="Section 1">
            <EditingRow
              label="Deskripsi"
              isTextarea
              initialValue={content.section1.description}
              onSave={(value) => {
                handleEdit({ section1_description: value });
              }}
            />
            <div>
              <div className="mb-3">
                <strong>Gambar</strong>
              </div>
              <EditableImage
                initialImage={
                  import.meta.env.VITE_IMAGE_PATH + content?.section1?.image
                }
                initialImageName={content?.section1?.image}
                onSave={(value) => {
                  handleEdit({ section1_image: value });
                }}
              />
            </div>
          </EditingPanel>
          <div className="divider"></div>
          <EditingPanel title="Section 2">
            <EditingRow
              label="Deskripsi"
              isTextarea
              initialValue={content.section2.description}
              onSave={(value) => {
                handleEdit({ section2_description: value });
              }}
            />
            <div>
              <div className="mb-3">
                <strong>Gambar</strong>
              </div>
              <EditableImage
                initialImage={
                  import.meta.env.VITE_IMAGE_PATH + content?.section2?.image
                }
                initialImageName={content?.section2?.image}
                onSave={(value) => {
                  handleEdit({ section2_image: value });
                }}
              />
            </div>
          </EditingPanel>
        </>
      )}
    </>
  );
}

export default Content;

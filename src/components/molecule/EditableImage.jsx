import React, { useEffect, useState } from "react";
import { CheckLg, PencilSquare, XLg } from "react-bootstrap-icons";

export default function EditableImage({
  initialImage,
  initialImageName,
  onSave,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput();
  }, [isEditing]);

  const handleCahnge = (e) => {
    setInput(e.target.files[0]);
  };
  return (
    <>
      {isEditing ? (
        <div className="w-fit">
          <input
            type="file"
            onChange={handleCahnge}
            className="file-input file-input-bordered w-full max-w-xs rounded-none"
          />

          <div className="ml-auto text-right">
            <button
              className="btn btn-error btn-sm rounded-none "
              onClick={(e) => {
                setIsEditing(false);
              }}
            >
              <XLg />
            </button>
            <button
              className="btn btn-success btn-sm rounded-none"
              onClick={(e) => {
                onSave(input);
                setIsEditing(false);
              }}
            >
              <CheckLg />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex w-fit shadow-xl ">
            <div>
              <button
                className="btn h-full rounded-none"
                onClick={(e) => {
                  setIsEditing(true);
                }}
              >
                <PencilSquare />
              </button>
            </div>
            <div className="">
              <img
                src={initialImage}
                alt={initialImageName}
                className="max-w-xl max-h-full"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

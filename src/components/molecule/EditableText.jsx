import React, { useEffect, useState } from "react";
import { CheckLg, PencilSquare, XLg } from "react-bootstrap-icons";

export default function EditableText({ isTextarea, initialValue, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput(initialValue);
  }, [isEditing]);

  return (
    <>
      {isEditing ? (
        <div className="w-fit">
          {isTextarea ? (
            <textarea
              cols="80"
              rows="10"
              autoFocus
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="textarea textarea-bordered rounded-none"
              value={input}
            />
          ) : (
            <input
              autoFocus
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="input input-bordered w-full max-w-xs rounded-none"
              value={input}
            />
          )}
          <div className="text-end">
            <button
              className="btn btn-error btn-sm rounded-none"
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
          <div className="flex  gap-3">
            <div>
              <button
                onClick={(e) => {
                  setIsEditing(true);
                }}
                className=""
              >
                <PencilSquare />
              </button>
            </div>
            <div>
              <p>{initialValue}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

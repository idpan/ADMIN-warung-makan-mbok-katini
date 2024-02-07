import React, { useEffect, useState } from "react";
import { CheckLg, PencilSquare, XLg } from "react-bootstrap-icons";

export default function EditableSelect({ initialValue, onSave, options }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput(initialValue);
  }, [isEditing]);

  const handleCahnge = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      {isEditing ? (
        <div>
          <select
            className="select select-bordered w-full max-w-xs rounded-none text-base "
            value={input}
            onChange={handleCahnge}
          >
            {/* <option defaultValue value={input}>{input}</option> */}
            {options.map((option, index) => {
              return option.value === input ? (
                <option
                  defaultValue
                  key={"select-" + index}
                  value={option.value}
                >
                  {option.label}
                </option>
              ) : (
                <option key={"select-" + index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
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
          <div className="flex gap-3">
            <div>
              <button
                onClick={(e) => {
                  setIsEditing(true);
                }}
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

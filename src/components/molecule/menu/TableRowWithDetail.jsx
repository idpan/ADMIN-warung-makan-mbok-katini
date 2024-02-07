import React from "react";

import DetailMenuButton from "../../atom/button/DetailMenuButton";
import DeleteMenuButton from "../../atom/button/DeleteMenuButton";

function TableRowWithDetail({ rowNumber, item, onDelete, menuId }) {
  return (
    <tr>
      <th className="border" scope="row">
        {rowNumber}
      </th>
      <td className="border">
        <img
          className="h-[100px]"
          src={import.meta.env.VITE_IMAGE_PATH + item?.image}
          alt={item?.image}
        />
      </td>
      <td>{item?.name}</td>
      <td className="border">{item?.category}</td>
      <td className="border">{item?.price?.toLocaleString("id-ID")}</td>
      <td className=" border max-w-[250px]">{item?.description}</td>
      <td className=" justify-center border w-[200px]">
        <div className="flex gap-4">
          <DetailMenuButton id={menuId} />

          <DeleteMenuButton onDelete={onDelete} />
        </div>
      </td>
    </tr>
  );
}

export default TableRowWithDetail;

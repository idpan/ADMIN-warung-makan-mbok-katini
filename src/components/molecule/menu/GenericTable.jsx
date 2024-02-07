import "./GenericTable.css";

export default function GenericTable({ columns, children }) {
  return (
    <table className="w-full table-zebra border shadow-xl">
      <thead className="py-8">
        <tr className="py-8">
          {columns.map((column) => (
            <th className="py-4 text-left pl-4  text-xl" key={column.key}>
              {column.header}
            </th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody className="bg-white">{children}</tbody>
    </table>
  );
}

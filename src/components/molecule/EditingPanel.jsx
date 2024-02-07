export default function EditingPanel({ title, children }) {
  return (
    <div className="  max-w-3xl pl-8 ">
      <h2 className="text-4xl mb-4">{title}</h2>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}

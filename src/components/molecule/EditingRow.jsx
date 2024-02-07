import EditableText from "./EditableText";

export default function EditingRow({
  label,
  initialValue,
  onSave,
  isTextarea,
}) {
  return (
    <div className="align-baseline">
      <div className="mb-2">
        <strong>{label}</strong>
      </div>
      <div className="">
        <EditableText
          isTextarea={isTextarea}
          initialValue={initialValue}
          onSave={onSave}
        />
      </div>
    </div>
  );
}

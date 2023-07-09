import { useState } from "react";
const InputBox = ({ addTask }) => {
  const [name, setName] = useState("");
  const onClick = (e) => {
    addTask(name, 1);
    setName("");
  };
  return (
    <div className="input-group">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Type Task Name"
        value={name}
      />
      <button
        disabled={name.length ? "" : "disabled"}
        className="btn btn-outline-primary"
        type="button"
        id="button-addon2"
        onClick={onClick}
      >
        Add
      </button>
    </div>
  );
};
export default InputBox;

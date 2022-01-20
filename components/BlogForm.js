import BlogButton from "./BlogButton";
import { useState } from "react";

export default function BLogForm({ setClose }) {
  const initialState = { title: "", message: "" };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    setClose();
  };

  console.log(formData);

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of Blog"
          className="p-4 focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Write your Blog here"
          className="p-4 focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <BlogButton title="POST" />
      </form>
    </div>
  );
}

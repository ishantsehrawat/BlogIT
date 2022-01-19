import BlogButton from "./BlogButton";

export default function BLogForm({ setClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setClose();
  };

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of Blog"
          className="p-4 focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md"
        />
        <input
          type="text"
          placeholder="Write your Blog here"
          className="p-4 focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md"
        />
        <BlogButton title="POST" />
      </form>
    </div>
  );
}

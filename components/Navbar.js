import BlogButton from "./BlogButton";

export default function Navbar({ setOpen }) {
  return (
    <div className="flex justify-between py-4 px-10 ">
      <h1 className="text-2xl font-bold ">BLOG IT</h1>
      <div>
        <BlogButton title="CREATE" clik={setOpen} />
      </div>
    </div>
  );
}

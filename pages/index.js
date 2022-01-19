import Navbar from "../components/Navbar";
import { useState } from "react";
import BlogForm from "../components/BlogForm";
import Modal from "../components/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
    console.log("clicked");
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Navbar setOpen={handleClick} />
      {open && <Modal setClose={handleClose} />}
    </>
  );
}

import React, { useState, useContext } from "react";
import { ProjectContext } from "../../../../contexts";
import { useSession } from "next-auth/react";
import axios from "axios";

const Form = () => {
  const data = useContext(ProjectContext);
  const project = data.title;
  const list = data.data.map((e) => {
    return { url: e.link };
  });
  const session = useSession();
  const login = session.data.user.email.split("@")[0];
  const [message, setMessage] = useState("Posted!");
  const [visible, setVisible] = useState("hidden");
  const [color, setColor] = useState("rgb(103, 210, 130)");
  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const clearForm = () => {
    setTitle(null);
    setUrl(null);
  };
  const send = (e) => {
    e.preventDefault();
    if (!title || !url) {
      setColor("rgb(255, 82, 14)");
      setMessage("Please fill in all fields -_-");
      setVisible("visible");
      setTimeout(() => setVisible("hidden"), 3000);
      return;
    }
    try {
      axios
        .post("/api/res", {
          login,
          project,
          list,
          title,
          url,
        })
        .then(() => {
          clearForm();
          setColor("rgb(103, 210, 130)");
          setMessage("Posted successfully ^_^!");
          setVisible("visible");
          setTimeout(() => setVisible("hidden"), 3000);
        })
        .catch((e) => {
          setColor("rgb(255, 82, 14)");
          setMessage(e.message);
          setVisible("visible");
          setTimeout(() => setVisible("hidden"), 3000);
        });
    } catch (error) {
      setColor("rgb(255, 82, 14)");
      setMessage(error.message);
      setVisible("visible");
      setTimeout(() => setVisible("hidden"), 3000);
    }
  };
  return (
    <>
      <h1 className="main__heading">Add a new resource</h1>
      <form>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title ? title : ""}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          id="url"
          placeholder="Link (URL)"
          value={url ? url : ""}
          onChange={(e) => setUrl(e.target.value)}
        />
        <p className={`form__message ${visible}`} style={{ color: color }}>
          {message}
        </p>
        <button id="submit" onClick={send}>
          Add Resource
        </button>
      </form>
    </>
  );
};

export default Form;

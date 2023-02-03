import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const projects = [
  { title: "Libft", query: "libft" },
  { title: "Get Next Line", query: "get_next_line" },
  { title: "ft_printf", query: "ft_printf" },
  { title: "Born2beRoot", query: "born2beroot" },
  { title: "Minitalk", query: "minitalk" },
  { title: "Pipex", query: "pipex" },
  { title: "Push Swap", query: "push_swap" },
  { title: "Fract-ol", query: "fract-ol" },
  { title: "So Long", query: "so_long" },
  { title: "FdF", query: "fdf" },
  { title: "Philosophers", query: "philosophers" },
  { title: "Minishell", query: "minishell" },
  { title: "NetPractice", query: "netpractice" },
  { title: "miniRT", query: "minirt" },
  { title: "cub3D", query: "cub3d" },
  { title: "CPP Modules", query: "cpp_modules" },
  { title: "ft_containers", query: "ft_containers" },
  { title: "Inception", query: "inception" },
  { title: "Webserv", query: "webserv" },
  { title: "ft_irc", query: "ft_irc" },
  { title: "ft_transcendence", query: "ft_transcendence" },
];

const Form = ({ user, category, tags, pattern }) => {
  const router = useRouter();
  const type = router.pathname.split("/")[1];
  // Resource Data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [project, setProject] = useState("");

  // Error and Error visibility
  const [errorMessage, setErrorMessage] = useState("");
  const [error_visibility, setError_visibility] = useState("invisible");

  // Form validation
  const validate_form = () => {
    if (name === "") {
      setErrorMessage("Please enter a name for your resource.");
      setError_visibility("visible");
      window.setTimeout(() => setError_visibility("invisible"), 3000);
      return false;
    }
    if (link === "") {
      setErrorMessage("Please enter a link to your resource.");
      setError_visibility("visible");
      window.setTimeout(() => setError_visibility("invisible"), 3000);
      return false;
    }
    if (description === "") {
      setErrorMessage("Please enter a description for your resource.");
      setError_visibility("visible");
      window.setTimeout(() => setError_visibility("invisible"), 3000);
      return false;
    }
    return true;
  };

  // Submit form
  const submitForm = async (e) => {
    e.preventDefault();
    if (validate_form()) {
      const data = {
        type,
        name,
        description,
        link,
        user,
        project,
        category,
        tags,
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER__URL}/suggestion`, data)
        .then(() => {
          setErrorMessage("Your suggestion has been submitted!");
          setName("");
          setDescription("");
          setLink("");
          setError_visibility("visible");
          window.setTimeout(() => setError_visibility("invisible"), 3000);
        })
        .catch(() => {
          setErrorMessage("There was an error submitting your suggestion.");
          setError_visibility("visible");
          window.setTimeout(() => setError_visibility("invisible"), 3000);
        });
    }
  };

  // Submit form
  return (
    <section className="form__section text-dark">
      <div
        className="form__wrapper"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <nav className="navbar">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="text" href="/">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="text" href="/pool">
                Pool
              </Link>
            </li>
            <li className="nav__item">
              <Link className="text" href="/cursus">
                Cursus
              </Link>
            </li>
            <li className="nav__item">
              <Link className="text" href="/paths">
                Paths
              </Link>
            </li>
            <li className="nav__item">
              <Link className="text" href="/resources">
                Resources
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className="heading mb-2">Suggest a new resource!</h1>
        <p className="subheading mb-6 fw-400">
          Your contributions to our platform assist individuals in need
          <br />
          of valuable resources
        </p>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form__input"
            type="text"
            name="title"
            placeholder="Title of the resource"
          />
          {router.pathname === "/cursus" && (
            <select
              onChange={(e) => setProject(e.target.value)}
              className="form__input text"
            >
              {projects.map(({ title, query }, index) => (
                <option className="text" key={index} value={query}>
                  {title}
                </option>
              ))}
            </select>
          )}
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="form__input"
            type="url"
            name="url"
            placeholder="Link to resource (url)"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form__input form__area"
            name="description"
            placeholder="Short description"
          />
        </form>
        <p className={`text mb-2 ${error_visibility}`}>{errorMessage}</p>
        <button className="button__dark" onClick={submitForm}>
          Contribute
        </button>
      </div>
    </section>
  );
};

export default Form;

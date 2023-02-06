import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "../Slanding/Components/Nav";
import { Search, X } from "react-feather";
import Loader from "../Shared/Loader";
import projects from "../../../content/Cursus";
import { ArrowLeft } from "react-feather";
import ResCard from "../../desktop/DPool/ResCard";

const Resources = ({ data, project, path, setProject, scrollTop }) => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [visibility, setVisibility] = useState("invisible");
  const [action, setAction] = useState("search");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (action === "search") {
      setVisibility("search__bar-active");
      setAction("close");
    } else {
      setVisibility("invisible");
      setAction("search");
    }
  };

  useEffect(() => {
    const res = data.filter((item) => {
      return item.project === path;
    });
    setList(res);
  }, [data, query]);
  return (
    <>
      <div className="title__container mb-4">
        <div
          className="back__arrow"
          onClick={() => {
            setProject("");
            scrollTop();
          }}
        >
          <ArrowLeft size={24} color="#FFFFFF" />
        </div>
        <h1 className="subheading w-100">{project}</h1>
      </div>
      <div className="search__bar mb-4">
        <input
          onFocus={() => {
            setVisibility("search__bar-active");
            setAction("search");
          }}
          onChange={handleChange}
          value={query}
          type="text"
          name="search"
          className="search__input"
          placeholder="Search"
        />
        <div className="search__button" onClick={handleSearch}>
          {action === "search" ? (
            <Search size={24} color="#FFFFFF" />
          ) : (
            <X size={24} color="#FFFFFF" />
          )}
        </div>
      </div>
      <p className={`text mb-6 ${visibility}`}>{result}</p>
      <div className="resources__wrapper">
        {list.map(({ name, description, query, link }, index) => (
          <ResCard
            key={index}
            name={name}
            link={link}
            description={description}
            path={query}
          />
        ))}
      </div>
    </>
  );
};

const ProjectsList = ({ setProject, setPath, scrollTop }) => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [action, setAction] = useState("search");
  const [result, setResult] = useState("");
  const [visibility, setVisibility] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setVisibility("invisible");
      setResult("");
      setAction("search");
    }
  };

  const handleSearch = () => {
    if (query === "") return;
    if (action === "search") {
      const result = projects.filter((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      });
      if (result.length == 0) {
        setResult("No results found");
        setList([]);
      } else {
        setResult(`Found ${result.length} results`);
        setList(result);
      }
      setVisibility("visible");
      setAction("clear");
    }
    if (action === "clear") {
      setQuery("");
      setResult("");
      setAction("search");
    }
  };

  useEffect(() => {
    if (query === "") setList(projects);
  }, [query]);

  return (
    <>
      <h1 className="heading mb-4 t-center">List of the cursus projects</h1>
      <div className="search__bar mb-4">
        <input
          onFocus={() => {
            setVisibility("search__bar-active");
            setAction("search");
          }}
          onChange={handleChange}
          value={query}
          type="search"
          name="search"
          className="search__input"
          placeholder="Search"
        />
        <div className="search__button" onClick={handleSearch}>
          {action === "search" ? (
            <Search size={24} color="#FFFFFF" />
          ) : (
            <X size={24} color="#FFFFFF" />
          )}
        </div>
      </div>
      <p className={`text mb-4 ${visibility}`}>{result}</p>
      <div className="resources__wrapper">
        {list.map(({ title, description, query }, index) => (
          <Card
            key={index}
            title={title}
            description={description}
            query={query}
            setProject={setProject}
            scrollTop={scrollTop}
            setQuery={setPath}
          />
        ))}
      </div>
    </>
  );
};

const SCursus = () => {
  const [loader, setLoader] = useState("visible");

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const router = useRouter();

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [project, setProject] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER__URL}${router.pathname}`)
      .then((res) => {
        setLoader("invisible");
        setData(res.data);
        setList(res.data.slice(0, 6));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Loader visibility={loader} />
      <main className="s-cursus__wrapper">
        <Nav />
        <h1 className="heading mt-10vh mb-2">Cursus?</h1>
        <p className="subheading t-center fw-500 mb-3">
          The 'Cursus' bootcamp is a comprehensive, four-week program that aims
          to provide a comprehensive introduction to the fundamental concepts of
          programming.
          <br />
          The program is designed to cater to individuals with no prior
          experience in the field.
        </p>
        <Link
          href="/tips/cursus"
          className="button__primary eclipse t-center mb-4"
        >
          Cursus Tips
        </Link>
        <section className="section__resources">
          {project === "" ? (
            <ProjectsList
              setProject={setProject}
              setPath={setQuery}
              scrollTop={scrollTop}
            />
          ) : (
            <Resources
              data={data}
              project={project}
              setProject={setProject}
              path={query}
              scrollTop={scrollTop}
            />
          )}
        </section>
      </main>
      <footer className="s-home__footer">
        <p className="s-subheading mb-1">
          <span className="primary">*</span>LeetSource
        </p>
        <section className="nav mt-4 mb-4">
          <Link className="s-text light" href="/">
            Home
          </Link>
          <Link className="s-text light" href="/terms">
            Terms and Conditions
          </Link>
          <Link className="s-text light" href="/about">
            About
          </Link>
          <Link className="s-text light" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="s-text light" href="/blog">
            Blog
          </Link>
          <Link className="s-text light" href="/cookie">
            Cookie Policy
          </Link>
        </section>
        <p className="s-text t-center">
          &copy; 2023 LeetSource, All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default SCursus;

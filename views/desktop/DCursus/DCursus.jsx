import React, { useState, useEffect } from "react";
import pattern__vector from "../../../public/pattern.svg";
import Link from "next/link";
import { Search, X, ArrowLeft } from "react-feather";
import { useRouter } from "next/router";
import axios from "axios";
import Card from "./Card";
import Form from "../Shared/Form";
import projects from "../../../content/Cursus";
import ResCard from "../DPool/ResCard";

const { src: pattern } = pattern__vector;

const Resources = ({ data, project, path, setProject }) => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [visibility, setVisibility] = useState("invisible");
  const [action, setAction] = useState("search");

  console.log(data, path);
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
        <div className="back__arrow" onClick={() => setProject("")}>
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

const ProjectsList = ({ setProject, setPath }) => {
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
      <h1 className="heading mb-6">List of the cursus projects</h1>
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
      <p className={`text mb-6 ${visibility}`}>{result}</p>
      <div className="resources__wrapper">
        {list.map(({ title, description, query }, index) => (
          <Card
            key={index}
            title={title}
            description={description}
            query={query}
            setProject={setProject}
            setQuery={setPath}
          />
        ))}
      </div>
    </>
  );
};

const DCursus = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [project, setProject] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER__URL}${router.pathname}`)
      .then((res) => {
        setData(res.data);
        setList(res.data.slice(0, 6));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="cursus__container">
      <div className="cursus__section">
        <section className="landing mb-6">
          <h1 className="subheading title">
            <Link href="/">
              <span className="primary">*</span>LeetSource
            </Link>
          </h1>
          <h2 className="heading mb-2">Cursus?</h2>
          <p className="subheading fw-300">
            A career in this field requires a commitment of 3-5 years of
            dedicated effort, during which you will spend a significant portion
            of your time immersed in diverse projects utilizing a variety of
            tools and programming languages.
          </p>
          <Link className="button__primary mt-6 eclipse" href="/tips/cursus">
            Cursus Tips
          </Link>
        </section>

        <section className="section__resources">
          {project === "" ? (
            <ProjectsList setProject={setProject} setPath={setQuery} />
          ) : (
            <Resources
              data={data}
              project={project}
              setProject={setProject}
              path={query}
            />
          )}
        </section>
      </div>
      <Form type="cursus" pattern={pattern} />
    </div>
  );
};

export default DCursus;

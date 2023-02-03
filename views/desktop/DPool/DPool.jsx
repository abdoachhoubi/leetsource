import React, { useState, useEffect } from "react";
import pattern__vector from "../../../public/pattern.svg";
import Link from "next/link";
import { Search, X } from "react-feather";
import { useRouter } from "next/router";
import axios from "axios";
import Card from "./Card";
import Form from "../Shared/Form";

const { src: pattern } = pattern__vector;

const DPool = () => {
  const [searchBar, setSearchBar] = useState("");
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [show_more, setShow_more] = useState("visible");
  const [action, setAction] = useState("search");

  const router = useRouter();

  // Show more resources
  const handleMore = () => {
    const len = list.length;
    setList(data.slice(0, len + 6));
  };

  // Handle empty search bar
  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setList(data.slice(0, 6));
      setSearchResult(null);
      setAction("search");
    }
  };

  // Handle search
  const handleSearch = () => {
    if (query === "") return;
    if (action === "search") {
      const result = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        );
      });
      if (result.length == 0) {
        setSearchResult("No results found");
      } else setSearchResult(`Found ${result.length} results`);
      setList(result);
      setAction("clear");
    }
    if (action === "clear") {
      setList(data.slice(0, 6));
      setQuery("");
      setSearchResult(null);
      setAction("search");
    }
  };

  // handles the visibility of the show more button
  useEffect(() => {
    if (data.length == list.length || list.length == 0) {
      setShow_more("invisible");
    } else setShow_more("visible");
    if (query !== "") setShow_more("invisible");
  }, [list, data]);

  // fetches data from the server
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
    <div className="pool__container">
      <div className="pool__section">
        <section className="landing mb-6">
          <h1 className="subheading title">
            <span className="primary">*</span>LeetSource
          </h1>
          <h2 className="heading mb-2">Pool?</h2>
          <p className="subheading fw-300">
            The 'Pool' bootcamp is a comprehensive, four-week program that aims
            to provide a comprehensive introduction to the fundamental concepts
            of programming.
            <br />
            The program is designed to cater to individuals with no prior
            experience in the field.
          </p>
          <Link className="button__primary mt-6 eclipse" href="/tips/pool">
            Pool Tips
          </Link>
        </section>

        <section className="section__resources">
          <h1 className="heading mb-6">List of valuable resources</h1>
          <div className={`search__bar mb-2 ${searchBar}`}>
            <input
              onFocus={() => {
                setSearchBar("search__bar-active");
                setSearchResult(null);
                setAction("search");
              }}
              onBlur={() => setSearchBar("")}
              value={query}
              onChange={handleChange}
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
          <p className="text mb-6">{searchResult}</p>
          <div className="resources__wrapper">
            {list &&
              list?.map(({ name, description, link, user }, index) => (
                <Card
                  key={index}
                  name={name}
                  description={description}
                  link={link}
                  user={user}
                />
              ))}
            <button
              className={`button__light self-center ${show_more}`}
              onClick={handleMore}
            >
              Show more
            </button>
            {show_more == "invisible" && list.length != 0 && (
              <p className="text">End of resources ^_^</p>
            )}
          </div>
        </section>
      </div>
      <Form type="pool" pattern={pattern} />
    </div>
  );
};

export default DPool;

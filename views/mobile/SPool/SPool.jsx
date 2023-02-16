import React, { useState, useEffect } from "react";
import Card from "../../desktop/DPool/Card";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "../Slanding/Components/Nav";
import { Search, X } from "react-feather";
import Loader from "../Shared/Loader";

const SPool = () => {
  const [loader, setLoader] = useState("visible");
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
        setLoader("invisible");
        setData(res.data);
        setList(res.data.slice(0, 6));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Loader visibility={loader} />
      <main className="s-pool__wrapper">
        <Nav />
        <h1 className="heading mt-10vh mb-2">Pool?</h1>
        <p className="subheading t-center fw-500 mb-3">
          The 'Pool' bootcamp is a comprehensive, four-week program that aims to
          provide a comprehensive introduction to the fundamental concepts of
          programming.
          <br />
          The program is designed to cater to individuals with no prior
          experience in the field.
        </p>
        <Link
          href="/tips/pool"
          className="button__primary eclipse t-center mb-4"
        >
          Pool Tips
        </Link>
        <h2 className="heading t-center mb-2">List of valuable resources</h2>
        <div className="search__bar mb-2">
          <input
            onChange={handleChange}
            onFocus={() => {
              setSearchBar("search__bar-active");
              setSearchResult(null);
              setAction("search");
            }}
            onBlur={() => setSearchBar("")}
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
        <p className="text mb-2">{searchResult}</p>
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
      </main>
      <footer className="s-home__footer">
        <p className="s-subheading mb-1">
          <span className="primary">*</span>LeetSource
        </p>
        <section className="nav mt-4 mb-4">
          <Link className="s-text light" href="/">
            Home
          </Link>
          <Link className="s-text light" href="/">
            Terms and Conditions
          </Link>
          <Link className="s-text light" href="/">
            About
          </Link>
          <Link className="s-text light" href="/">
            Privacy Policy
          </Link>
          <Link className="s-text light" href="/">
            Blog
          </Link>
          <Link className="s-text light" href="/">
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

export default SPool;

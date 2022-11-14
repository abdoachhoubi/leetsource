import React, { useContext } from "react";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import { HomeContext } from "../../../../contexts";

const Main = () => {
  const { data } = useContext(HomeContext);
  const { pools } = data[0];
  return (
    <main className="home__main">
      <h1 className="paths__heading">Why 1337?</h1>
      <p className="paths__content">
        In 1337 School we have the freedom to learn the way we want and whenever
        we want!
      </p>
      <div className="home__main__info">
        <section className="info__section">
          <h2 className="info__heading">{pools[0].title}</h2>
          <p className="info__content">{pools[0].content}</p>
          <Link href="/pool">
            <span>Discover Pool</span>
            <ArrowUpRight size={18} color="rgb(99, 255, 51)" />
          </Link>
        </section>
        <section className="info__section">
          <h2 className="info__heading">{pools[1]?.title}</h2>
          <p className="info__content">{pools[1]?.content}</p>
          <Link href="/cursus">
            <span>Discover Cursus</span>
            <ArrowUpRight size={20} color="rgb(99, 255, 51)" />
          </Link>
        </section>
      </div>
      <section className="info__section ais__center mt__6">
        <h2 className="info__heading">{pools[2]?.title}</h2>
        <p className="info__content">{pools[2]?.content}</p>
        <Link href="/paths">
          <span>Discover Paths</span>
          <ArrowUpRight size={18} color="rgb(99, 255, 51)" />
        </Link>
      </section>
      <section className="main__quote">
        <quote>
          Most good programmers do programming not because they expect to get
          paid or get adulation by the public, but because it is fun to program.
        </quote>
      </section>
    </main>
  );
};

export default Main;

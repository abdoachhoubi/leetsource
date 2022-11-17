import React from "react";
import Tip from "../../components/Tip/Tip";

const Main = ({ benifits, links, skills, tips }) => {
  const [benifits__data] = benifits;
  const [tips__data] = tips;
  return (
    <main className="pool__main">
      {tips.map((e, i) => (
        <Tip key={e.id} data={e} i={i} />
      ))}
    </main>
  );
};

export default Main;

import React, { useContext } from "react";
import { ProjectContext } from "../../../../contexts";
import { LinkPreview } from "../../../Pool/components";
import Form from "../../components/Form/Form";

const Main = () => {
  const { data } = useContext(ProjectContext);
  return (
    <main className="project__main">
      <h1 className="main__heading">A list of useful resources</h1>
      <section className="cards__container">
        {data.map((e, i) => (
          <LinkPreview key={i} data={e} author={e?.author} />
        ))}
      </section>
      <section className="form__container">
        <Form />
      </section>
    </main>
  );
};

export default Main;

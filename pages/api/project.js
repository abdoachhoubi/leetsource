import { gql } from "@apollo/client";
import client from "../../lib";

const getData = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        proLinks {
          id
          title
          description
          link
          projects {
            title
            pro
            description
          }
        }
      }
    `,
  });

  return data;
};

const handler = async (req, res) => {
  const { query } = req;
  const project = query?.project;
  const { proLinks } = await getData();
  let links = proLinks.filter((e) => {
    for (let i = 0; i < e.projects.length; i++) {
      if (project == e.projects[i].pro) {
        return e;
      }
    }
  });
  res.send(links);
};

export default handler;

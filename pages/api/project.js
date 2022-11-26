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

const filterLinks = (proLinks, project) => {
  const links = proLinks.filter((e) => {
    for (let i = 0; i < e.projects.length; i++) {
      if (project == e.projects[i].pro) {
        return e;
      }
    }
  });
  return links;
};

const handler = async (req, res) => {
  const { proLinks } = await getData();
  const links = filterLinks(proLinks, req?.query?.project);
  res.send(links);
};

export default handler;

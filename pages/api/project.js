import { gql } from "@apollo/client";
import client from "../../lib";

const getData = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects(last: 30) {
          title
          pro
          description
        }
        proLinks(last: 100) {
          id
          title
          description
          link
          author
          projects(last: 30) {
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
  const project = req.query.project;
  const { proLinks, projects } = await getData();
  const links = filterLinks(proLinks, project);
  res.send({ links, projects });
};

export default handler;

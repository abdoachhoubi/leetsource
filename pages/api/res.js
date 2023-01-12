import axios from "axios";

const handler = async (req, res) => {
  const { user, project, title, url, list } = req.body;
  const search = list.filter((e) => e.url == url);
  if (search.length > 0) res.status(200).json("EXITS");
  const server = process.env.NEXT_PUBLIC_SERVER__URL;
  try {
    axios
      .post(`${server}/resources`, {
        user,
        project,
        title,
        url,
      })
      .then(() => res.status(200).json("OK"))
      .catch(() => res.status(500).json("ERROR"));
  } catch (err) {
    res.status(500).json("ERROR");
  }
};

export default handler;

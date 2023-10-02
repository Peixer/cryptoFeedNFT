import type { NextApiResponse } from "next";
import axios from "axios";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

const handler = async (req: any, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    const medias = await axios.get(
      `https://api.hikerapi.com/a2/user?username=${session.user.name}`,
      {
        headers: {
          accept: "application/json",
          "x-access-key": process.env.HIKER_API_CLIENTSECRET,
        },
      }
    );

    const mediaUrls =
      medias.data.graphql.user.edge_owner_to_timeline_media.edges.map(
        (media) => {
          return media.node.display_url;
        }
      );
    res.status(200).json({ medias: mediaUrls });
  }
  res.status(200).json({ medias: [] });
};

export default handler;

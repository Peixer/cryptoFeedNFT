import type { NextApiResponse } from "next";
import axios from "axios";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { mockJson } from "../../../utils/constants";

const handler = async (req: any, res: NextApiResponse) => {
  const username = req.query.username;
  let mediasResponse = {} as any;
  let useMockJson = true;
  if (useMockJson) {
    res.status(200).json({ medias: mockJson });
  } else {
    mediasResponse = await axios.get(
      `https://api.hikerapi.com/a2/user?username=${username}`,
      {
        headers: {
          accept: "application/json",
          "x-access-key": process.env.HIKER_API_CLIENTSECRET,
        },
      }
    );

    const mediaUrls =
      mediasResponse.data.graphql.user.edge_owner_to_timeline_media.edges.map(
        (media) => {
          return media.node.display_url;
        }
      );
    res.status(200).json({ medias: mediaUrls });
  }
};

export default handler;

import type { NextApiResponse } from "next";
import axios from "axios";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
// import { mockJson } from "../../../utils/constants";

export const mockJson = `
{
    "graphql": {
        "user": {
            "edge_owner_to_timeline_media": {
                "edges": [
                    {
                        "node": {
                            "id": "3197856229610855857",
                            "display_url": "https://scontent-gru1-2.cdninstagram.com/v/t51.2885-15/381355408_1459757914821951_9034972423939675131_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=103&_nc_ohc=v-kuquqKN3kAX9f0RQn&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzE5Nzg1NjIyOTYxMDg1NTg1Nw%3D%3D.2-ccb7-5&oh=00_AfBQua5s1-oID1-vt_yPAsN4mxJI0oxEugDyvzluo3IDnQ&oe=651FAF1C&_nc_sid=b41fef"
                        }
                    }
                ]
            }
        }
    }
}`;


const handler = async (req: any, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    let mediasResponse = {} as any;
    let useMockJson = true;
    if (useMockJson) {
      mediasResponse = { data: JSON.parse(mockJson) };
    } else {
      mediasResponse = await axios.get(
        `https://api.hikerapi.com/a2/user?username=${session.user.name}`,
        {
          headers: {
            accept: "application/json",
            "x-access-key": process.env.HIKER_API_CLIENTSECRET,
          },
        }
      );
    }

    const mediaUrls =
      mediasResponse.data.graphql.user.edge_owner_to_timeline_media.edges.map(
        (media) => {
          return media.node.display_url;
        }
      );
    res.status(200).json({ medias: mediaUrls });
  }
  res.status(200).json({ medias: [] });
};

export default handler;

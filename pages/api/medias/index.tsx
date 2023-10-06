import type { NextApiResponse } from "next";
import axios from "axios";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { mockJson } from "../../../utils/constants";

const handler = async (req: any, res: NextApiResponse) => {
  const username = req.query.username;
  let mediasResponse = {} as any;
  let useMockJson = false;
  if (process.env.NODE_ENV === "development") {
    res.status(200).json({ medias: mockJson });
  } else {

    const profileInfo = await axios.get(
      `https://api.hikerapi.com/v1/user/by/username?username=${username}`,
      {
        headers: {
          accept: "application/json",
          "x-access-key": process.env.HIKER_API_CLIENTSECRET,
        },
      }
    );

    mediasResponse = await axios.get(
      `https://api.hikerapi.com/v1/user/medias/chunk?user_id=${profileInfo.data.pk}`,
      {
        headers: {
          accept: "application/json",
          "x-access-key": process.env.HIKER_API_CLIENTSECRET,
        },
      }
    );

    const mediaUrls =
      mediasResponse.data[0].filter(media => media.image_versions && media.image_versions.length > 1).map(
        (media) => {
          return {
            url: media.image_versions[1].url,
            description:
              media.caption_text ?? "",
          };
        }
      );
    res.status(200).json({ medias: mediaUrls });
  }
};

export default handler;

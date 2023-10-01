import Replicate from "replicate";

import type { NextApiRequest, NextApiResponse } from "next";
import withPassport from "../../../lib/withPassport";
import axios from "axios";

const handler = async (req: any, res: NextApiResponse) => {
  if (req.user) {
    const medias = await axios.get(
      `https://api.hikerapi.com/v2/user/medias?user_id=${req.user.profile.hikerId}`,
      {
        headers: {
          accept: "application/json",
          "x-access-key": process.env.HIKER_API_CLIENTSECRET,
        },
      }
    );
    res.status(200).json({ medias: medias.data });
  }
  res.status(200).json({ medias: [] });
};

export default withPassport(handler);

import Replicate from "replicate";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  output: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const output = await replicate.run(
    "stability-ai/sdxl:af1a68a271597604546c09c64aabcd7782c114a63539a4a8d14d1eeda5630c33",
    {
      input: {
        prompt: "cartoon style with nostalgic pixel art look",
        image: req.body.media_url,

      },
    }
  );

  res
    .status(200)
    .json({ output: output[0] });
}

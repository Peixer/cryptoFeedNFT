import Replicate from "replicate";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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

    res.status(200).json({ message: "Sucess", output: output[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error", output: error });
  }
}

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
      "fofr/sdxl-barbie:657c074cdd0e0098e39dae981194c4e852ad5bc88c7fbbeb0682afae714a6b0e",
      {
        input: {
          prompt: "A photo in the style of TOK",
          negative_prompt: "underexposed",
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

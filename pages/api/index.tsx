import Replicate from "replicate";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
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
    "stability-ai/stable-diffusion-img2img:15a3689ee13b0d2616e98820eca31d4c3abcd36672df6afce5cb6feb1d66087d",
    {
      input: {
        prompt: "Cyberpunk 2077, with a cyberpunk filter",
        image: "https://i.ibb.co/C97hv57/1-22-7-25-15-57-20m.jpg",
      },
    }
  );

  res
    .status(200)
    .json({ message: "Hello from Next.js!", output: output[0] });
}

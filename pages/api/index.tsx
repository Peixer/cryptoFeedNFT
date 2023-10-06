import Replicate from "replicate";

import type { NextApiRequest, NextApiResponse } from "next";

export const maxDuration = 300;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const models = [
      {
        id: "barbie",
        prompt: "A photo in the style of TOK",
        negative_prompt: "underexposed",
        model:
          "fofr/sdxl-barbie:657c074cdd0e0098e39dae981194c4e852ad5bc88c7fbbeb0682afae714a6b0e",
      },
      {
        id: "cartoonify",
        prompt: "",
        negative_prompt: "",
        model:
          "412392713/vtoonify:afe9ed6158e2a956b3198db1cf90ce83fb403eb43fe76a78c80494c7c9a82a56",
      },
      {
        id: "emoji",
        prompt: "A TOK emoji of a man",
        negative_prompt: "",
        model:
          "fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
      },
      {
        id: "notion",
        prompt:
          "a gentleman otter , black and white, doodle, in the style of TOK,",
        negative_prompt: `((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), out of frame, extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck)))`,
        model:
          "paulonteri/notion-style:cad4048570ae69f524edcca9c41cc2c2e7d5a882c749d4d87cdf0b5eba520c77",
      },
    ];
    const model = models.find((m) => m.id === req.body.model);
    console.log(model);

    const output = await replicate.run(
      model.model as `${string}/${string}:${string}`,
      {
        input: {
          prompt: model.prompt,
          negative_prompt: model.negative_prompt,
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

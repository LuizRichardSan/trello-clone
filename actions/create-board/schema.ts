import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "O título é obrigatório",
    invalid_type_error: "O título é obrigatório",
  }).min(3, {
    message: "O título é muito curto."
  }),
  image: z.string({
    required_error: "A imagem é obrigatória",
    invalid_type_error: "A imagem é obrigatória",
  }),
});
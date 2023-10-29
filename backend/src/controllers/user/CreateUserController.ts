import { Request, Response } from "express";

import { CreateUserService } from "../../services/user/CreateUserService";


class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body
    const createUserService = new CreateUserService()

    const usr = await createUserService.execute({
      name,
      email,
      password
    })
    return res.json(usr)
  }
}


export { CreateUserController }
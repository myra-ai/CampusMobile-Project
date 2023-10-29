import { Request, Response } from "express";

import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserComtroller{

    async handle(req:Request, res:Response){
        console.log(req)
        const user_id = req.user_id;
        const detailUserService = new DetailUserService()
        const user = await detailUserService.execute(user_id)

        return res.json(user)

    }

}

export { DetailUserComtroller }
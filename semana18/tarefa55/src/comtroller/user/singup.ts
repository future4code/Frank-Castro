import * as userBusiness from '../business/userBusiness'
import { Request, Response } from "express";

export default async function createUser(req: Request, res: Response) {

        
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
				role: req.body.role
            }

            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
    }
}
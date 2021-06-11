import { user } from "../types";
import app from "../app"
import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";



export default async function createUser( req: Request, res: Response ): Promise<void> {

   try {
      const {name, email, password } = req.body

      if (!email || email.indexOf("@") === -1) {
         throw new Error("Invalid email");
       }
       if (!password || password.length < 6) {
         throw new Error("Invalid password");
       }
      if (!name || !email || !password) {
         res.statusCode = 422
         throw new Error("fill in the fields'password' and 'email' ")
      }


      const [user] = await connection('cookes')
         .where({ email })
      if (user) {
         res.statusCode = 409

         throw new Error('E-mail already registered')
      }
      const id: string = generateId();
      const newUser: user = { id, name, email, password }

      await connection('cookes')
         .insert(newUser);

      const token: string = generateToken(
         {
            id: newUser.id
      });  

      res.status(201).send({ token });

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
}
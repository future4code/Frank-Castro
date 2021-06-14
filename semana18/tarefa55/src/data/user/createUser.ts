import { user } from "../../model/insertUser";
import app from "../../comtroller/app"
import { USER_ROLES } from "../../model/insertUser"
import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../../services/idGenerator";
import { generateToken } from "../../services/authenticator";
import { createHash } from "../../services/hashManager";



export default async function createUser( req: Request, res: Response ): Promise<void> {

   try {
      const {name, email, password, role} = req.body

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


      const [user] = await connection('User_Arq')
         .where({ email })
      if (user) {
         res.statusCode = 409

         throw new Error('E-mail already registered')
      }
      const id: string = generateId();
      const newUser: user = { id, name, email, password: createHash(password), role }

      await connection('User_Arq')
         .insert(newUser);

      const token: string = generateToken(
         {
            id,
            role
      });  

      res.status(201).send({ token });

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
}
import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import connection from "./connection"
import { AddressInfo } from "net"
import { user } from "./types/recipe"

dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/user/all", async (req: Request, res: Response) => {
   try {
      const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
      `)

      const user: user[] = result[0]

      if(!user.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(user)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get("/user/procurar", async (req: Request, res: Response) => {
   try {

      const name = req.query.name as string || "name"
      const email = req.query.email as string || "email"
      const type = req.query.type as string || "type"

      if (!name || !email || !type) {
         res.statusCode = 400
         throw new Error("Missing one or more queries: 'name', 'email', 'type'.")
      }

      const result = await connection.raw(`
         SELECT id, name, email, type FROM aula48_exercicio
         WHERE name LIKE "%${name}%"
      `)

      const user: user[] = result[0]

      if(!user.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(user)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get("/user/:type", async (req: Request, res: Response) => {
   try {

      const type = req.params.type as string || "type"

      if (!type) {
         res.statusCode = 400
         throw new Error("Missing one or more queries: 'name', 'email', 'type'.")
      }

      const result = await connection.raw(`
      SELECT id, name, email, type FROM aula48_exercicio WHERE type LIKE "%${type}%";
      `)

      const user: user[] = result[0]

      if(!user.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(user)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

// app.get("/recipes/search", async (req: Request, res: Response) => {
//    try {
//       const title = req.query.title as string
//       const orderBy = req.query.orderBy as string || "title"
//       const orderType = req.query.orderType as string || "ASC"
//       const page = Number(req.query.page) || 1

//       if (!title || !orderBy || !orderType) {
//          res.statusCode = 400
//          throw new Error("Missing one or more queries: 'title', 'orderBy', 'orderType'.")
//       }
//       const result = await connection.raw(`
//          SELECT title, name AS "author", description
//          FROM recipes_aula48
//          JOIN users_aula48 
//          ON user_id = users_aula48.id
//          WHERE title LIKE "%${title}%"
//          ORDER BY ${orderBy} ${orderType.toUpperCase()}
//          LIMIT 5
//          OFFSET ${5 * (page - 1)};
//       `)

//       const recipes: recipe[] = result[0]

//       if(!recipes.length){
//          res.statusCode = 404
//          throw new Error("No recipes found")
//       }

//       res.status(200).send({
//          recipes,
//          page
//       })
      
//    } catch (error) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// })

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})

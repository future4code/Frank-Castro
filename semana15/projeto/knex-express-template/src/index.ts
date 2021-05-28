import app from "./app"
import { send } from "process"
import connection from "./connection"
import { Request, Response } from "express"

app.get('/users', async(req, res) => {

    try {
        const result = await connection.raw(
            "SELECT * FROM user"
        )
        res.send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("ERROR")
    }

})

app.put('/users', async(req, res) => {

    try {
        await connection.raw(`
        INSERT INTO user (id, name, nickname, email)
        VALUES (
            "${req.body.id}",
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
        )
        `
        )

        res.status(200).send("sucesso!!")
    } catch (error) {
        console.log(error.message);
        res.status(500).send("ERROR")
    }

})

app.get("/users/:id", async (req:Request, res:Response) => {
    try {
        const result = await connection.raw(`
        SELECT * from user WHERE id LIKE "%${req.params.id}%";
        `
        );
        res.status(200).send(result[0])
    }catch (error) {
        res.status(400).send(error.message);
      }
}) 

app.put("/users/edit/:id", async (req: Request, res: Response) => {
    try {
      await connection("user")

        .update({name: req.body.name,})
        .update({nickname: req.body.nickname})
        .where({ id: req.params.id });

      res.status(200).send("name and nickname updated!");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("error");
    }
  });

  //___________________________________________________________________________//

  app.get('/task', async(req, res) => {
    try {
        const result = await connection.raw(
            "SELECT * FROM task"
        )
        res.send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("ERROR")
    }
})

  app.put('/task', async(req, res) => {

    try {
        await connection.raw(`
        INSERT INTO task (title, description, limitDate, creatorUserId)
        VALUES (
            "${req.body.title}",
            "${req.body.description}",
            "${req.body.limitDate}",
            "${req.body.creatorUserId}"
        )
        `
        )
        res.status(200).send("sucesso!!")
    } catch (error) {
        console.log(error.message);
        res.status(500).send("ERROR")
    }

})

    app.get("/task/:id", async (req:Request, res:Response) => {
        try {
            const result = await connection.raw(`
            SELECT * from user AND task WHERE id LIKE "%${req.params.id}%";
            `
            );
            res.status(200).send(result[0])
        }catch (error) {
            res.status(400).send(error.message);
        }
}) 



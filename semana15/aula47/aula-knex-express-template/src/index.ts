import app from "./app"
import connection from "./connection"
import { Request, Response } from "express"
import { send } from "process"


app.get('/actors', async( req, res) => {

    try {

            const result = await connection.raw(`
              SELECT * FROM Actor 
            `)
            res.send(result[0])

    } catch (error) {
        console.log(error.message);
        res.status(500).send("ERROR")
    }

})

 app.get("/actors/:name", async (req:Request, res:Response) => {
    try {
        const result = await connection.raw(`
        SELECT * from Actor WHERE name LIKE "%${req.params.name}%";
        `
        );
        res.status(200).send(result[0])
    }catch (error) {
        res.status(400).send(error.message);
      }
}) 

app.get("/actors/:gender", async (req:Request, res:Response) => {
    try {
        const result = await connection.raw(`
        SELECT Count(*) from Actor 
        WHERE gender = "${req.params.gender}";
        `
        );
        res.status(200).send(result)
    }catch (error) {
        res.status(400).send(error.message);
      }
})

app.put("/actors/:id", async (req: Request, res: Response) => {
    try {

      await connection("Actor")

        .update({salary: req.body.salary,})

        .where({ id: req.params.id });

      res.status(200).send("Salary updated!");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("error");
    }
  });

  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {

      await connection("Actor")
        .del("")
        .where({ id: req.params.id });

      res.status(200).send("actor deleted!");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("error");
    }
  });

  app.get("/actors/avg/:gender", async (req: Request, res: Response) => {
    try {
      const result = await connection("Actor")

        .avg("salary")

        .where({ gender: req.params.gender });

      res.status(200).send(result);

    } catch (error) {

      console.log(error.message);
      res.status(500).send("error");
    }
  });

app.get("/actors/:id", async (req: Request, res: Response) => {
    try {
      const result = await connection("Actor")

      .select()
      .where({id: req.params.id})
      
      res.send(result[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  app.get("/actors", async (req: Request, res: Response) => {
    try {
      const result = await connection("Actor")

      .count()
      .where({gender : req.query.gender})

      res.status(200).send(result[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  app.post("/actors", async(req:Request, res:Response) => {
    try {
        await connection("Actor")

        .update({salary:req.body.salary})
        .where({id: req.body.id})
        
        res.status(200).send("updated!");
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("error");
    }
})

app.delete("/actors/:id", async (req: Request, res: Response) => {
    try {

      await connection("Actor").del().where({ id: req.params.id });
      res.status(200).send("Actor deleted.");
      
    } catch (error) {
      console.log(error.message);
      res.status(500).send("error");
    }
  });
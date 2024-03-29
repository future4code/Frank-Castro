# Aula 51

### Exercício 1
**a.** sim pois acredito que strings pondem ser mais complexas e dificeis de se repetir

**b.** 
```
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
```

**c.** 
```
app.get("/actors/:gender", async (req:Request, res:Response) => {
    try {
        const result = await connection.raw(`
        SELECT Count(*) from Actor 
        WHERE gender = "${req.params.gender}";
        `
        );
        res.status(200).send(result[0])
    }catch (error) {
        res.status(400).send(error.message);
      }
})
```

### Exercício 2

**a.** 
```
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
```

**b.** 
```
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
```

**c.** 
```
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
``` 

### Exercício 3

**a.** 
```
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
```

**b.** 
```
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
```

### Exercício 4

**a.** 
```
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
```

**b.**
```
app.delete("/actors/:id", async (req: Request, res: Response) => {
    try {

      await connection("Actor").del().where({ id: req.params.id });
      res.status(200).send("Actor deleted.");
      
    } catch (error) {
      console.log(error.message);
      res.status(500).send("error");
    }
  });
```
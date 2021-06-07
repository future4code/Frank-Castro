# Aula 47

### Exercício 1
**a.** sim pois acredito que strings pondem ser mais complexas e dificeis de se repetir

**b.** ele primeiro cria uma cost user depois cria a conexão com e então cria o objeto com todos os elementos dentro, onde se espera todos para cria o usuario

**c.** 
```
CREATE TABLE IF NOT EXISTS to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);
```

**d.** 
```
export default async function createUser( req: Request, res: Response ): Promise<void> {

   try {
      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {

         res.statusCode = 422
         throw new Error("fill in the fields 'name','nickname', 'password' and 'email' ")

      }


      const [user] = await connection('to_do_list_users')
         .where({ email })
      if (user) {
         res.statusCode = 409
         throw new Error('E-mail already registered')
      }
      const id: string = generateId();
      const newUser: user = { id, name, nickname, email, password }

      await connection('to_do_list_users')
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
```


### Exercício 2

**a.** as string indica que vou receber apenas strings, precisamos dela pq o TS não sabe oq vai receber direito então dá erro 

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
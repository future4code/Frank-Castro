import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  balance: 0,
  cpf: number,
  age: number,
  birthDate: number
}

let users: User[] = []

const app = express()
app.use(express.json())
app.use(cors())


app.get("/users", (req: Request, res: Response) => {
    res
    
    .status(200)
    .send(users)
    })

app.post("/users", (req: Request, res: Response) => {
  try {
    const { id, name, balance, cpf, age, birthDate } = req.body

    const newUser: User = {
      id,
      name,
      balance,
      cpf,
      age,
      birthDate,
    }

    users.push(newUser)
    console.log(users)
    res.status(200).send("user created successfuly")
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

app.get("/user", (req: Request, res: Response) => {
  try {
    const cpf = Number(req.query.id)
    
    if (isNaN(cpf)) {
      throw new Error("cpf needs to be composed only of numbers")
    }
    
    const result = users.filter((user) => user.cpf === cpf)

    if (!result.length) {
      throw new Error("User not found")
    }

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

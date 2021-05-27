let tasks = [
    "lavar a louça"
]
const newTask = String(process.argv[2])
const result = tasks.push (newTask)

console.log(`${result}`)
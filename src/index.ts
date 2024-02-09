import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { userRouter } from "./routers/userRouter"
import { documentRouter } from "./routers/documentRouter"
import { ancestryRouter } from "./routers/ancestryRouter"
import { citizenshipRouter } from "./routers/citizenshipRouter"

dotenv.config()

if (!process.env.PORT) {
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string)

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/documents', documentRouter)
app.use('/api/ancestry', ancestryRouter)
app.use('/api/citizenship',citizenshipRouter)

app.listen(PORT, () => {
    console.log(`Listening na porta ${PORT} <3`)
})
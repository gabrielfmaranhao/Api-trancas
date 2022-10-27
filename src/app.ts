import  express, { NextFunction, Response, Request }  from "express";
import braidsRoutes from "./routes/braids.routes";
import clientRoutes from "./routes/client.routes";
import { AppError } from "./errors/errors";


const app = express()
app.use(express.json())

app.use("/clientes", clientRoutes)
app.use("/trancas", braidsRoutes)

app.use(( err: Error, request: Request, response: Response, next: NextFunction) => {
    if( err instanceof AppError) {
        return response.status(err.status).json({ status: err.status, message: err.message})
    }
    console.log(err);
    return response.status(500).json({ status: 500, message: "Erro interno do servidor"})
})

export default app
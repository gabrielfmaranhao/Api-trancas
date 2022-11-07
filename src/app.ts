import  express, { NextFunction, Response, Request }  from "express";
import braidsRoutes from "./routes/braids.routes";
import clientRoutes from "./routes/client.routes";
import sessionRoutes from "./routes/session.routes";
import handleErrorMiddleware from "./middlewares/handleError.middlewares";


const app = express()
app.use(express.json())

app.use("/clientes", clientRoutes)
app.use("/trancas", braidsRoutes)
app.use("/login" , sessionRoutes)

app.use(handleErrorMiddleware);

export default app
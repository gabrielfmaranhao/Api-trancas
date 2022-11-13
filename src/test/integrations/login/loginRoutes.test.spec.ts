import AppDataSource from "../../../data-source";
import { DataSource } from "typeorm";
import  request  from "supertest";
import app from "../../../app";
import { mockedLoginAdmin, mockedLoginEmail, mockedLoginPassword } from "../../mock";

describe("Testes para a rota Login", () => {
    let connnection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize().then( async (dataSource) => {
            connnection = dataSource
        }).catch((error) => console.log(error))
    })
    
    afterAll( async () =>{ await connnection.destroy()})

    test("POST /Login - É possível fazer login", async () => {
        const response = await request(app).post("/login").send(mockedLoginAdmin)
        expect(response.body).toHaveProperty("token")
        expect(response.status).toBe(200)
    })
    test("POST /Login - Não é possível fazer login com email errado", async () => {
        const response = await request(app).post("/login").send(mockedLoginEmail)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
    })
    test("POST /Login - Não é possível fazer login com o password errado", async () => {
        const response = await request(app).post("/login").send(mockedLoginPassword)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
    })

})
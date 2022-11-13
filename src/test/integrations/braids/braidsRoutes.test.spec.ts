import AppDataSource from "../../../data-source";
import app from "../../../app";
import { DataSource } from "typeorm";
import  request  from "supertest";


describe("Testes para a rota de Tranças", () => {
    let connnection: DataSource

    beforeAll( async () => {
        await AppDataSource.initialize().then( async (dataSource) => {
            connnection = dataSource
        }).catch((error) => console.log(error))
    })

    afterAll( async () => await connnection.destroy())

    test("POST /trancas - É possível criar uma trança", async () => {

    })
    test("POST /trancas - não é possível criar uma trança sem token", async () => {

    })
    test("POST /trancas - Não é possível criar uma trança com o token inválido", async () => {

    })
    test("POST /trancas - Não é possível criar uma trança com um cliente que não existe", async () => {

    })
    test("POST /trancas - Não é possível criar uma trança sem um instagram de um cliente", async () => {
        
    })
})
import AppDataSource from "../../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../../app";
import { mockedLoginAdmin, mockedClientNew, mockedUpdateClient } from "../../mock";

const tokenErrado = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
const idInvalido = "1abdf8f1-41cf-47c6-b385-6107a117656a"
describe("Testes para a rota de Clientes", () => {
    let connnection: DataSource

    beforeAll( async () => {
        await AppDataSource.initialize().then( async (dataSource)=> {
            connnection = dataSource
        }).catch((error) => console.log(error))
    })

    afterAll( async ()=> { await connnection.destroy()})

    test("POST /clientes - É possível criar um cliente", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const response = await request(app).post("/clientes").set("Authorization", `Bearer ${login.body.token}`).send(mockedClientNew);

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("inst");
        expect(response.body).toHaveProperty("name");
    })
    test("POST /clientes - Criando cliente com um instagram já existente", async ()=> {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const client = await request(app).post("/clientes").set("Authorization", `Bearer ${login.body.token}`).send(mockedClientNew);
        const response = await request(app).post("/clientes").set("Authorization", `Bearer ${login.body.token}`).send(mockedClientNew);

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("status");
        expect(response.body).toHaveProperty("message");
    })
    test("POST /clientes - Criando cliente sem token", async () => {
        const client = await request(app).post("/clientes").send(mockedClientNew);
        
        expect(client.status).toBe(401)
        expect(client.body).toHaveProperty("message")
        expect(client.body).toHaveProperty("status")
    })
    test("POST /clientes - Criando cliente com token errado", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const client = await request(app).post("/clientes").set("Authorization", `Bearer ${tokenErrado}`).send(mockedClientNew);

        expect(client.status).toBe(401)
        expect(client.body).toHaveProperty("status")
        expect(client.body).toHaveProperty("message")
    })
    test("GET /clientes - listando todos os clientes", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const response = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);

        expect(response.status).toBe(200)
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("name");
        expect(response.body[0]).toHaveProperty("inst");
    })
    test("GET /clientes - Listando clientes sem token", async () => {
        const response = await request(app).get("/clientes");

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
        expect(response.body).toHaveProperty("status")
    })
    test("GET /clientes - Listando todos os clientes com token errado", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const response = await request(app).get("/clientes").set("Authorization", `Bearer ${tokenErrado}`);

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
        expect(response.body).toHaveProperty("status")
    })
    test("GET /clientes/:insta - Listando cliente por instagram", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseInsta = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const inst = responseInsta.body[0].inst
        const response = await request(app).get(`/clientes/${inst}`).set("Authorization", `Bearer ${login.body.token}`);
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("inst")
    })
    test("GET /clientes/:inst - Listando cliente que não existe", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const inst = "@instaNãoExiste"
        const response = await request(app).get(`/clientes/${inst}`).set("Authorization", `Bearer ${login.body.token}`);

        expect(response.status).toBe(402)
        expect(response.body).toHaveProperty("status")
        expect(response.body).toHaveProperty("message")
    })
    test("GET /clientes/:inst - Listando cliente sem token", async () => {
        const inst = "@instaNãoExiste"
        const response = await request(app).get(`/clientes/${inst}`)

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("status")
        expect(response.body).toHaveProperty("message")
    })
    test("GET /clientes/:inst - Listando cliente com token inválido", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const inst = "@instaNãoExiste"
        const response = await request(app).get(`/clientes/${inst}`).set("Authorization", `Bearer ${tokenErrado}`);

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("status")
        expect(response.body).toHaveProperty("message")
    })
    test("PATCH /clientes/:id - Atualizando nome e instagram do cliente", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseId = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const patchResponse = await request(app).patch(`/clientes/${responseId.body[0].id}`).set("Authorization", `Bearer ${login.body.token}`).send(mockedUpdateClient);

        expect(patchResponse.status).toBe(201);
        expect(patchResponse.body).toHaveProperty("id")
        expect(patchResponse.body).toHaveProperty("name")
        expect(patchResponse.body).toHaveProperty("inst")
    })
    test("PATCH /clientes/:id - Atualizando instagram cliente", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseId = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const patchResponse = await request(app).patch(`/clientes/${responseId.body[0].id}`).set("Authorization", `Bearer ${login.body.token}`).send({inst: "@updateInsta"});

        expect(patchResponse.status).toBe(201);
        expect(patchResponse.body).toHaveProperty("id")
        expect(patchResponse.body).toHaveProperty("name")
        expect(patchResponse.body).toHaveProperty("inst")
    })
    test("PATCH /clientes/:id - Atualizando nome cliente", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseId = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const patchResponse = await request(app).patch(`/clientes/${responseId.body[0].id}`).set("Authorization", `Bearer ${login.body.token}`).send({name: "clientUpdate"})

        expect(patchResponse.status).toBe(201);
        expect(patchResponse.body).toHaveProperty("id")
        expect(patchResponse.body).toHaveProperty("name")
        expect(patchResponse.body).toHaveProperty("inst")
    })
    test("PATCH /clientes/:id - Atualizando client sem token ", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseId = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const patchResponse = await request(app).patch(`/clientes/${responseId.body[0].id}`).send({name: "clientUpdate"})

        expect(patchResponse.status).toBe(401);
        expect(patchResponse.body).toHaveProperty("status")
        expect(patchResponse.body).toHaveProperty("message")
        
    })
    test("PATCH /clientes/:id - Atualizando cliente com token inválido", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseId = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const patchResponse = await request(app).patch(`/clientes/${responseId.body[0].id}`).set("Authorization", `Bearer ${tokenErrado}`).send({name: "clientUpdate"})

        expect(patchResponse.status).toBe(401);
        expect(patchResponse.body).toHaveProperty("status")
        expect(patchResponse.body).toHaveProperty("message")
    })
    test("PATCH /clientes/:id - Atualiza o cliente com id inválido", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const patchResponse = await request(app).patch(`/clientes/${idInvalido}`).set("Authorization", `Bearer ${login.body.token}`).send(mockedUpdateClient)

        expect(patchResponse.status).toBe(404)
        expect(patchResponse.body).toHaveProperty("status")
        expect(patchResponse.body).toHaveProperty("message")
    })
    test("DELETE /clientes/:id - Faz a deleção de um cliente com o id inválido", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const deleteResponse = await request(app).delete(`/clientes/${idInvalido}`).set("Authorization", `Bearer ${login.body.token}`)
        
        expect(deleteResponse.status).toBe(400)
        expect(deleteResponse.body).toHaveProperty("status")
        expect(deleteResponse.body).toHaveProperty("message")
    })
    test("DELETE /clientes/:id - Faz a deleção de um cliente sem token ", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseId = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const deleteResponse = await request(app).delete(`/clientes/${responseId.body[0].id}`)
        
        expect(deleteResponse.status).toBe(401)
        expect(deleteResponse.body).toHaveProperty("status")
        expect(deleteResponse.body).toHaveProperty("message")
    })
    test("DELETE /clientes/:id - Faz a deleção de um cliente com token inválido", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseId = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const deleteResponse = await request(app).delete(`/clientes/${responseId.body[0].id}`).set("Authorization", `Bearer ${tokenErrado}`)
        
        expect(deleteResponse.status).toBe(401)
        expect(deleteResponse.body).toHaveProperty("status")
        expect(deleteResponse.body).toHaveProperty("message")
    })
    test("DELETE /clientes/:id - Faz a deleção de um cliente", async () => {
        const login = await request(app).post("/login").send(mockedLoginAdmin);
        const responseId = await request(app).get("/clientes").set("Authorization", `Bearer ${login.body.token}`);
        const deleteResponse = await request(app).delete(`/clientes/${responseId.body[0].id}`).set("Authorization", `Bearer ${login.body.token}`)

        expect(deleteResponse.status).toBe(200)
        expect(deleteResponse.body).toHaveProperty("message")
    })
})
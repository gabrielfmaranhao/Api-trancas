import { IClientRequest } from "../../interfaces/client"
import { IRequestLogin } from "../../interfaces/session"

export const mockedLoginAdmin: IRequestLogin  = {
    email: "gabrielmaranhao48@gmail.com",
    password:"Gabriel2102!"
}

export const mockedLoginPassword: IRequestLogin = {
    email: "gabrielmaranhao48@gmail.com",
    password: "PasswordErrada"
}

export const mockedLoginEmail: IRequestLogin = {
    email: "emailErrado@gmail.com",
    password: "Gabriel2102!"
}

// MOKED CLIENTES 

export const mockedClientNew :IClientRequest = {
    inst: "@clientNovo",
    name: "client novo"
}

export const mockedUpdateClient :IClientRequest = {
    inst: "@clientAtualizado",
    name: "Client atualizado"
}

export interface IClientRequest {
    name: string
    inst: string
}

export interface IClientResponse {
    id: string
    name: string
    inst: string
}

export interface IClientUpdate {
    name?: string
    inst?: string
}
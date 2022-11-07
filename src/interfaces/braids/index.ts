export interface IBraidsRequest {
    type: string
    price: number
    time?: string
    date?: Date
    image_p?: File | Express.Multer.File
    image_s?: string
    insta: string
}

export interface IBraidsResponse {
    type: string
    price: number
    insta: string
    time?: string
    date?: Date
    image_p: string
    image_s?: string

}

export interface IUpdateBraidRequest {
    type?: string
    price?: number
    time?: string
    date?: Date
    image_p?: File | Express.Multer.File
    image_s?: string
}


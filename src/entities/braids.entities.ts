import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Cliente from "./cliente.entities";

@Entity("braids") 
class Braids {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({})
    type: string

    @Column({})
    price: number

    @Column({})
    time: string

    @Column({})
    date: Date

    @Column({})
    image_p: string

    @Column({})
    imagem_s: string

    @ManyToOne(()=> Cliente)
    client: Cliente
}

export default Braids
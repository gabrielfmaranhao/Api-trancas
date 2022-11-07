import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Cliente from "./cliente.entities";

@Entity("braids") 
class Braids {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable: true})
    type: string

    @Column({nullable: true})
    price: number

    @Column({nullable: true})
    time: string

    @Column({nullable: true})
    date: Date

    @Column({nullable: true})
    image_p: string

    @Column({nullable: true})
    imagem_s: string

    @ManyToOne(()=> Cliente, cliente => cliente.braids, {onDelete:"CASCADE"})
    client: Cliente
}

export default Braids
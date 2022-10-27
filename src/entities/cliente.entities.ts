import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Braids from "./braids.entities";

@Entity('client')
class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: "varchar" ,length:120, nullable: true})
    name: string

    @Column({type: "varchar", length: 120, unique: true, nullable: false})
    inst: string

    @OneToMany(()=> Braids, braid => braid.client)
    braids: Braids[]
}

export default Cliente
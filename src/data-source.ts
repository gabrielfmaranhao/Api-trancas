import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = new DataSource(
    {
        type:"postgres",
        url: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === "production" ? {rejectUnauthorized: false}: false,
        logging: true,
        synchronize: false,
        entities:['src/entities/*.ts'],
        migrations:['src/migrations/*.ts']
    }
)

export default AppDataSource
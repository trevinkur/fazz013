import pg, { Pool } from "pg"
import { database, db_port, host, password, user } from "../config/env";

export const pool: Pool = new pg.Pool({
    host: host,
    user: user,
    password: password,
    database: database,
    port: db_port,
})
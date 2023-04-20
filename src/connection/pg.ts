import pg, { Pool } from "pg"
import { database, db_port, host, password, user } from "../config/env";

// export class Pg {
//     constructor(
//         private db: Pool = new pg.Pool({
//             host: host,
//             user: user,
//             password: password,
//             database: database,
//             port: db_port,
//         })
//     ) {

//     }
// }

export const pool: Pool = new pg.Pool({
    host: host,
    user: user,
    password: password,
    database: database,
    port: db_port,
})
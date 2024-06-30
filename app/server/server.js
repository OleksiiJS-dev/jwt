import { constants } from "crypto"
import express from 'express';

const server = 'true'

const app = express()

function main () {
    app.use(express.json);

    app.listen(
        3000,
        console.log("listening on port 3000")
    )
}

main();

console.log("server", process.env.KEYS)

export default server
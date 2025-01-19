import { config } from "dotenv";
import env from "env-var";

config()

const PORT = env.get('PORT').asPortNumber()
//const PASSWORD = env.get('PASSWORD').asIntPositive()
const PASSWORD = env.get('PASSWORD').asString() // este funciono para numeros raro

console.log(PORT)
console.log(PASSWORD)
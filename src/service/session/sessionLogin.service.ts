import  jwt  from "jsonwebtoken";
import { IRequestLogin } from "../../interfaces/session";
import "dotenv/config"
import { AppError } from "../../errors/errors";
const sessionLoginService = async ({email, password}:IRequestLogin) => {
    const adm = {email: process.env.EMAIL_ADM, password: process.env.PASSWORD_ADM};
    if(email !== adm.email) {
        throw new AppError(400,"email ou senha inválidos");
    }
    if(password !== adm.password) {
        throw new AppError(400,"email ou senha inválidos");
    }
    const token = jwt.sign({email: adm.email}, process.env.SECRET_KEY as string, { expiresIn: "24h"});
    return token
}
export default sessionLoginService
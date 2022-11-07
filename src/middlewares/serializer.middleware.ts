import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { MixedSchema } from "yup/lib/mixed";

const verifySerialization = (serializer: MixedSchema) => async (req: Request, res: Response, nex: NextFunction) => {
    await serializer.validate(req.body, { stripUnknown: true})
    .then((value)=> {
        req.body = value;
        nex();
    })
    .catch((error: ValidationError)=> { return res.status(400).json({message: error.errors})});
}

export default verifySerialization
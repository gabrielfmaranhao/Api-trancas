import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { Request, Response, NextFunction } from "express";

const upload = multer({storage: multer.diskStorage(
    {
        destination: "upload",
        filename: (request, file, callback) => {
            const filename = `${file.originalname}`

            return callback(null, filename)
        }
    }
)})
export default upload
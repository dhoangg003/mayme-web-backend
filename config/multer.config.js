import multer from "multer";

import fs from "fs";

if (!fs.existsSync("upload")) {
  fs.mkdirSync("upload");
}

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split(".").pop();
    const filename = `${file.originalname}-${uniqueSuffix}.${fileExtension}`;
    cb(null, filename);
  },
});

export default multerConfig;

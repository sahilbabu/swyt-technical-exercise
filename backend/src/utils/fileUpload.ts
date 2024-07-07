import multer from 'multer';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

/* File uplaod middleware
 * ------------------------- */

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB file size limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Images only!'));
    }
  }
}).single('image');

export const handleFileUpload = (req: Request, res: Response): Promise<string> => {
  return new Promise((resolve, reject) => {
    upload(req, res, (err: any) => {
      if (err) {
        return reject(err);
      }
      if (!req.file) {
        return reject(new Error('No file uploaded'));
      }
      resolve(`/uploads/${req.file.filename}`);
    });
  });
};

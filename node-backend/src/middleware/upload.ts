import multer from 'multer';

export const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'application/pdf') {
      return callback(null, false);
    }
    callback(null, true);
  },
});

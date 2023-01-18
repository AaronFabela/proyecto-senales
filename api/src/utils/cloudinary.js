import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";

cloudinary.config({
  cloud_name: "chavz",
  api_key: "195865688276753",
  api_secret: "nKbebeIcFH7vcXr_XlmWTebPmN0",
  secure: true,
});

export const uploadImage = async (imagePath) => {
  return await cloudinary.uploader.upload(imagePath, { folder: "senales" });
};

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};

export const filesUpload = () => {
  return fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  });
};

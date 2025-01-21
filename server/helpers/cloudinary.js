const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "diu325muk",
  api_key: "838422356444722",
  api_secret: "3mpnonlK6QhcQuHF-HWn5d1Gvxw",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };

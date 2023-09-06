// import {Cloudinary} from "@cloudinary/url-gen";
require('dotenv').config()
const cloudinary = require('cloudinary').v2;
// const cld = new cloudinary({cloud: {cloudName: 'dxkakimms'}});
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

let image = "./user2.png"

async function run(image) {
   try {
    const result = await cloudinary.uploader.upload(image);
    console.log(`Successfully uploaded ${image}`);
    console.log(`> Result: ${result.secure_url}`);
   } catch (error) {
    console.log(error)
   }
    
  }

  run(image)

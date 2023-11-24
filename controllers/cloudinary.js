const cloudinary = require("cloudinary").v2;

// configs

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadimages = async (req, res) => {
  try {
    let result = await cloudinary.uploader.upload(req.body.images, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    });
    res.json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

exports.removeimage = async (req, res) => {
  let image_id = req.params.id;
  console.log("image_id: ", image_id);

  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
};

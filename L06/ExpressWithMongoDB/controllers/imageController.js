const Image = require('../models/images')


let imageName = ""
let fileName = ""
let location = ""

const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        
        //set custom name location for image to save on database later
        imageName = Date.now()
        fileName = file.originalname
        location = 'images/'+imageName+ path.extname(file.originalname)

        cb(null, imageName +path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const getUploadImage = (req, res) => {
    res.render('uploadImage', {title: "Upload Image"})
}

const postUpload = (req, res) => {
    let image = new Image({
        name: imageName,
        location: location,
        filename: fileName,
    })
    image.save((err,result) => {
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
        }
    })

    res.send('uploaded')
}

const getImage = async (req, res) => {
    let images = []
    try {
        data = await Image.find();
        console.log(data);
        data.forEach((img) => {
            images.push(img.location)
        });
      } catch (error) {
        console.log(error);
      } finally {
        res.render('slideshow', {title: 'Slide Show', images: images})
      }
    
}

module.exports = {getUploadImage, postUpload, upload, getImage}
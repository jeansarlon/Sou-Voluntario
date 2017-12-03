var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.mimetype.replace('image/','.'))
    
  }
})

module.exports.upload = multer({ storage: storage });

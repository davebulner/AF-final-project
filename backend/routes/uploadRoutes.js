import express from 'express'
import multer from 'multer'
import path from 'path'

const router = express.Router()


const storage = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, 'documents/')
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }

})

function checkFileType(file, cb) {
    const filetype = /png|pdf|docx|xlsx/
    const extname = filetype.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetype.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)

    } else {
        cb('Documents only')
    }
}

const upload = multer({

    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    }

})

router.post('/document', upload.single('document'), (req, res) => {
    res.send(`/${req.file.path}`)
})

export default router
const express = require("express");
const app = express();
const multer  = require('multer')
const XLSX = require('xlsx');

// setup multer for file upload
var storage = multer.diskStorage(
    {
        destination: './bvs/build',
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

var imgstorage = multer.diskStorage(
    {
        destination: './bvs/public/img/bvs',
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

const upload = multer({ storage: storage } )

const imgUpload = multer({ storage: imgstorage } )

app.use(express.json());
// serving front end build files
app.use(express.static(__dirname + "/../build"));

// route for file upload
app.post("/api/uploadfile", upload.single('File'), (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.file.originalname + " file successfully uploaded !!");
    const workBook = XLSX.readFile("./bvs/build/" + req.file.originalname);
    XLSX.writeFile(workBook, "./bvs/src/data/" + "public" + ".csv", { bookType: "csv" });

    res.sendStatus(200);
    // res.sned(req.file.originalname.split(".")[0]);
});

app.post("/api/uploadprivatefile", upload.single('File'), (req, res, next) => {
    console.log(req.file.originalname + " file successfully uploaded !!");
    const workBook = XLSX.readFile("./bvs/build/" + req.file.originalname);
    XLSX.writeFile(workBook, "./bvs/src/data/" + "private" + ".csv", { bookType: "csv" });

    return res.sendStatus(200);
});

app.post("/api/uploadphoto", imgUpload.array('file[]'), (req, res, next) => {
    console.log("Files successfully uploaded !!");
    res.set('Access-Control-Allow-Origin', '*');
    res.sendStatus(200);
});

app.get("/get", (req, res, next) => {
    console.log(req.query.filename);
    
});

app.listen(5000, () => console.log("Listening on port 3000"));
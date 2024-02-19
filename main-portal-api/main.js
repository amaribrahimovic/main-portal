require('dotenv').config()
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const cors = require('cors')
const app = require('express')()

// Global Variables
const port = process.env.API_LISTEN_PORT;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Main Setup
// app.use(cors());

app.listen(port, ()=>{
    console.log(`Main API Server listening on ${port}`);
});

app.get('/', (req, res)=>{
    res.send('You can access the API, and it works');
});

// File Upload
const uploadDir = path.join(__dirname, 'uploads');

app.post('/uploadFile', upload.single('file'), (req, res) => {
    const file = req.file;
    const filePath = path.join(uploadDir, file.originalname);

    fs.writeFile(filePath, file.buffer, (err) => {
        if (err){
            console.log('There was an error while saving the file');
            res.status(500).send('There was an error while saving the file');
        } else{
            console.log('The file was saved successfully');
            res.status(200).send('The file was saved successfully');
        }
    });
});

const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const PORT = 3500;
const app = express();

app.use(fileUpload({
    createParentPath: true,
    useTempFiles: true
}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", (req, res) => {
    if (!req.files || !req.files.myFiles) {
        return res.status(400).json({
            status: "error",
            message: "No files uploaded"
        });
    }

    let uploadedFiles = req.files.myFiles;
    if (!Array.isArray(uploadedFiles)) uploadedFiles = [uploadedFiles];

    uploadedFiles.forEach(file => {
        console.log("Uploaded File:", file.name);
    });

    return res.json({
        status: "success",
        message: uploadedFiles.map(f => f.name)
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

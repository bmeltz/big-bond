const express = require('express');

const app = express();
const router = express();
var fs=require('fs');

const allowedMethods = ['GET']

app.use((req, res, next) => {
    if (!allowedMethods.includes(req.method)) return res.end(405, 'Method Not Allowed')
    res.header('Access-Control-Allow-Origin', '*');

    return next()
})


app.use(express.json());
app.use('/', router);
app.listen(4201, '127.0.0.1', function(){
    console.log("server is now listening.");
})
app.get('/', (req, res) => {
    res.send([])
})
const path = require('path')
app.use('/gallery', express.static(path.join(__dirname, 'photogallery')))
router.get('/gallery', function(req, res) {
    
    var EventEmitter=require('events').EventEmitter,
    filesEE=new EventEmitter(),
    photos=[];
    const path = require('path');

    const dirPath = path.resolve(__dirname, './photogallery');
    // this event will be called when all files have been added to photos
    filesEE.on('files_ready',function(){
        res.send(photos);
    });

    // read all files from current directory
    fs.readdir(dirPath, function(err,files){
    if(err) throw err;
    files.forEach(function(file){
        photos.push(file);
    });
    filesEE.emit('files_ready'); // trigger files_ready event
    });
    
});
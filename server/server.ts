const express = require('express');

const app = express();
const router = express();

const allowedMethods = ['GET']

app.use((req, res, next) => {
    // if (!allowedMethods.includes(req.method)) return res.end(405, 'Method Not Allowed')
    res.header('Access-Control-Allow-Origin', '*');

    return next()
})


app.use(express.json());
app.use('/', router);
app.listen(4201, '127.0.0.1', function(){
    console.log("server is now listening. yay");
})
app.get('/', (req, res) => {
    res.send([])
})
const path = require('path')
app.use('/gallery', express.static(path.join(__dirname, 'photogallery')))
router.get('/gallery', function(req, res) {
    
    res.send(['test']);
});
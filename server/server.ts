const express = require('express');

const app = express();
const router = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET');
    if('OPTIONS' == req.method) {
        console.log(req.ip,req.method,req.url);
    }
    else {
        next();
    }
})


app.use(express.json());
app.use('/', router);
app.listen(4201, '127.0.0.1', function(){
    console.log("server is now listening. yay");
})


router.get('/', (req, res) => res.send('hello world'));
router.get('/users', (req, res) => res.send([]));


router.get('/gallery', function(req, res) {
    res.send(['test']);
});
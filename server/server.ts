const express = require('express');

const app = express();
const router = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        console.log('${req.ip} ${req.method} ${req.url}');
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
router.post('/users', (req, res) => res.send({"aint nothin": "test"}));
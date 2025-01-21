const express = require("express");
const router = express.Router();
const constantController = require('../../controllers/constantController');
const ConstantService = constantController.ConstantService;

router.use((req, res, next) => {
    res.set({

        // Allow all the hosts and the request methods
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
        // 'Access-Control-Allow-Credentials': true,

        // Content-type for all api requests is json
        'Content-type': "application/json"
    });
    if (req.method == 'OPTIONS') {
        return res.status(200).end();
    }
    next();
})

//list
router.get('/', (req, res, next) => {
    ConstantService.list()
        .then((constants) => {
            res.status(200);
            res.send(JSON.stringify(constants));
        })
        .catch((err) => {
            if(err) {
                console.log(err);
                throw new Error("ConstantListError", err);
            }
        })
})

//read
router.get('/:constant_id', (req, res, next) => {
    var id = req.params.constant_id;
    console.log(`reading ${id}`);
    ConstantService.read(id)
        .then((constant) => {
            res.status(200);
            res.send(JSON.stringify(constant));
        })
        .catch((err) => {
            console.log(err);
            res.status(404);
            res.end();
        });
})


//post
router.post('/', (req, res, next) => {
    console.log(req.body);
    var data = {
        "symbol": req.body.symbol,
        "name": req.body.name,
        "value": req.body.value
    }
    ConstantService.create(data)
        .then((constant) => {
            res.status(201);
            res.send(JSON.stringify(constant));
        })
        .catch((err) => {
            console.log(err)
            res.status(404);
            res.end();
        })
})

//update
router.put('/:constant_id', (req, res, next) => {
    var id = req.params.constant_id;
    console.log(`updating ${id}`);
    var data = req.body;
    ConstantService.update(id, data)
        .then((update_constant) => {
            res.status(200);
            res.send(JSON.stringify(update_constant));
        })
        .catch((err) => {
            console.log(err);
            res.status(404);
            res.end();
        })
})

//delete
router.delete('/:constant_id', (req, res, next) => {
    var id = req.params.constant_id;
    console.log("Delete" + id);
    ConstantService.delete(id)
        .then((constant) => {
            console.log(constant);
            console.log("Successfully Deleted");
            res.status(200);
            res.send(JSON.stringify(constant));
        })
        .catch((err)=>{
            if(err) console.log(err);
            res.status(404);
            res.end();
        });
})

module.exports = router;
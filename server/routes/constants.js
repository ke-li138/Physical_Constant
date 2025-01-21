const express = require("express");
const router = express.Router();
const constantController = require("../controllers/constantController");
const ConstantService = constantController.ConstantService;

router.get('/', (req, res, next) => {
    ConstantService.list()
        .then((constants) => {
            res.render('constants', {
                constants: constants,
            })
        })
        .catch((err) => {
            if(err) {
                console.log(err);
                throw new Error("ConstantListError", constant);
            }
        })
})

router.get('/add', (req, res, next) => {
    res.render("add");
})

router.post('/add', (req, res, next) => {
    console.log(req.body)
    const constant_data = {
        symbol : req.body.symbol,
        name : req.body.name,
        value : req.body.value,
        id : req.body._id
    };
    ConstantService.create(constant_data)
        .then((constant) => {
            res.redirect('/constants');
            console.log(constant);
        })
        .catch((err) => {
            if(err) {
                console.log(err);
                throw new Error("ConstantSaveError", constant);
            }
        })
})

router.post('/delete/:constant_id', (req, res, next) => {
    console.log("Delete");
    var id = req.params.constant_id
    console.log(id);
    ConstantService.delete(id)
        .then((constant) => {
            console.log("Successfully Deleted");
            res.redirect("/constants");
        })
        .catch((err)=>{
        if (err) console.log(err);
        });
});

router.get('/:constant_id', (req, res, next) => {
    var id = req.params.constant_id;
    console.log("finding " + id);
    ConstantService.read(id)
        .then((constant)=>{
            res.render('edit', {
                constant : constant,
                id : constant._id
            });
        })
        .catch((err) => {
            if (err) console.log(err);
        });
});

// router.post('/:constant_id', (req, res, next) => {
//     console.log(req.body);
//     Constant.findOne({'_id': req.params.constant_id})
//     .then((constant)=>{
//       var data  = {
//           symbol : req.body.symbol,
//           name : req.body.name,
//           value : req.body.value
//         }
//       constant.set(data);
//       constant.save().then(()=>{
//         res.redirect('/constants');
//       });
//     })
//     .catch((err)=>{
//       if (err) console.log(err);
//   });
// });


module.exports = router;

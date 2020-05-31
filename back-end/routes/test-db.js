const router = require('express').Router();
const DBTest = require('../models/dbTestModel');



//GET endpoint should list all test-requests made
router.get('/', (req, res) => {
    if (req.query.id) {
        DBTest.find({_id: req.query.id}, (err, test) => {
            if (err) {
                res.status(500).send({err: "Could not find test with id " + req.params._id});
            } else {
                res.status(200).send(test);
            }
        });
    } else {
        DBTest.find({}, (err, tests) => {
            if (err) {
                res.status(500).send({error: "Could not load from database"});
            } else {
                res.status(200).send(tests);
            }
        });
    }
});

//POST endpoint to post a database test with timestamp (as in the schema)
router.route('/').post((req, res) => {
    const newTest = new DBTest();
    newTest.save((err) => {
        if (err) {
            res.status(500).send({error: "Could not save to database"});
        } else {
            res.status(200).send(newTest);
        }
    });
});

//DELETE style 1: Given a specific ID.  Not too useful
// router.route('/').delete((req, res) =>{
//     DBTest.deleteOne({_id: req.query.id}, (err) =>{
//         if (err) {
//             res.status(500).send({error: "Could not delete from database"})
//         } else {
//             res.status(200).send('Successful Delete');
//         }
//     });
// });

//DELETE style 2: Delete all test db calls
router.route('/').delete((req, res)=> {
    DBTest.deleteMany({}, (err)=> {
        if (err) {
            res.status(500).send("Could not delete all");
        } else {
            res.status(200).send("Deleted all database connection tests");
        }
    });
});
module.exports = router;
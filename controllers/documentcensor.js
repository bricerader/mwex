//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

const documentcensor = require('../models/document');

//GET HTTP method to /documentcensor
router.get('/',(req,res) => {
    documentcensor.getAllDocuments((err, documents)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all documents. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, documents:documents},null,2));
            res.end();

        }
    });
});

//POST HTTP method to /documentcensor
router.post('/', (req,res,next) => {
    let newDocument = new documentcensor({
        censor: req.body.censor,
        documentToCensor: req.body.documentToCensor
    });
    documentcensor.addDocument(newDocument,(err, document) => {
        if(err) {
            res.json({success: false, message: `Failed to add a new document to censor. Error: ${err}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});

//DELETE HTTP method to /documentcensor. Here, we pass in a param which is the object id.
router.delete('/:id', (req,res,next)=> {
    //access the parameter which is the id of the item to be deleted
    let id = req.params.id;
    //Call the model method deleteDocumentById
    documentcensor.deleteDocumentById(id,(err,document) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the document. Error: ${err}`});
        }
        else if(document) {
            res.json({success:true, message: "Deleted successfully"});
        }
        else
            res.json({success:false});
    })
});

module.exports = router;
//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const DocumentcensorSchema = mongoose.Schema({
    censor: {
        type: String,
        required: true
    },
    documentToCensor: {
        type: String,
        required: true,
    }
});

const DocumentCensor = module.exports = mongoose.model('DocumentCensor', DocumentcensorSchema );

//DocumentCensor.find() returns all the documents
module.exports.getAllDocuments = (callback) => {
    DocumentCensor.find(callback);
};

//newDocument.save is used to insert the document into MongoDB
module.exports.addDocument = (newDocument, callback) => {
    newDocument.save(callback);
};

//Here we need to pass an id parameter to DocumentCensor.remove
module.exports.deleteDocumentById = (id, callback) => {
    let query = {_id: id};
    DocumentCensor.remove(query, callback);
};
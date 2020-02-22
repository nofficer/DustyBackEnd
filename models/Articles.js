const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
  title: {
        type: String,
        required: true
  },
  imageUrl: {
    type:String,
    required:true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  preview: {
    type: String,
    required: true
  },
  thadate: {
    type: Date,
    default: Date.now
  }
});


module.exports = Article = mongoose.model('article', ArticleSchema)

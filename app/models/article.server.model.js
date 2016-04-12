var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {type: String,
        default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    website: {
        type: String,
        set: function(url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url = 'http://' + url;
                }
                return url;
            }
        }
    },
    websiteShort: {
        type: String
    },
    linkFollows: {
        type: Number
    },
    tags: []
});


mongoose.model('Article', ArticleSchema);

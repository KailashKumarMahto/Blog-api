const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
        unique: [true, 'Böyle bir kullanıcı adı mevcuttur.'],
        maxlength: [15, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır '],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
    },
    password: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
    },
    eMail: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
        minlength: [8, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
    },
    name: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
    },
    surname: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur.'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('user', userSchema);
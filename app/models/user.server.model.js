var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
var UserSchema = new Schema({
 firstName: String,
 lastName: String,
 email: String,
 username: {
 type: String,
 trim: true,
 unique: true
 },
 password: String,
 created: {
 type: Date,
 default: Date.now
 }
});
mongoose.model('User', UserSchema);

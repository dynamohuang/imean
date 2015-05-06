var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
var UserSchema = new Schema({
 firstName: String,
 lastName: String,
 email: {
 type:String,
 match: /.+\@.+\..+/
 },
 role:{
 type:String,
 enum:['admin','owner','user'],
 default:user
 },
 username: {
 type: String,
 trim: true,
 unique: true,
 required:true
 },
 password: {
 type:String,
 validate: [
 function(password) {
  return password.length >= 6;
 },
 'Password should be longer'
 ]
 },
 created: {
 type: Date,
 default: Date.now
 }
});

UserSchema.statics.findOneByUsername = function (username, callback)
{
 this.findOne({ username: new RegExp(username, 'i') }, callback);
};

UserSchema.methods.authenticate = function(password) {
 return this.password === password;
};

mongoose.model('User', UserSchema);

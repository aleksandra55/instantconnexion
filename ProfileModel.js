var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  name: { type: String },
  job: { type: String },
  image_url: { type: String },
  description: { type: String },
  linkedin_url: { type: String}
});

var Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
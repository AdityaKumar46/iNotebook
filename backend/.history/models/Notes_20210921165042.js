import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  title: {
      type: String,
      required: true
  },

   description: {
      type: String,
      required: true,
      unique: true
  },

   tag: {
      type: String,
      required: true
  },

   date: {
        type: Date,
        required: Date.now
   }

});

module.exports=mongoose.model('user', UserSchema);
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avator: {
    type: String
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Post'
  }
});

export default mongoose.model('User', UserSchema);
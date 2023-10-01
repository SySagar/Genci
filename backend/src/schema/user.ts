import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 30,
  },
  solved: {
    type: Array,
    default: [],
  },
  bio:{
    type: String,
    trim: true,
  },
  displayName: {
    type: String,
    trim: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User',User);
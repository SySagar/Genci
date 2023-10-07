import mongoose from "mongoose";

const PlaygrounQuestion = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
    },
  title: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 30,
  },
  question: {
    type: String,
    required: true,
  },
  testCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String, 
        required: true,
      },
    }],
  solution: {
    type: [String],
  },
  discussion: {
    type: [String],
  },
  difficulty: {
    type: String,
    required: true,
  },
 solvers:{
    type: Number,
    default: 5,
    }
});

export default mongoose.model('PlaygroundQuestion',PlaygrounQuestion);
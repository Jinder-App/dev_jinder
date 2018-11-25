import mongoose from 'mongoose';

const connect = process.env.MONGODB_URI;
mongoose.connect(connect);

const candidateSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})

const models = {
  Candidate: mongoose.model('Candidate', candidateSchema),
};

export default models;

const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: {
    type: string,
    required: [true, "User Id for the submission is missing"],
  },
  problemId: {
    type: string,
    required: [true, "Problem Id for the submission is missing"],
  },
  code: {
    type: string,
    required: [true, "Code for the submission is missing"],
  },
  language: {
    type: string,
    required: [true, "Language for the submission is missing"],
  },
  status: {
    type: String,
    enum: ["Pending", "Success", "RE", "TLE", "MLE", "WA"],
    default: "Pending",
  },
});

const Submission = mongoose.Model("Submission", submissionSchema);

module.exports = Submission;

const submissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    // inject here
    this.submissionRepository = submissionRepository;
  }

  async addSubmission(submission) {
    const submission = this.submissionRepository.createSubmission(submission);
    if (!submission) {
      // TODO: Add error handling here
      throw { message: "Not able to create submission" };
    }
    console.log(submission);
    const response = await submissionProducer(submission);
    return { queueResponse: response, submission };
  }
}

module.exports = SubmissionService;

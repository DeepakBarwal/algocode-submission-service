const submissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    // inject here
    this.submissionRepository = submissionRepository;
  }

  async addSubmission(submission) {
    const submissionResponse =
      this.submissionRepository.createSubmission(submission);
    if (!submissionResponse) {
      // TODO: Add error handling here
      throw { message: "Not able to create submission" };
    }
    console.log(submission);
    const response = await submissionProducer(submissionResponse);
    return { queueResponse: response, submission: submissionResponse };
  }
}

module.exports = SubmissionService;

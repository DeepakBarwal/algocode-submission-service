async function pingRequest(req, res) {
  // every controller function has access to a fastify object
  console.log(this.testService.ping);

  const response = await this.testService.ping();
  return res.send({ data: response });
}

module.exports = { pingRequest };

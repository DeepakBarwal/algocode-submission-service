const fastify = require("fastify")({ logger: true }); // calling the fastify constructor

const app = require("./app");
const connectToDb = require("./config/dbConfig");
const { PORT } = require("./config/serverConfig");

fastify.register(app);

fastify.listen({ port: 3000 }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  await connectToDb();
  console.log(`Server up at port *${PORT}`);
});

const { connect } = require('nats');

async function publishUpdate() {
  const nc = await connect({ servers: process.env.NATS_URL });
  nc.publish('crypto.update', Buffer.from(JSON.stringify({ trigger: "update" })));
  await nc.flush();
  await nc.close();
}

module.exports = publishUpdate;
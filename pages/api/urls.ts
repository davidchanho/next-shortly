// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://${process.env.REACT_APP_MONGO_USER}:${process.env.REACT_APP_MONGO_PASS}@cluster0.59ndz.mongodb.net/${process.env.REACT_APP_MONGO_DB}?retryWrites=true&w=majority`;

async function handler(req, res) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (req.method === "GET") {
    const db = client.db();

    const docs = await db.collection("urls").find().toArray();

    res.status(200).json({ urls: docs });
  }

  if (req.method === "POST") {
    const db = client.db();

    const url = {
      new: req.body.new,
      old: req.body.old
    }

    const docs = await db.collection("urls").insertOne(url);

    res.status(200).json({ urls: docs });
  }

  client.close();
}

export default handler;

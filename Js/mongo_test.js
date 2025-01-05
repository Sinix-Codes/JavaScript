const { MongoClient } = require("mongodb");
// Connection URI
// const uri ="mongodb+srv://hello:123@cluster0.2b8u2ao.mongodb.net/?retryWrites=true&w=majority"

const uri ="mongodb://localhost:27017"

// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    let dbo = await client.db("SinixBlog");
    let myobj = { name: "Company Inc", address: "Highway 37" };
    console.log(dbo)
    let collection = await dbo.content
    collection.insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
  } 
  
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
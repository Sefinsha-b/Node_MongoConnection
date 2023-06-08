const mongoose=require("mongoose");
const express =require("express")
const app=express()
const PORT =3000

const ChannelModel = require("./models/channel");
const dbUrl="mongodb+srv://arun:DLj5EVPG81Lpt8r7@cluster1.sulequc.mongodb.net/?retryWrites=true&w=majority"


const connectionParams ={
    useNewUrlParser: true,
    UseUnifiedTopology:true,
};

mongoose
  .connect(dbUrl,connectionParams)
  .then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


app.listen(PORT,()=>{
    console.log('Listening on PORT: ${PORT}');
});
// Api
app.get("/insert",async (req,res)=>{
  // Database data
  var channelModel =new ChannelModel()
  channelModel.name ="mongo-to-node-connection"
  channelModel.type="learning"
  try {
    const data = await channelModel.save();
    res.status(200).send({ "msg": "Inserted to DB" });
  } catch (err) {
    console.log(err);
  }
})


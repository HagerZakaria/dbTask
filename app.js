const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const connectionUrl = "mongodb://127.0.0.1:27017"
const dbname = "dbtask"
MongoClient.connect(connectionUrl,(error,response)=>{
    if(error){
        console.log("CAN NOT CONNECT SERVIER.....")
    }
    console.log("Success.....")
    const db = response.db(dbname)
    db.collection('emp').insertOne({
        name:"Hager",
        age:22,
       },(error,data)=>{
        if(error){
            return console.log("DATA ERROR.....")
        }  
    })
    db.collection('emp').insertOne({
        name:"May",
        age:27
    })
    db.collection('emp').insertMany([{
        name:"Aya",
        age:30
    },{
        name:"islam",
        age:27
    },{
        name:"ahmed",
        age:27
    },{
        name:"Asmaa",
        age:35
    },{
        name:"Aliaa",
        age:27
    },{
        name:"mohamed",
        age:20
    },{
        name:"yahia",
        age:29
    },{
        name:"Eman",
        age:39
    },{
        name:"Heba",
        age:42
    },{
        name:"Noha",
        age:45
    }],(error,res)=>{
        if(error){
            return console.log("ERROR !!!!!")
        }
        console.log(res.insertedCount)
    })
    ///////////////////////////////////////////////////////////////////////////
       //3- find users with age 27
    db.collection('emp').find({age:27}).toArray((error,users)=>{
        if(error){
            return console.log("CAN NOT FIND MATCH DATA.....")
        }
        console.log(users)
        console.log("/////////////////////////////////////////////////////////////")
    })
         //4- find the first 4 users with age 27
    db.collection('emp').find({age:27}).limit(4).toArray((error,users)=>{
            if(error){
                return console.log("CAN NOT FIND MATCH DATA.....")
            }
            
            console.log(users)
        })
    //////////////////////////////////////////////////////////////////////////////////////////
       // 5- update for the first 4 in the doc
    db.collection('emp').updateOne({_id:mongodb.ObjectId("657deab443f47d36c5ed0eb8")},{
        $set:{name:"hager"}
    }).then((data)=>{console.log(data.modifiedCount)})
    .catch(console.log("DATA ERROR......"))  
    db.collection('emp').updateOne({_id:mongodb.ObjectId("657deab443f47d36c5ed0eb9")},{
        $set:{name:"ahmed"}
    }).then((data)=>{console.log(data.modifiedCount)})
    .catch(console.log("DATA ERROR......")) 
    db.collection('emp').updateOne({_id:mongodb.ObjectId("657deab443f47d36c5ed0eba")},{
        $set:{name:"ali"}
    }).then((data)=>{console.log(data.modifiedCount)})
    .catch(console.log("DATA ERROR......"))
    //////////////////////////////////////////////////////////////////////////////////////////////

       // 6- update age for the users with age 27 --> 31 (inc 4)
    db.collection('emp').updateMany({age:27},{
        $inc:{age:4}
    }).then((data)=>{console.log(data.modifiedCount)})
    .catch(console.log("DATA ERROR......"))
    ////////////////////////////////////////////////////////////////////
        // 7- update all ages + 10 
     db.collection('emp').updateMany({},{
        $inc:{age:10}
    }).then((data)=>{console.log(data.modifiedCount)})
    .catch(console.log("DATA ERROR......"))
    ////////////////////////////////////////////////////////////////////
    //8- delete users with 41 years...

        db.collection("emp").deleteMany({age:41})
        .then((data)=>{console.log(data.deletedCount)})
        .catch(console.log("ERROR !!!!! "))

   
    
    
})




const db=require('./db')
module.exports.accData= async ()=>{
    const [rows]= await db.query("select * from loginuser");
    return rows;
}

module.exports.getdetails = async (name,password)=>{
     const [data]= await db.query("select * from loginuser where name=? and password=?",[name,password])
     console.log(data.affectedRows)
     return  data;
    }
 


    module.exports.gettingacount = async (name,password)=>{
 const [data]= await db. query("insert into loginuser values(?,?)",[name,password]) 
 console.log(data)
  return data ;
    }
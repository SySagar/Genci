import jwt from "jsonwebtoken";

const validateToken = async (req:any,res:any,next:any) => {
  try {
    const token = req.headers.authorization;
    let verifyObj = {};
 const user = jwt.verify(token,
   process.env.ACCESS_TOKEN_SECRET as string,
    (err:any, user:any) => {
      console.log('decoded',user);
      if (user==undefined || user==null || err) {
        console.log(err.name);
        verifyObj={status:401, message:"token not verified"}
      } else {
        verifyObj= {status:200, message:"token verified",user:user};
  next();
      }
    }
  );
  
  } catch (error) {
    console.log(error);
    return {status:401, message:"token not verified"}
  }
};

export default validateToken;
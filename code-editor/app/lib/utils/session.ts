import { APIMethods } from '../axios/api';

const session = () => {
    const verifyToken = async () => {
        console.log("verifyToken");
        try {
          const response : any  = await APIMethods.user.verify();
            console.log("response",response);
          return response.status;
        } catch (error) {
          console.error("Error verifying token:", error);
          return null;  
        }
      };

  verifyToken().then((data) => {
    if (data) {
      return true;
    }
    return false;
  });

  return false;
};

export default session;
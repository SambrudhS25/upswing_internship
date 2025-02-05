import axios from "axios";

const updateUser=async (value)=>{
    try{
        const response= await axios.post("http://localhost:8081/user/updateUser", value);
        return response;
    }
    catch(e){
        throw e;
    }
}

export default updateUser;
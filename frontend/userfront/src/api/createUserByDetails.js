import axios from "axios";

const createUserByDetails= async (values)=>{

    try{
        const response = await axios.post("http://localhost:8081/user/createUser", values);
        return response
    }catch(e){
        throw e;
    }
}
export default createUserByDetails;
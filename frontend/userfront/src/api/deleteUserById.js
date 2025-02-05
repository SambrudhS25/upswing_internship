import axios from "axios";

const deleteUserById= async (id)=>{
    try{
    await axios.delete(`http://localhost:8081/user/deleteUser?id=${id}`);
    }catch(e){
        throw e;
    }
}

export default deleteUserById;
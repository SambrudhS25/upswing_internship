import axios from "axios";

const fetchUsers=async () => {
    try{
    const response = await axios.get(`http://localhost:8081/user/getAllUsers`);
    return response;
    }catch(e){
        console.log(`there was an error fetching users: ${e}`)
        return null;
    }

};

export default fetchUsers;
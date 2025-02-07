import axios from "axios";

const fetchUserById= async (id)=>{
            try {
                console.log(id);
              const response = await axios.get(`http://localhost:8081/user/searchUser?id=${id}`);
              return response;
            } catch (e) {
              console.log(`error dispalying the details: ${e}`);
                return null;
            }
          
        
};
export default fetchUserById;
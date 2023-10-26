import axios from "axios";
import { useEffect, useState } from "react"


const useCount = () =>{
    const [select, setSelect] = useState({});

         
    const fetchData = async () => {
        const data = {
            userid: localStorage.getItem('userId'),
          };
      
      axios
        .post('http://localhost:8081/count', data)
        .then((res) => {
        
          setSelect(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    useEffect(() => {
     fetchData();
    },[]);
    
    return {select , fetchData}
}

export default useCount;
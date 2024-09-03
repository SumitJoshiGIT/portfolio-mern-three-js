import axios from 'axios'
const api=axios.create({baseURL:'http://localhost:3000'})
export default async function(endpoint){
   try{ 
    const res=await api.get(endpoint)
    return res.data
   }
   catch{
    return {}
   }
}


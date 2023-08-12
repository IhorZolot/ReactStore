import axios from "axios";



export const fetchProducts = async (params) => {

const {data} = await axios.get('https://dummyjson.com/products',{params: {
 limit: 12,
 ...params
}})
console.log(data)

return data
}

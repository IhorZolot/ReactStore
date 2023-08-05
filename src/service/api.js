import axios from "axios";



export const fetchProducts = async () => {
const {data} = await axios.get('https://dummyjson.com/products')
console.log(data)
return data
}

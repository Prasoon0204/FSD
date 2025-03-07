import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await axios.get("http://localhost:3000/api");
      setProducts(apiData.data)
    }
    fetchData()
  }, [])
  

  return (
    <div>
      <h1>All the product details are given below</h1>
      {products.map((product) => (
        <div>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} />
        </div>
      ))}
    </div>
  )
}

export default App

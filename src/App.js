import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import ProductForm from './components/ProductForm.js';
import ProductTable from './components/ProductTable.js';

function App() {
  const [products, setProducts] =  React.useState([]);

  React.useEffect(() =>{
    axios.get("http://localhost:2022/product")
    .then((response) =>{
      setProducts(response.data);
    }).catch((error) => {
      const product = [{
        _id: (products.length + 1).toString(),
        name: "Default Product",
        company: "Default Company",
        price: 0,
        stock: 0,
      }];
      setProducts(product);
    });
    
  },[]);

  const onSubmit = async (e) =>{
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      company: e.target.company.value,
      price: parseInt(e.target.price.value),
      stock: parseInt(e.target.stock.value),
    };
    axios.post("http://localhost:2022/product",product)
    .then(async (response) =>{
      const productList = await axios.get("http://localhost:2022/product");
      setProducts(productList.data);
    }).catch((error) =>{
      product._id = (products.length + 1).toString();
      const tempProducts = [...products,product];
      setProducts(tempProducts);
    }).finally(() =>{
      e.target.name.value = "";
        e.target.company.value = "";
        e.target.price.value = "";
        e.target.stock.value = "";
    });
  };

  const deleteProduct = async (id) =>{
    axios.delete(`http://localhost:2022/product/${id}`)
    .then(async (response) =>{
      const productList = await axios.get("http://localhost:2022/product");
      setProducts(productList.data);
    }).catch((error) =>{
      const tempProducts = products.filter((product) => product._id !== id);
      setProducts(tempProducts);
    });
  }

  return (
    <div className='App'>
      <Header />
      <div style={{ marginTop: "70px" }}></div>
      <ProductForm onSubmit={onSubmit}/>
      <ProductTable products={products} deleteProduct={deleteProduct} />
    </div>
  );
}

export default App;

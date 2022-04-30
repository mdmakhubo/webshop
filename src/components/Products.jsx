import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filter, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProd, setfilteredProd] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");

        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    
    getProducts();
   
  }, [cat])

  useEffect(() => {
    cat && setfilteredProd(
      products.filter(item => {
        return Object.entries(filter).every(([key,value]) => {
          return item[key].includes(value)
        })
      })
    )
  }, [products,cat,filter])
  
  useEffect(() => {
    if (sort === "newest") {
      setfilteredProd((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProd((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProd((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  
  

  return (
    <Container>
      {cat ? filteredProd.map((item) => (
        <Product item={item} key={item.id} />
      )) : products.slice(0,8).map((item,index) => (
        <Product item={item} key={index} />
      ))}
    </Container>
  );
};

export default Products;
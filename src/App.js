
import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



function App() {
  const data=[
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvIm62qrKb4pEABTq75mddxlOTleEHMgeDQ&usqp=CAU",
      productName: "Iphone 12",
      price: "$40.00 - $80.00",
    },
    {
      productImage:" https://www.apple.com/newsroom/images/product/iphone/standard/8plus_and_8_glass_back_big.jpg.large.jpg",
      productName:"Iphone 8" ,
      // rating:100 ,
      price: "$18.00",
    },
    {
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn72k3mbGqVsOGq2dDb8kWgWDRxB6l2iHA0A&usqp=CAU" ,
      productName:"Iphone 9" ,
      price: "$25.00",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsemeIAYF1XpEWPNiZLLHiSomU80j7W0sFFg&usqp=CAU",
      productName:"Iphone SE" ,
      // rating: 100,
      price:"$40.00" ,
    },
    {
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREW8annb-v7JDjFGLXBGmfXX9gzSyscUXECA&usqp=CAU" ,
      productName:"Iphone 14Pro" ,
      price:"$25.00" ,
    },
    {
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafQK5p2OGuNK9qV9KaanP4XjTPxgHxTjjmA&usqp=CAU" ,
      productName:"OnePlus Nord" ,
      price: "$120.00 - $180.00",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcG6lKmbE_LDEry_LLmGC8L8UGH80Vyikyw&usqp=CAU",
      productName: "OnePlus 11",
      // rating: 100,
      price: "$18.00",
    }, {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUETA2ttk3GGMpFXt3ywLRJ9JDFeEjxXtKEg&usqp=CAU",
      productName:"onePlus 12" ,
      // rating: 100,
      price: "$40.00",
    },
  ]
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <div className='cart-value'>
      <Badge bg="success"> <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>{count}</Badge>
      </div><br/>
      <div className='cart-container'>
        {data.map((product,idx)=>(
        <Product
        key={idx}
        shop={product}
        count={count}
        setCount={setCount}
        />))}
      </div>
    </div>
  );
}

export default App;


function Product({shop,count,setCount}){
  const [show,setShow]=useState(false)

  function addtocart(){
    setCount(count+1)
    setShow(!show)
  }

  function removecart(){
    setCount(count-1)
    setShow(!show)
  }


  return(
    <div>
      <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={shop.productImage}  className='img'/>
      <Card.Body>
        <Card.Title>{shop.productName}</Card.Title>
        <Card.Text>{shop.price} </Card.Text>
        <Card.Text>{shop.rating }</Card.Text>

        {!show ?
        <Button variant="primary" onClick={addtocart} className='addcart'>Add to cart</Button>:
        <Button variant="danger" onClick={removecart} className='removecart'>Remove cart</Button>}
      </Card.Body>
    </Card>
    </div>
  )
}
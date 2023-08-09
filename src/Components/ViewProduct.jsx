import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from './Button'
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addtocart } from '../assets/Redux/Slices/CartSlice';
import "../CSS/view.css"

export default function ViewProduct() {
    const dispatch = useDispatch()
    const nav = useNavigate()
   

  const {id} = useParams()

        const inCart = useSelector((state) => state.cart)
        // console.log("to cartssss",inCart);


        const datas = useSelector((state)=>state.products)
        const data = datas.filter((item)=> item.id === parseInt(id) )

        const additem = (product) =>{
          
            dispatch(addtocart(product))    
    
        }
  return (
    <>    
    {data.map((product) => (

<div style={{backgroundColor:'lightgrey',height:'100vh'}}>
  <br />

<div style={{display:'flex',justifyContent:'center',height:'385px',alignItems:'center',paddingTop:'20rem',width:'90%'}}> 
<Card style={{height:'45rem',width:'35rem',display:'flex', alignItems:'center'}} >
 <CardMedia
   component="img"
   alt="green iguana"
   image={product.image}
  //  style={{height:'35rem'}}
   style={{ width: '18rem' ,display:'flex',alignItems:'center',flexDirection:'column' }}

 />
<div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',textAlign:'center',}}>
<CardContent>
<Typography gutterBottom variant="h4" component="div">
     {product.title}
   </Typography>
   <Typography gutterBottom variant="h4" component="div">
   ₹ {product.price}
   </Typography>
   
   <Typography gutterBottom variant="h6" component="div">
     {product.category}
   </Typography>
   <Typography variant="body2" color="text.secondary" className='des'>
     {product.description}
   </Typography>
  
 </CardContent>
 <CardActions>
  <div onClick={() =>additem(product)}>
  <Button classes='mx-2' text='Add to cart' color='secondary'  />
  </div>
      <div onClick={() => nav('/')}>
      <Button classes='mx-2' text='Back' color='secondary'  />
      </div>
    
<br />
<br />
 </CardActions>
</div>
</Card>
</div>
</div>
    ))}
    
    </>
  );
}
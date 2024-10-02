import React, { useEffect, useState } from 'react'
import Layout from '../commponent/Layout'
import axios from 'axios'
import { Button, Card, CardBody, CardFooter, CardHeader, Rating, Typography, } from '@material-tailwind/react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Slice/productSlice'
import Banner from '../commponent/Banner'
import { toast } from 'react-hot-toast'
import Testimonial from '../commponent/Teste'

const HomePage = () => {

    const [product ,setProduct] = useState();
    const dis = useDispatch();

    const getData = async() => {
        const {data} = await axios.get('https://dummyjson.com/products?limit=8&skip=30')
        const dataa = data.products
        setProduct(dataa)
    }

    const handle = (item) => {
      dis(addProduct(item));
      toast.success("Add to Cart Success");
    }

    console.log(product)
    useEffect(()=>{
         getData();
    },[])

  return (
    <Layout>
   <Banner/>
<div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">

        {product?.map((item,id)=>{
            return(
               <div className="p-4 w-full md:w-1/4" key={item.id}>
                 <Card className="w-70">
                    <CardHeader shadow={false} floated={false} className="h-66">
                        <img src={item?.images} alt="card-image"  className="h-full w-full object-cover" />
                    </CardHeader>
                    <CardBody>
                        
                        <Rating value={ Math.round(item.rating)} readonly />
        <div className="mb-2 flex items-center justify-between">
           
          <Typography color="blue-gray" className="font-medium">
            {item.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
           ${item.price}
          </Typography>
        </div>
        {/* <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
         {item.description}
        </Typography> */}
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          onClick={(id)=>handle(item)
          }
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
                 </Card>
               </div>
            )
        })}
        </div>
        </div>
        <Testimonial/>
    </Layout>
  )
}

export default HomePage
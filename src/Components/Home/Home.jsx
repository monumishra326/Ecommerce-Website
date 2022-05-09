import * as React from 'react';
import axios from "axios";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import{useEffect,useState} from "react";




export default function StandardImageList() {
   const [data, setData]=  useState([]);
   

      const getData=()=>{
        axios.get('http://localhost:3001/products')
        .then(function (response) {
          console.log(response);
          setData(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
      useEffect(()=>{
        getData()   
      }
      ,[]);

   const Product = () => {
     
   }
    
  
  return (
    <ImageList sx={{ width: 1, height: 1 }} cols={3} rowHeight={450}>
      {data.map((item) => (
        <ImageListItem key={item.src}>
          <img
            src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <p>{item.price}</p>
          <p>{item.name}</p>
          <p>{item.desc}</p>
        </ImageListItem>
      ))}
    </ImageList>
  );
}


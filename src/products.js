import axios from "axios";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './products.module.css';
import Modal from '@mui/material/Modal';
import AddProduct from './addproduct.js'



export default function Products() {

const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //const [products, setProducts] = useState([]);

  const products = [
      {"id":" 1",
      "imagesurl" : "data:image/jpeg;base64,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",
      "name" : "Jordan 1's",
      "cost" : "$120 NZD",
      "description" : "Looking at the colorway, we can't help but think of what the King, Elvis Presley, once said, 'Don't you step on my blue suede shoes.'"},
      {"id":" 2",
      "imagesurl" : "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:1200,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/z0qM3P5pR3a9viT9MCon",
      "name" : "Jordan 1's",
      "cost" : "$120 NZD",
      "description" : "Looking at the colorway, we can't help but think of what the King, Elvis Presley, once said, 'Don't you step on my blue suede shoes.'"},
      {"id":" 3",
      "imagesurl" : "https://cdn.flightclub.com/750/TEMPLATE/286336/1.jpg",
      "name" : "Jordan 1's",
      "cost" : "$120 NZD",
      "description" : "Looking at the colorway, we can't help but think of what the King, Elvis Presley, once said, 'Don't you step on my blue suede shoes.'"},
      {"id":" 4",
      "imagesurl" : "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F05%2Fgoat-best-air-jordan-1s-retro-high-og-shadow-2-7.jpg?w=1600&cbr=1&q=90&fit=max",
      "name" : "Jordan 1's",
      "cost" : "$120 NZD",
      "description" : "Looking at the colorway, we can't help but think of what the King, Elvis Presley, once said, 'Don't you step on my blue suede shoes.'"},
      {"id":" 5",
      "imagesurl" : "https://stockx-sneaker-analysis.s3.amazonaws.com/wp-content/uploads/2021/09/img01-51.jpg",
      "name" : "Jordan 1's",
      "cost" : "$120 NZD",
      "description" : "Looking at the colorway, we can't help but think of what the King, Elvis Presley, once said, 'Don't you step on my blue suede shoes.'"}
  ]

//   useEffect(() => {
//     axios({
//       method: "get",
//       url: "http://localhost:4000/products",
//     }).then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

  

  return (
    <div>
        <div className={styles.title}> 
        <h1>PRODUCTS</h1> 
        <button className={styles.modalbutton} onClick={handleOpen}>Open modal</button>      
        </div>
        <Modal
        open={open}
        onClose={handleClose}>
          <AddProduct/>
      </Modal>
        
      {products.map((product) => (
        <Card className={styles.products_container}>
          <div className={styles.products_title}>Product ID:{product.id}</div>
          <CardContent className={styles.products_content}>
          <div className={styles.image_container}><img className={styles.products_image} src={product.imagesurl} alt="product"/></div>
          <h2 className={styles.product_name}>{product.name}</h2>
          <h2 className={styles.product_cost}>{product.cost}</h2>
          <p className={styles.product_desc}>{product.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

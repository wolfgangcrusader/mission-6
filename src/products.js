import axios from "axios";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './products.module.css';
import Modal from '@mui/material/Modal';
import AddProduct from './addproduct.js'


const products = [
  {"id":" 1",
  "imagesurl" : "https://trademe.tmcdn.co.nz/photoserver/1024sq/1716498066.jpg",
  "rent" : "400",
  "bedrooms" : "3",
  "property_type" : "House",
  "location" : "Massey",
  "description" : "The stunning living room comes with an open-plan kitchen."},
  {"id":" 2",
  "imagesurl" : "https://trademe.tmcdn.co.nz/photoserver/plus/1714588352.jpg",
  "rent" : "650",
  "bedrooms" : "4",
  "property_type" : "House",
  "location" : "Otara",
  "description" : "This well-thought-out spacious two-bedrooms, one bathroom fully furnished apartment is most definitely one not to miss!"},
  {"id":" 3",
  "imagesurl" : "https://trademe.tmcdn.co.nz/photoserver/plus/1716283866.jpg",
  "rent" : "380",
  "bedrooms" : "1",
  "property_type" : "Apartment",
  "location" : "City",
  "description" : "You'll enjoy cooking in the modern kitchen and relaxing in the generous and bright living area. Enjoy your evenings on the private roof-top garden terrace."},
  {"id":" 4",
  "imagesurl" : "https://trademe.tmcdn.co.nz/photoserver/plus/1714837989.jpg",
  "rent" : "780",
  "bedrooms" : "5",
  "property_type" : "House",
  "location" : "Mt Albert",
  "description" : "Equipped with all of the necessities and fully furnished with appliances and whiteware - this is truly a rare find."},
  {"id":" 5",
  "imagesurl" : "https://trademe.tmcdn.co.nz/photoserver/plus/1716175585.jpg",
  "rent" : "550",
  "bedrooms" : "3",
  "property_type" : "House",
  "location" : "Birkenhead",
  "description" : " To top it off, you are merely minutes away from Auckland CBD."}
]

export default function Products() {

const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //const [products, setProducts] = useState([]);


//   useEffect(() => {
//     axios({
//       method: "get",
//       url: "http://localhost:4000/products",
//     }).then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

const [data, setData] = useState([]);
const [sortType, setSortType] = useState('id');

useEffect(() => {
  const sortArray = type => {
    const types = {
      id: 'id',
      imagesurl : 'imagesurl',
      rent : 'rent',
      bedrooms : 'bedrooms',
      property_type : 'property_type',
      location : 'location',
      description : 'description',
    };
    const sortProperty = types[type];
      const sorted = [...products].sort((a, b) => {
        if (sortProperty === 'location') {
          return a.location.localeCompare(b.location);
        } else {
          return a[sortProperty] - b[sortProperty];
        }
      });
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);


  return (
    <div>
        <div className={styles.title}> 
        <h1>Listings</h1> 
        <button className={styles.modalbutton} onClick={handleOpen}>Open modal</button>      
        </div>
        <Modal
        open={open}
        onClose={handleClose}>
          <AddProduct/>
      </Modal>
      <div className={styles.search}>
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="id">id</option>
        <option value="location">Location</option>
        <option value="rent">Rent</option>
      </select>
      </div>
        
      {data.map((product) => (
        <div key={products.id}  className={styles.products_container}>
          <div className={styles.products_title}>{`Product ID:${product.id}`}</div>
          <div className={styles.products_content}>
          <div className={styles.image_container}><img className={styles.products_image} src={product.imagesurl} alt="product"/></div>
          <h2 className={styles.product_location}>{product.location}</h2>
          <h4 className={styles.product_location}>{product.property_type}</h4>
          <h4 className={styles.product_location}>{product.rent}</h4>
          <p className={styles.product_desc}>{product.bedrooms} bedrooms</p>
          <p className={styles.product_desc}>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

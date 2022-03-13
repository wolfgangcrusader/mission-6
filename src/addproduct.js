import axios from "axios";
import { useEffect, useState } from "react";
import styles from './products.module.css';

export default function AddProduct() {

const [products, setProducts] = useState([]);
const [id, setId] = useState([]);
const [imagesurl, setImagesurl] = useState([]);
const [name, setName] = useState([]);
const [cost, setCost] = useState([]);
const [description, setDescription] = useState([]);

const onSubmit = () => {
    axios
      .post("http://localhost:4000/add", {
        
      id : id,
      imagesurl : imagesurl,
      name : name,
      cost : cost,
      description : description,
   })
      .then((response) => {
        console.log(response.status);
        console.log("successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
        <form>
      <h2>Add Product</h2>

      <label>ID</label> <br/>
  
      <input classname={styles.input} type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />
      <br/>
      <label>Image URL</label> <br/>
      <input classname={styles.input} type="text" placeholder="image url" value={imagesurl} onChange={(e) => setImagesurl(e.target.value)} />
      <br/>
      <label> Product Name </label> <br/>

      <input classname={styles.input} type="text" placeholder="name" value={name}  onChange={(e) => setName(e.target.value)}/>
      <br/>
      <label> Cost </label> <br/>

      <input classname={styles.input} type="text" placeholder="cost" value={cost}  onChange={(e) => setCost(e.target.value)}/>
      <br/>
      <label> Description </label> <br/>

      <input classname={styles.input} type="text" placeholder="description" value={description}  onChange={(e) => setDescription(e.target.value)}/>
      <br/>
      <input classname={styles.input} type="submit" onClick={onSubmit}/>
        </form>     
    </div>
  );
}

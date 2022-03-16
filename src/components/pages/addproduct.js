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
      location : name,
      property_type : cost,
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
      <h2>Add Listing</h2>

      <label>Input Image URL</label> <br/>
      <input id={styles.input} type="text" placeholder="image url" value={imagesurl} onChange={(e) => setImagesurl(e.target.value)} />
      <br/>
      <label>or Upload Image</label> <br/>
      <input type="file" id={styles.input} name="ImageStyle"/>
      <br/>
      <label> Location </label> <br/>

      <input id={styles.input} type="text" placeholder="name" value={name}  onChange={(e) => setName(e.target.value)}/>
      <br/>
      <label> Property Type </label> <br/>

      <input id={styles.input} type="text" placeholder="cost" value={cost}  onChange={(e) => setCost(e.target.value)}/>
      <br/>
      <label> Description </label> <br/>

      <input id={styles.input} type="text" placeholder="description" value={description}  onChange={(e) => setDescription(e.target.value)}/>
      <br/>
      <input id={styles.input} type="submit" onClick={onSubmit}/>
        </form>     
    </div>
  );
}

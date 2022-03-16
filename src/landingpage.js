import styles from './landingpage.module.css';
import Header from './components/header.js';
import Hero from './images/1.jpg';
import Products from './components/pages/products.js';
import TextField from "@mui/material/TextField";


export default function Landingpage() {
    

    return(
        <div className={styles.landingpage}>
            <Header/>
            <div className={styles.hero}>
            <div className={styles.searchsection}>
            </div>
            </div>
            <div className={styles.search}>
                <Products/>           
            </div>
        </div>
    )
}
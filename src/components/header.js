import styles from './header.module.css';
import Logo from '../images/logo.png'
import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import AddProduct from './pages/addproduct.js'

export default function Header() {
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return(
        <div className={styles.header}>
            <img className={styles.logo} src={Logo} alt="logo"/>
            <ul className={styles.list}>
                <li onClick={handleOpen}>
                   Add Listing
                </li>
                <li>
                   Login
                </li>
             </ul>
             <Modal
          open={open}
          onClose={handleClose}>
          <AddProduct/>
        </Modal>

        </div>
    )
}
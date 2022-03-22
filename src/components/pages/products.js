import axios from "axios";
import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  FaBed,
  FaBath,
  FaCity,
  FaTheaterMasks,
  FaShoppingBasket,
  FaEnvira,
  FaWater,
  FaFootballBall,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import Navbar from "../Navbar.js";
import styles from "./products.module.css";

const Products = () => {
  //Getting data from MongoDB//
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .post(
        "http://ebsnodeapplication-env.eba-p7evdbqp.us-east-1.elasticbeanstalk.com/listingCollectionData"
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  let downtown = {
    1: <FaCity />,
  };

  let entertainment = {
    1: <FaTheaterMasks />,
  };
  let basket = {
    1: <FaShoppingBasket />,
  };
  let water = {
    1: <FaWater />,
  };
  let nature = {
    1: <FaEnvira />,
  };
  let family = {
    1: <MdFamilyRestroom />,
  };
  let sport = {
    1: <FaFootballBall />,
  };

  const [districts, SetDistricts] = useState("Any");
  const [suburb, SetSuburbs] = useState("Any");
  const [price_from, SetPrice_from] = useState("Any");
  const [price_to, SetPrice_to] = useState("Any");
  const [bedrooms, SetBedrooms] = useState("Any");
  const [bathrooms, SetBathrooms] = useState("Any");
  const [property_type, SetProperty_type] = useState("Any");
  const [pet_friendly, SetPet_friendly] = useState("Any");
  const [fibre, SetFibre] = useState("Any");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const checkdistrict = (array) => {
      if (districts !== "Any") {
        return array.filter((item) => item.city === districts);
      } else {
        return array;
      }
    };

    const checksuburbs = (array) => {
      if (suburb !== "Any") {
        return array.filter((item) => item.suburb === suburb);
      } else {
        return array;
      }
    };

    const checkminprice = (array) => {
      if (price_from !== "Any") {
        return array.filter((item) => item.price > price_from);
      } else {
        return array;
      }
    };

    const checkmaxprice = (array) => {
      if (price_to !== "Any") {
        return array.filter((item) => item.price < price_to);
      } else {
        return array;
      }
    };

    const checkbedrooms = (array) => {
      if (bedrooms !== "Any") {
        return array.filter((item) => item.bedroom_count >= bedrooms);
      } else {
        return array;
      }
    };

    const checkbathrooms = (array) => {
      if (bathrooms !== "Any") {
        return array.filter((item) => item.bathroom_count >= bathrooms);
      } else {
        return array;
      }
    };

    const checkproperty = (array) => {
      if (property_type !== "Any") {
        return array.filter((item) => item.property_type === property_type);
      } else {
        return array;
      }
    };

    const checkpets = (array) => {
      if (pet_friendly === "0") {
        return array.filter((item) => item.pet_friendly === 0);
      } else if (pet_friendly === "1") {
        return array.filter((item) => item.pet_friendly === 1);
      } else {
        return array;
      }
    };

    const checkfibre = (array) => {
      if (fibre === "0") {
        return array.filter((item) => item.fibre === 0);
      } else if (fibre === "1") {
        return array.filter((item) => item.fibre === 1);
      } else {
        return array;
      }
    };

    //Filter options updated so apply all filters here
    let result = products;
    result = checkdistrict(result);
    result = checksuburbs(result);
    result = checkminprice(result);
    result = checkmaxprice(result);
    result = checkbedrooms(result);
    result = checkbathrooms(result);
    result = checkproperty(result);
    result = checkpets(result);
    result = checkfibre(result);
    setFilteredData(result);
  }, [
    products,
    districts,
    suburb,
    price_from,
    price_to,
    bedrooms,
    bathrooms,
    property_type,
    pet_friendly,
    fibre,
  ]);

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("newdate_listed");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        listing_id: "listing_id",
        date_listed_int: "date_listed_int",
        price: "price",
        bedroom_count: "bedroom_count",
        bathroom_count: "bathroom_count",
        suburb: "suburb",
        city: "city",
        maxprice: "price",
        newdate_listed: "newdate_listed",
      };
      const sortProperty = types[type];
      const sorted = [...filteredData].sort((a, b) => {
        if (sortType === "newdate_listed") {
          return b.date_listed_int - a.date_listed_int;
        } else if (sortType === "suburb") {
          return a.suburb.localeCompare(b.suburb);
        } else if (sortType === "city") {
          return a.city.localeCompare(b.city);
        } else if (sortType === "maxprice") {
          return b.price > a.price ? 1 : -1;
        } else if (sortType === "olddate_listed") {
          return a.date_listed_int - b.date_listed_int;
        } else {
          return a[sortProperty] - b[sortProperty];
        }
      });
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType, filteredData]);

  function refreshPage() {
    window.location.reload(false);
  }

  const [activeButton, setActiveButton] = useState(false);

  const handleClick = () => {
    setActiveButton(!activeButton);
    myFunction();
  };

function myFunction() {
  let x = document.getElementById("searchbox");
  let y = document.getElementById("expand");
  if (y.style.display === "block") {
    y.style.display = "none";
    x.style.height = "35vh";  
  } else {
    y.style.display = "block"
    y.style.backgroundColor = "white";
    y.style.width = "100%";
    y.style.height = "10vh";
    y.style.position = "relative"; 
    x.style.height = "40vh";  
  }
 }

  return (
    <div className={styles.listings}>
      <Navbar />
      <div className={styles.searchbox} id="searchbox">
        <h1>Search Rentals in Auckland</h1>

        <div className={styles.selectdivalt}>
          <h4 className={styles.selectlabel}>Location:</h4>
          <select
            className={styles.districts}
            onChange={(e) => SetDistricts(e.target.value)}
          >
            <option value="Any">All Districts</option>
            <option value="Auckland City">Auckland City</option>
            <option value="Manukau City">Manukau City</option>
            <option value="North Shore City">North Shore City</option>
            <option value="Rodney District">Rodney District</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Suburb:</h4>
          <select
            className={styles.suburbs}
            placeholder="Suburbs"
            onChange={(e) => SetSuburbs(e.target.value)}
          >
            <option value="Any">Any</option> {" "}
            <option value="Albany">Albany</option> {" "}
            <option value="Ararimu"> Ararimu</option> {" "}
            <option value="Army Bay"> Army Bay</option> {" "}
            <option value="Bayview"> Bayview</option> {" "}
            <option value="Beachlands"> Beachlands</option> {" "}
            <option value="Birkenhead"> Birkenhead</option> {" "}
            <option value="Blockhouse Bay"> Blockhouse Bay</option> {" "}
            <option value="Bucklands Beach"> Bucklands Beach</option> {" "}
            <option value="City Centre"> City Centre</option> {" "}
            <option value="Dannemora"> Dannemora</option> {" "}
            <option value="Devonport"> Devonport</option> {" "}
            <option value="Eden Terrace"> Eden Terrace</option> {" "}
            <option value="Epsom"> Epsom</option> {" "}
            <option value="Forrest Hill"> Forrest Hill</option> {" "}
            <option value="Freemans Bay"> Freemans Bay</option> {" "}
            <option value="Glen Eden"> Glen Eden</option> {" "}
            <option value="Glen Innes"> Glen Innes</option> {" "}
            <option value="Glenfield"> Glenfield</option> {" "}
            <option value="Goodwood Heights"> Goodwood Heights</option> {" "}
            <option value="Greenlane"> Greenlane</option> {" "}
            <option value="Grey Lynn"> Grey Lynn</option> {" "}
            <option value="Gulf Harbour"> Gulf Harbour</option> {" "}
            <option value="Half Moon Bay"> Half Moon Bay</option> {" "}
            <option value="Hauraki"> Hauraki</option> {" "}
            <option value="Herne Bay"> Herne Bay</option> {" "}
            <option value="Hillsborough"> Hillsborough</option> {" "}
            <option value="Hobsonville"> Hobsonville</option> {" "}
            <option value="Howick"> Howick</option> {" "}
            <option value="Huapai"> Huapai</option> {" "}
            <option value="Kensington"> Kensington</option> {" "}
            <option value="Kumeu"> Kumeu</option> {" "}
            <option value="Lynfield"> Lynfield</option> {" "}
            <option value="Mangere East"> Mangere East</option> {" "}
            <option value="Manukau"> Manukau</option> {" "}
            <option value="Manurewa"> Manurewa</option> {" "}
            <option value="Manurewa East"> Manurewa East</option> {" "}
            <option value="Massey"> Massey</option> {" "}
            <option value="Meadowbank"> Meadowbank</option> {" "}
            <option value="Milford"> Milford</option> {" "}
            <option value="Millwater"> Millwater</option> {" "}
            <option value="Mt Albert"> Mt Albert</option> {" "}
            <option value="Mt Eden"> Mt Eden</option> {" "}
            <option value="Mt Roskill"> Mt Roskill</option> {" "}
            <option value="Mt Wellington"> Mt Wellington</option> {" "}
            <option value="Murrays Bay"> Murrays Bay</option> {" "}
            <option value="New Lynn"> New Lynn</option> {" "}
            <option value="New Windsor"> New Windsor</option> {" "}
            <option value="Newmarket"> Newmarket</option> {" "}
            <option value="Northcote"> Northcote</option> {" "}
            <option value="Northcross"> Northcross</option> {" "}
            <option value="Northpark"> Northpark</option> {" "}
            <option value="Onehunga"> Onehunga</option> {" "}
            <option value="Orewa"> Orewa</option> {" "}
            <option value="Otahuhu"> Otahuhu</option> {" "}
            <option value="Pakuranga"> Pakuranga</option> {" "}
            <option value="Panmure"> Panmure</option> {" "}
            <option value="Papakura"> Papakura</option> {" "}
            <option value="Papatoetoe"> Papatoetoe</option> {" "}
            <option value="Parnell"> Parnell</option> {" "}
            <option value="Pt Chevalier"> Pt Chevalier</option> {" "}
            <option value="Puhoi"> Puhoi</option> {" "}
            <option value="Pukekohe"> Pukekohe</option> {" "}
            <option value="Red Beach"> Red Beach</option> {" "}
            <option value="Remuera"> Remuera</option> {" "}
            <option value="Royal Oak"> Royal Oak</option> {" "}
            <option value="Ruakaka"> Ruakaka</option> {" "}
            <option value="Silverdale"> Silverdale</option> {" "}
            <option value="St Heliers"> St Heliers</option> {" "}
            <option value="St Johns"> St Johns</option> {" "}
            <option value="Stanmore Bay"> Stanmore Bay</option> {" "}
            <option value="Stonefields"> Stonefields</option> {" "}
            <option value="Sunnyvale"> Sunnyvale</option> {" "}
            <option value="Takanini"> Takanini</option> {" "}
            <option value="Takapuna"> Takapuna</option> {" "}
            <option value="Te Atatu South"> Te Atatu South</option> {" "}
            <option value="Three Kings"> Three Kings</option> {" "}
            <option value="Tikipunga"> Tikipunga</option> {" "}
            <option value="Titirangi"> Titirangi</option> {" "}
            <option value="Torbay"> Torbay</option> {" "}
            <option value="Waimauku"> Waimauku</option> {" "}
            <option value="Waiuku"> Waiuku</option> {" "}
            <option value="Welcome Bay"> Welcome Bay</option> {" "}
            <option value="Beachlands">Beachlands</option> {" "}
            <option value="Blockhouse Bay">Blockhouse Bay</option> {" "}
            <option value="Browns Bay">Browns Bay</option> {" "}
            <option value="City Centre">City Centre</option> {" "}
            <option value="Dairy Flat">Dairy Flat</option> {" "}
            <option value="Devonport">Devonport</option> {" "}
            <option value="East Tamaki">East Tamaki</option> {" "}
            <option value="Eastern Beach">Eastern Beach</option> {" "}
            <option value="Epsom">Epsom</option> {" "}
            <option value="Flat Bush">Flat Bush</option> {" "}
            <option value="Forrest Hill">Forrest Hill</option> {" "}
            <option value="Freemans Bay">Freemans Bay</option> {" "}
            <option value="Glen Eden">Glen Eden</option> {" "}
            <option value="Glenfield">Glenfield</option> {" "}
            <option value="Grafton">Grafton</option> {" "}
            <option value="Henderson">Henderson</option> {" "}
            <option value="Hillcrest">Hillcrest</option> {" "}
            <option value="Hillsborough">Hillsborough</option> {" "}
            <option value="Hobsonville">Hobsonville</option> {" "}
            <option value="Kelston">Kelston</option> {" "}
            <option value="Long Bay">Long Bay</option> {" "}
            <option value="Manurewa">Manurewa</option> {" "}
            <option value="Massey">Massey</option> {" "}
            <option value="Maungatapu">Maungatapu</option> {" "}
            <option value="Meadowbank">Meadowbank</option> {" "}
            <option value="Mission Bay">Mission Bay</option> {" "}
            <option value="Mt Albert">Mt Albert</option> {" "}
            <option value="Mt Eden">Mt Eden</option> {" "}
            <option value="Mt Roskill">Mt Roskill</option> {" "}
            <option value="Newmarket">Newmarket</option> {" "}
            <option value="Ngunguru">Ngunguru</option> {" "}
            <option value="One Tree Hill">One Tree Hill</option> {" "}
            <option value="Orewa">Orewa</option> {" "}
            <option value="Otahuhu">Otahuhu</option> {" "}
            <option value="Pakuranga">Pakuranga</option> {" "}
            <option value="Papatoetoe">Papatoetoe</option> {" "}
            <option value="Parnell">Parnell</option> {" "}
            <option value="Pt Chevalier">Pt Chevalier</option> {" "}
            <option value="Pukekohe">Pukekohe</option> {" "}
            <option value="Ranui">Ranui</option> {" "}
            <option value="Remuera">Remuera</option> {" "}
            <option value="Schnapper Rock">Schnapper Rock</option> {" "}
            <option value="Silverdale">Silverdale</option> {" "}
            <option value="St Heliers">St Heliers</option> {" "}
            <option value="St Johns">St Johns</option> {" "}
            <option value="Stanmore Bay">Stanmore Bay</option> {" "}
            <option value="Stonefields">Stonefields</option> {" "}
            <option value="Sunnyook">Sunnyook</option> {" "}
            <option value="Takapuna">Takapuna</option> {" "}
            <option value="Te Atatu South">Te Atatu South</option> {" "}
            <option value="Three Kings">Three Kings</option> {" "}
            <option value="Totara Vale">Totara Vale</option> {" "}
            <option value="Unsworth Heights">Unsworth Heights</option> {" "}
            <option value="Waiuku">Waiuku</option> {" "}
            <option value="Warkworth">Warkworth</option> {" "}
            <option value="Waterview">Waterview</option> {" "}
            <option value="Woodhill">Woodhill</option> {" "}
            <option value="Wynyard Quarter">Wynyard Quarter</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Price From:</h4>
          <select
            className={styles.price_from}
            placeholder="Price From"
            onChange={(e) => SetPrice_from(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="901">900+</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Price To:</h4>
          <select
            className={styles.price_to}
            label="Price To"
            onChange={(e) => SetPrice_to(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="901">900+</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Bedrooms:</h4>
          <select
            className={styles.bedrooms}
            placeholder="Bedrooms"
            onChange={(e) => SetBedrooms(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="6">6+</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Bathrooms:</h4>
          <select
            className={styles.bathrooms}
            placeholder="Bathrooms"
            onChange={(e) => SetBathrooms(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="6">6+</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Property Type:</h4>
          <select
            className={styles.property_type}
            placeholder="Property Type"
            onChange={(e) => SetProperty_type(e.target.value)}
          >
            <option value="Any">All</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Unit">Unit</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Pet Friendly:</h4>
          <select
            className={styles.pet_friendly}
            placeholder="Pet Friendly"
            onChange={(e) => SetPet_friendly(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Fibre:</h4>
          <select
            className={styles.fibre}
            placeholder="Fibre"
            onChange={(e) => SetFibre(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <button className={styles.submit} onClick={refreshPage}>
          Reset Filters
        </button>

      </div>

      
      <div id = "expand" style={{"display":"none"}}>
      <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Carparks:</h4>
          <select
            className={styles.fibre}
            onChange={""}
          >
            <option value="Any">Any</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        </div>

      <div className={styles.advancedpopout}>
        <div className={styles.advanced} onClick={handleClick}>
          Advanced Search
        <button onClick={handleClick} className={styles.planarrow}>
              {activeButton ? <FaChevronDown /> : <FaChevronUp />}
            </button>
        </div>
        
        </div>

      <div className={styles.search}>
        <div className={styles.descicons}>
          <h4>Showing 255 results</h4>
          <p>
            See the immediate neighbourhood’s characteristics at a glance -{" "}
            Downtown <FaCity /> Entertainment <FaTheaterMasks /> Shopping{" "}
            <FaShoppingBasket /> Nature <FaEnvira /> Water <FaWater /> Sport{" "}
            <FaFootballBall /> Family <MdFamilyRestroom />{" "}
          </p>
        </div>
        <h3>Sort By</h3>
        <select
          className={styles.sortselect}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="newdate_listed">Latest Listings</option>
          <option value="olddate_listed">Oldest Listings</option>
          <option value="suburb">Suburb</option>
          <option value="city">City</option>
          <option value="price"> Lowest Rent</option>
          <option value="maxprice"> Highest Rent</option>
        </select>
      </div>

      <Container className={styles.container}>
        {data.map((product) => (
          <a href={`/${product.listing_id}`}>
            <Card className={styles.card} key={product.id}>
              <Card.Img
                variant="top"
                src={product.images}
                className={styles.image}
              />
              <div className={styles.products_content}>
                <h2 className={styles.product1}>
                  Listed: {product.date_listed}
                </h2>
                <h2 className={styles.product2}>{product.address}</h2>
                <h2 className={styles.product1}>{product.city}</h2>

                <p className={styles.product4}>
                  {" "}
                  <FaBed /> {product.bedroom_count} <FaBath />{" "}
                  {product.bathroom_count}
                </p>
                <p className={styles.product6}>
                  {downtown[product.downtown]} {basket[product.shopping]}{" "}
                  {entertainment[product.entertainment]} {water[product.water]}{" "}
                  {family[product.family]} {nature[product.nature]}{" "}
                  {sport[product.sport]}
                </p>
                <p className={styles.product5}>Rent: ${product.price} </p>
              </div>
            </Card>
          </a>
        ))}
      </Container>
    </div>
  );
};

export default Products;

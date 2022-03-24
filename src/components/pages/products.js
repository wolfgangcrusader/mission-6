import axios from "axios";
import ReactPaginate from "react-paginate";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
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
  FaMapMarkedAlt,
} from "react-icons/fa";
import MapLocations from '../Map.js'
import { MdFamilyRestroom } from "react-icons/md";
import ReactTooltip from 'react-tooltip';
import Navbar from "../Navbar.js";
import LoadingSpinner from "../spinner";
import styles from "./products.module.css";
import RENTALS from '../data.json'

const Products = () => {
  //Getting data from MongoDB//
  const [products, setProducts] = useState(RENTALS);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .post(
  //       "http://ebsnodeapplication-env.eba-p7evdbqp.us-east-1.elasticbeanstalk.com/listingCollectionData"
  //     )
  //     .then((res) => {
  //       setProducts(res.data);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       setErrorMessage("Unable to fetch user list");
  //       setIsLoading(false);
  //     });
  // }, []);

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
  const [carparks, SetCarparks] = useState("Any");
  const [yard, SetYard] = useState("Any");
  const [balcony, SetBalcony] = useState("Any");
  const [lease, SetLease] = useState("Any");
  const [furnishing, SetFurnishing] = useState("Any");
  const [access, SetAccess] = useState("Any");
  const [filteredData, setFilteredData] = useState([]);
  const [searchkeywords, setSearchKeywords] = useState("");

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

    const checkparks = (array) => {
      if (carparks === "1") {
        return array.filter((item) => item.offstreet_parking > 1);
      } else if (carparks === "2") {
        return array.filter((item) => item.offstreet_parking > 2);
      } else if (carparks === "3") {
        return array.filter((item) => item.offstreet_parking > 3);
      } else {
        return array;
      }
    };

    const checkyard = (array) => {
      if (yard === "0") {
        return array.filter((item) => item.garden === 0);
      } else if (yard === "1") {
        return array.filter((item) => item.garden === 1);
      } else {
        return array;
      }
    };


    const checkbalcony = (array) => {
      if (balcony === "0") {
        return array.filter((item) => item.balcony === 0);
      } else if (balcony === "1") {
        return array.filter((item) => item.balcony === 1);
      } else {
        return array;
      }
    };

    const checklease = (array) => {
      if (lease === "long-term") {
        return array.filter((item) => item.lease_duration === lease);
      } else if (lease === "short-term") {
        return array.filter((item) => item.lease_duration === lease);
      } else {
        return array;
      }
    };

    const checkfurnishing = (array) => {
      if (furnishing === "0") {
        return array.filter((item) => item.furnishing === 0);
      } else if (furnishing === "1") {
        return array.filter((item) => item.furnishing === 1);
      } else {
        return array;
      }
    };


    const checkaccess = (array) => {
      if (access === "0") {
        return array.filter((item) => item.access === access);
      } else if (access === "1") {
        return array.filter((item) => item.access === access);
      } else {
        return array;
      }
    };

    const handleOnChange = (array) => {
      if (searchkeywords.length > 2) {
        return array.filter((item) => item.keywords.includes(searchkeywords));
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
    result = checkparks(result);
    result = checkyard(result);
    result = checkbalcony(result);
    result = checklease(result);
    result = checkfurnishing(result);
    result = checkaccess(result);
    result = handleOnChange(result);
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
    filteredData,
    searchkeywords,
    carparks,
    balcony,
    access,
    lease,
    furnishing,
    yard,
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
        } else if (sortType === "maxprice") {
          return b.price > a.price ? 1 : -1;
        } else if (sortType === "suburb") {
          return a.suburb.localeCompare(b.suburb);
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
      y.style.display = "block";
      y.style.backgroundColor = "white";
      y.style.width = "100%";
      y.style.height = "12vh";
      y.style.position = "relative";
      x.style.height = "35vh";
    }
  }
  
  const [aucklandcity, setAucklandCity] = useState(false);
  const [northshore, setNorthShore] = useState(false);
  const [manukau, setManukau] = useState(false);
  const [waitak, setWaitak] = useState(false);
  const [rodney, setRodney] = useState(false);

  

  function changeOption() {
    if(districts === "Auckland City") {
      setAucklandCity(false)
      setNorthShore(true)
      setManukau(true)
      setRodney(true)
      setWaitak(true)
    } else if (districts === "North Shore City") {
      setAucklandCity(true)
      setNorthShore(false)
      setManukau(true)
      setRodney(true)
      setWaitak(true)
    } else if (districts === "Manukau City") {
      setAucklandCity(true)
      setNorthShore(true)
      setManukau(false)
      setRodney(true)
      setWaitak(true)
     } else if (districts === "Rodney District"){
      setAucklandCity(true)
      setNorthShore(true)
      setManukau(true)
      setRodney(false)
      setWaitak(true)
     } else if (districts === "Waitakere City"){
      setAucklandCity(true)
      setNorthShore(true)
      setManukau(true)
      setRodney(true)
      setWaitak(false)
     } else {
      setAucklandCity(false)
      setNorthShore(false)
      setManukau(false)
      setRodney(false)
      setWaitak(false)
     }
    }

    

    const [isempty, setIsEmpty] = useState(false);
    const [issimilar, SetIsSimilar] = useState([]);
    const [attributes, SetAttributes] = useState([])

    useEffect(() => {
      if (filteredData.length > 1){
        let array = products;
        setIsEmpty(true);
        SetIsSimilar(array);
      } else {
        setIsEmpty(false);
      }
    }, [filteredData, districts, products, suburb, attributes, price_to, price_from, bedrooms, bathrooms, property_type, pet_friendly, fibre, carparks, yard, balcony, lease, furnishing, access])


    const EmptyAssArray = (
      <div className={styles.noresults}>
        <h1> There are no listings matching the combination of options you have selected.
Perhaps you may be interested in these similar listings.</h1>
      <div className={styles.container}>       
        {issimilar.slice(69,73).map((product) => (
       <a href={`https://623c914435233a00097c41ce--neish-grays-mission6.netlify.app/${product.listing_id}`}>
       <Card className={styles.card} key={product.id}>
         <Card.Img
           variant="top"
           src={product.images}
           className={styles.image}
         />
         <div className={styles.products_content}>
           <h2 className={styles.product1}>Listed: {product.date_listed}</h2>
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
     </a>))}
      </div>
      </div>
    );
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 20;

    function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
    }
  
    const offset = currentPage * PER_PAGE;
  
    const currentPageData = data
      .slice(offset, offset + PER_PAGE)
      .map((product) => (
            <a href={`https://623c914435233a00097c41ce--neish-grays-mission6.netlify.app/${product.listing_id}`}>
              <Card className={styles.card} key={product.id}>
                <Card.Img
                  variant="top"
                  src={product.images}
                  className={styles.image}
                />
                <div className={styles.products_content}>
                  <h2 className={styles.product1}>Listed: {product.date_listed}</h2>
                  <h2 className={styles.product2}>{product.address}</h2>
                  <h2 className={styles.product1}>{product.city}</h2>
                  <p className={styles.product4}>
                    <FaBed /> {product.bedroom_count} <FaBath />{" "}
                    {product.bathroom_count}
                  </p>
                  <p className={styles.product6}>
                    {downtown[product.downtown]} {basket[product.shopping]}{" "}
                    {entertainment[product.entertainment]} {water[product.water]}{" "}
                    {family[product.family]} {nature[product.nature]}{sport[product.sport]}
                  </p>
                  <p className={styles.product5}>Rent: ${product.price} </p>
                </div>
              </Card></a>
          ));
  
    const pageCount = Math.ceil(data.length / PER_PAGE);


    const handleClick2 = () => {
      myFunction2();
    };
  
    function myFunction2() {
      let y = document.getElementById("map");
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
    }



  return (
    <div className={styles.listings}>
      <Navbar />
      <div className={styles.searchbox} id="searchbox2">
        <h1>Search Rentals in Auckland</h1>

        <div className={styles.selectdivalt}>
          <h4 className={styles.selectlabel}>Location:</h4>
          <select
            className={styles.districts}
            onChange={(e) => SetDistricts(e.target.value)}
            onClick={changeOption}
          >
            <option value ="Any" >All Districts</option>
            <option value="Auckland City">Auckland City</option>
            <option value="Manukau City">Manukau City</option>
            <option value="North Shore City">North Shore City</option>
            <option value="Rodney District">Rodney District</option>
            <option value="Waitakere City">Waitakere City</option>
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
            <option value="Albany" disabled={northshore}>Albany</option> {" "}
            <option value="Ararimu" disabled={waitak}> Ararimu</option> {" "}
            <option value="Army Bay" disabled={aucklandcity}> Army Bay</option> {" "}
            <option value="Bayview"disabled={northshore}> Bayview</option> {" "}
            <option value="Beachlands"disabled={northshore}> Beachlands</option> {" "}
            <option value="Birkenhead" disabled={northshore}> Birkenhead</option> {" "}
            <option value="Blockhouse Bay"disabled={waitak}> Blockhouse Bay</option> {" "}
            <option value="Browns Bay"disabled={northshore}>Browns Bay</option> {" "}
            <option value="Bucklands Beach" disabled={manukau}> Bucklands Beach</option> {" "}
            <option value="City Centre"disabled={aucklandcity}> City Centre</option> {" "}
            <option value="Dairy Flat" disabled={northshore}>Dairy Flat</option> {" "}
            <option value="Dannemora" disabled={manukau}> Dannemora</option> {" "}
            <option value="Devonport" disabled={northshore}> Devonport</option> {" "}
            <option value="East Tamaki"disabled={manukau}>East Tamaki</option> {" "}
            <option value="Eastern Beach"disabled={manukau}>Eastern Beach</option> {" "}
            <option value="Eden Terrace"disabled={aucklandcity}> Eden Terrace</option> {" "}
            <option value="Epsom"disabled={aucklandcity}> Epsom</option> {" "}
            <option value="Flat Bush"disabled={manukau}>Flat Bush</option> {" "}
            <option value="Forrest Hill"disabled={northshore}> Forrest Hill</option> {" "}
            <option value="Freemans Bay"disabled={aucklandcity}> Freemans Bay</option> {" "}
            <option value="Glen Eden"disabled={waitak}> Glen Eden</option> {" "}
            <option value="Glen Innes"disabled={aucklandcity}> Glen Innes</option> {" "}
            <option value="Glenfield" disabled={northshore}> Glenfield</option> {" "}
            <option value="Goodwood Heights"disabled={manukau}> Goodwood Heights</option> {" "}
            <option value="Grafton"disabled={aucklandcity}>Grafton</option> {" "}
            <option value="Greenlane"disabled={aucklandcity}> Greenlane</option> {" "}
            <option value="Grey Lynn"disabled={aucklandcity}> Grey Lynn</option> {" "}
            <option value="Gulf Harbour" disabled={northshore}> Gulf Harbour</option> {" "}
            <option value="Half Moon Bay"disabled={manukau}> Half Moon Bay</option> {" "}
            <option value="Hauraki"disabled={rodney}> Hauraki</option> {" "}
            <option value="Herne Bay"disabled={aucklandcity}> Herne Bay</option> {" "}          
            <option value="Henderson"disabled={waitak}>Henderson</option> {" "}
            <option value="Hillcrest"disabled={northshore}>Hillcrest</option> {" "}
            <option value="Hillsborough"disabled={northshore}> Hillsborough</option> {" "}
            <option value="Hobsonville"disabled={waitak}> Hobsonville</option> {" "}
            <option value="Howick"disabled={manukau}> Howick</option> {" "}
            <option value="Huapai"disabled={rodney}> Huapai</option> {" "}
            <option value="Kensington"disabled={northshore}> Kensington</option> {" "}
            <option value="Kumeu"disabled={rodney}> Kumeu</option> {" "}            
            <option value="Kelston"disabled={waitak}>Kelston</option> {" "}
            <option value="Long Bay"disabled={northshore}>Long Bay</option> {" "}
            <option value="Lynfield"disabled={waitak}> Lynfield</option> {" "}
            <option value="Mangere East"disabled={manukau}> Mangere East</option> {" "}
            <option value="Manukau"disabled={manukau}> Manukau</option> {" "}
            <option value="Manurewa"disabled={manukau}> Manurewa</option> {" "}
            <option value="Manurewa East"disabled={manukau}> Manurewa East</option> {" "}
            <option value="Massey"disabled={waitak}> Massey</option> {" "}
            <option value="Maungatapu"disabled={manukau}>Maungatapu</option> {" "}
            <option value="Meadowbank"disabled={aucklandcity}> Meadowbank</option> {" "}
            <option value="Milford"disabled={northshore}> Milford</option> {" "}
            <option value="Millwater"disabled={northshore}> Millwater</option> {" "}
            <option value="Mission Bay"disabled={aucklandcity}>Mission Bay</option> {" "}
            <option value="Mt Albert"disabled={aucklandcity}> Mt Albert</option> {" "}
            <option value="Mt Eden"disabled={aucklandcity}> Mt Eden</option> {" "}
            <option value="Mt Roskill"disabled={aucklandcity}> Mt Roskill</option> {" "}
            <option value="Mt Wellington"disabled={aucklandcity}> Mt Wellington</option> {" "}
            <option value="Murrays Bay"disabled={northshore}> Murrays Bay</option> {" "}
            <option value="New Lynn"disabled={waitak}> New Lynn</option> {" "}
            <option value="New Windsor"disabled={aucklandcity}> New Windsor</option> {" "}
            <option value="Newmarket"disabled={aucklandcity}> Newmarket</option> {" "}
            <option value="Ngunguru"disabled={northshore}>Ngunguru</option> {" "}
            <option value="Northcote"disabled={northshore}> Northcote</option> {" "}
            <option value="Northcross"disabled={northshore}> Northcross</option> {" "}
            <option value="Northpark"disabled={aucklandcity}> Northpark</option> {" "}
            <option value="Onehunga"disabled={manukau}> Onehunga</option> {" "}
            <option value="One Tree Hill"disabled={manukau}>One Tree Hill</option> {" "}
            <option value="Orewa"disabled={northshore}> Orewa</option> {" "}
            <option value="Otahuhu"disabled={manukau}> Otahuhu</option> {" "}
            <option value="Pakuranga"disabled={manukau}> Pakuranga</option> {" "}
            <option value="Panmure"disabled={manukau}> Panmure</option> {" "}
            <option value="Papakura"disabled={manukau}> Papakura</option> {" "}
            <option value="Papatoetoe"disabled={manukau}> Papatoetoe</option> {" "}
            <option value="Parnell"disabled={aucklandcity}> Parnell</option> {" "}
            <option value="Pt Chevalier"disabled={aucklandcity}> Pt Chevalier</option> {" "}
            <option value="Puhoi"disabled={rodney}> Puhoi</option> {" "}
            <option value="Pukekohe"disabled={manukau}> Pukekohe</option> {" "}          
            <option value="Ranui"disabled={waitak}>Ranui</option> {" "}
            <option value="Red Beach"disabled={northshore}> Red Beach</option> {" "}
            <option value="Remuera"disabled={aucklandcity}> Remuera</option> {" "}
            <option value="Royal Oak"disabled={aucklandcity}> Royal Oak</option> {" "}
            <option value="Ruakaka"disabled={northshore}> Ruakaka</option> {" "}
            <option value="Schnapper Rock"disabled={northshore}>Schnapper Rock</option> {" "}
            <option value="Silverdale"disabled={rodney}> Silverdale</option> {" "}
            <option value="St Heliers"disabled={aucklandcity}> St Heliers</option> {" "}
            <option value="St Johns"disabled={aucklandcity}> St Johns</option> {" "}
            <option value="Stanmore Bay"disabled={northshore}> Stanmore Bay</option> {" "}
            <option value="Stonefields"disabled={aucklandcity}> Stonefields</option> {" "}         
            <option value="Sunnynook"disabled={northshore}>Sunnyook</option> {" "}
            <option value="Sunnyvale"disabled={waitak}> Sunnyvale</option> {" "}
            <option value="Takanini"disabled={manukau}> Takanini</option> {" "}
            <option value="Takapuna"disabled={northshore}> Takapuna</option> {" "}
            <option value="Te Atatu South"disabled={waitak}> Te Atatu South</option> {" "}
            <option value="Three Kings"disabled={manukau}> Three Kings</option> {" "}
            <option value="Tikipunga"disabled={manukau}> Tikipunga</option> {" "}
            <option value="Torbay"disabled={northshore}> Torbay</option> {" "}          
            <option value="Totara Vale"disabled={northshore}>Totara Vale</option> {" "}
            <option value="Unsworth Heights"disabled={northshore}>Unsworth Heights</option> {" "}
            <option value="Waimauku"disabled={rodney}> Waimauku</option> {" "}
            <option value="Waiuku"disabled={manukau}> Waiuku</option> {" "}
            <option value="Warkworth"disabled={rodney}>Warkworth</option> {" "}
            <option value="Waterview"disabled={waitak}>Waterview</option> {" "}
            <option value="Welcome Bay"disabled={manukau}> Welcome Bay</option> {" "}
            <option value="Woodhill"disabled={manukau}>Woodhill</option> {" "}
            <option value="Wynyard Quarter"disabled={aucklandcity}>Wynyard Quarter</option>
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

      <div id="expand" style={{ display: "none" }}>
        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Carparks:</h4>
          <select
            className={styles.carparks}
            onChange={(e) => SetCarparks(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Yard:</h4>
          <select
            className={styles.yard}
            onChange={(e) => SetYard(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Balcony:</h4>
          <select
            className={styles.balcony}
            onChange={(e) => SetBalcony(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Length of Lease:</h4>
          <select
            className={styles.lease}
            onChange={(e) => SetLease(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="long-term">long-term</option>
            <option value="short-term">short-term</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Furnishing:</h4>
          <select
            className={styles.furnishing}
            onChange={(e) => SetFurnishing(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Access:</h4>
          <select
            className={styles.access}
            onChange={(e) => SetAccess(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className={styles.selectdiv}>
          <h4 className={styles.selectlabel}>Keyword Search:</h4>
          <input
            type="text"
            classname={styles.searchkeywords}
            id="search"
            onChange={(e) => setSearchKeywords(e.target.value)}
            placeholder={"i.e pool, bbq, office"}
          />
        </div>
      </div>

      <div className={styles.advancedpopout}>
        <div className={styles.advanced} onClick={handleClick}>
          Advanced Search
          <button className={styles.planarrow}>
            {activeButton ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.descicons}>
          <h4>Showing {filteredData.length} results</h4>
          <ul>
            <li>See the immediate neighbourhood’s characteristics at a glance - </li>
            <ReactTooltip id='downtown' effect='solid' textColor='#535353' backgroundColor='#E5E5E5' className={styles.reacttip}>
             <span className={styles.tooltip}> <span className={styles.tiptitle}> Downtown </span> <br/><br/>
               If you want to live fast paced, 
               in the heart <br/>of the city, 
               you’ll be right at home with this <br/> like-minded community.
               </span>
            </ReactTooltip>
            <li><a data-tip data-for='downtown'>Downtown <FaCity /></a></li>

            <ReactTooltip id='entertainment' effect='solid' textColor='#535353' backgroundColor='#E5E5E5' className={styles.reacttip}>
             <span className={styles.tooltip}> 
             <span className={styles.tiptitle}>Entertainment</span> <br/><br/>
              Never be bored! Grab a bite or a drink, <br/> make new friends and party into the early <br/> hours of the morning. 
               </span>
            </ReactTooltip>
            <li><a data-tip data-for='entertainment'>Entertainment <FaTheaterMasks /></a></li>

            <ReactTooltip id='shopping' effect='solid' textColor='#535353' backgroundColor='#E5E5E5' className={styles.reacttip}>
             <span className={styles.tooltip}> 
             <span className={styles.tiptitle}>Shopping</span> <br/><br/>
              Love a little retail therapy? With a location <br/> this good you’ll be first 
              to know about the <br/> latest trends and always bumping into <br/> someone you know.
               </span>
            </ReactTooltip>
            <li><a data-tip data-for='shopping'>Shopping <FaShoppingBasket /></a></li>

            <ReactTooltip id='nature' effect='solid' textColor='#535353' backgroundColor='#E5E5E5' className={styles.reacttip}>
             <span className={styles.tooltip}> 
             <span className={styles.tiptitle}>Nature</span> <br/><br/>
             If you love the chance to stretch your legs <br/>outdoors you’ll 
             love the local green spaces<br/> and all the benefits they bring.
               </span>
            </ReactTooltip>
            <li><a data-tip data-for='nature'>Nature <FaEnvira /></a></li>

            <ReactTooltip id='water' effect='solid' textColor='#535353' backgroundColor='#E5E5E5' className={styles.reacttip}>
             <span className={styles.tooltip}> 
             <span className={styles.tiptitle}>Water</span> <br/><br/>
             Fancy being near water? Whether you like <br/> being out on the water or safe on land <br/> looking at the view, 
             you’ll enjoy what this <br/> neighbourhood has to offer. 
               </span>
            </ReactTooltip>
            <li><a data-tip data-for='water'>Water <FaWater /></a></li>

            <ReactTooltip id='sport' effect='solid' textColor='#535353' backgroundColor='#E5E5E5' className={styles.reacttip}>
             <span className={styles.tooltip}> 
             <span className={styles.tiptitle}>Sport</span> <br/><br/>
             This community are either avid supporters <br/> or participants. 
             Take a closer look at the <br/> facilities in this neighbourhood to see if <br/> any interest you.
               </span>
            </ReactTooltip>
            <li><a data-tip data-for='sport'>Sport <FaFootballBall /></a></li>

            <ReactTooltip id='family' effect='solid' textColor='#535353' backgroundColor='#E5E5E5' className={styles.reacttip}>
             <span className={styles.tooltip}> 
             <span className={styles.tiptitle}>Family</span> <br/><br/>
             This neighbourhood has facilities catering <br/> towards families making it perfect for 
             <br/> raising the little ones. 
               </span>
            </ReactTooltip>
            <li><a data-tip data-for='family'>Family <MdFamilyRestroom /></a></li>
          </ul>
        </div>

        <h3>Sort By</h3>
        <select
          className={styles.sortselect}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="newdate_listed">Latest Listings</option>
          <option value="olddate_listed">Oldest Listings</option>
          <option value="suburb">Suburb</option>
          <option value="price"> Lowest Rent</option>
          <option value="maxprice"> Highest Rent</option>
        </select>
        <div className={styles.mapbutton} onClick={handleClick2}>
          <h2> View by Map</h2>
          <h3>
            <FaMapMarkedAlt />
          </h3>
        </div>
      </div>

      

      <div>  
        {isempty ? <div className={styles.listingscontainer}> 
        <div id = "map" className={styles.mapbox} style={{ display: "none" }}>
        <MapLocations/>
        </div>
        <div className={styles.container}>      
          {currentPageData}</div></div> : EmptyAssArray}
      </div> 
      <div className="yeet">  
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      
      </div>
    </div>
  );
};

export default Products;

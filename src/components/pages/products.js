import axios from "axios";
import { Card, Container} from "react-bootstrap";
import { useEffect, useState } from "react";
import Select from 'react-select';
import {
  FaBed,
  FaBath,
  FaCity,
  FaTheaterMasks,
  FaShoppingBasket,
  FaEnvira,
  FaWater,
  FaFootballBall,
} from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { css, jsx } from '@emotion/react'
import Navbar from '../Navbar.js'
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
  1: <FaCity/>,
}

let entertainment = {
  1: <FaTheaterMasks/>
}
let water = {
  1: <FaWater/>
}
let nature = {
  1: <FaEnvira/>
}
let family = {
  1: <MdFamilyRestroom/>
}
let sport = {
  1: <FaFootballBall/>
}

const selectdistricts = [
  {value: '', label: 'Any'},
  { value: 'Auckland City', label: 'Auckland City' },
  { value: 'North Shore City', label: 'North Shore City' },
  { value: 'Manukau City', label: 'Manukau City' },
  { value: 'Rodney District', label: 'Rodney District' },
  { value: 'Waitakere City', label: 'Waitakere City' }
]

const selectsuburbs = [
  {value: '', label: 'Any'},
  {value: 'Albany', label: 'Albany'},
  {value: 'Ararimu', label: ' Ararimu'},
  {value: 'Army Bay', label: ' Army Bay'},
  {value: 'Bayview', label: ' Bayview'},
  {value: 'Beachlands', label: ' Beachlands'},
  {value: 'Birkenhead', label: ' Birkenhead'},
  {value: 'Blockhouse Bay', label: ' Blockhouse Bay'},
  {value: 'Bucklands Beach', label: ' Bucklands Beach'},
  {value: 'City Centre', label: ' City Centre'},
  {value: 'Dannemora', label: ' Dannemora'},
  {value: 'Devonport', label: ' Devonport'},
  {value: 'Eden Terrace', label: ' Eden Terrace'},
  {value: 'Epsom', label: ' Epsom'},
  {value: 'Forrest Hill', label: ' Forrest Hill'},
  {value: 'Freemans Bay', label: ' Freemans Bay'},
  {value: 'Glen Eden', label: ' Glen Eden'},
  {value: 'Glen Innes', label: ' Glen Innes'},
  {value: 'Glenfield', label: ' Glenfield'},
  {value: 'Goodwood Heights', label: ' Goodwood Heights'},
  {value:  'Greenlane', label: ' Greenlane'},
  {value: 'Grey Lynn', label: ' Grey Lynn'},
  {value: 'Gulf Harbour', label: ' Gulf Harbour'},
  {value: 'Half Moon Bay', label: ' Half Moon Bay'},
  {value: 'Hauraki', label: ' Hauraki'},
  {value: 'Herne Bay', label: ' Herne Bay'},
  {value: 'Hillsborough', label: ' Hillsborough'},
  {value: 'Hobsonville', label: ' Hobsonville'},
  {value: 'Howick', label: ' Howick'},
  {value: 'Huapai', label: ' Huapai'},
  {value: 'Kensington', label: ' Kensington'},
  {value: 'Kumeu', label: ' Kumeu'},
  {value: 'Lynfield', label: ' Lynfield'},
  {value: 'Mangere East', label: ' Mangere East'},
  {value: 'Manukau', label: ' Manukau'},
  {value: 'Manurewa', label: ' Manurewa'},
  {value: 'Manurewa East', label: ' Manurewa East'},
  {value: 'Massey', label: ' Massey'},
  {value: 'Meadowbank', label: ' Meadowbank'},
  {value: 'Milford', label: ' Milford'},
  {value: 'Millwater', label: ' Millwater'},
  {value: 'Mt Albert', label: ' Mt Albert'},
  {value: 'Mt Eden', label: ' Mt Eden'},
  {value: 'Mt Roskill', label: ' Mt Roskill'},
  {value: 'Mt Wellington', label: ' Mt Wellington'},
  {value: 'Murrays Bay', label: ' Murrays Bay'},
  {value: 'New Lynn', label: ' New Lynn'},
  {value: 'New Windsor', label: ' New Windsor'},
  {value: 'Newmarket', label: ' Newmarket'},
  {value: 'Northcote', label: ' Northcote'},
  {value: 'Northcross', label: ' Northcross'},
  {value: 'Northpark', label: ' Northpark'},
  {value: 'Onehunga', label: ' Onehunga'},
  {value: 'Orewa', label: ' Orewa'},
  {value: 'Otahuhu', label: ' Otahuhu'},
  {value: 'Pakuranga', label: ' Pakuranga'},
  {value: 'Panmure', label: ' Panmure'},
  {value: 'Papakura', label: ' Papakura'},
  {value: 'Papatoetoe', label: ' Papatoetoe'},
  {value: 'Parnell', label: ' Parnell'},
  {value: 'Pt Chevalier', label: ' Pt Chevalier'},
  {value: 'Puhoi', label: ' Puhoi'},
  {value: 'Pukekohe', label: ' Pukekohe'},
  {value: 'Red Beach', label: ' Red Beach'},
  {value: 'Remuera', label: ' Remuera'},
  {value: 'Royal Oak', label: ' Royal Oak'},
  {value: 'Ruakaka', label: ' Ruakaka'},
  {value: 'Silverdale', label: ' Silverdale'},
  {value: 'St Heliers', label: ' St Heliers'},
  {value: 'St Johns', label: ' St Johns'},
  {value: 'Stanmore Bay', label: ' Stanmore Bay'},
  {value: 'Stonefields', label: ' Stonefields'},
  {value: 'Sunnyvale', label: ' Sunnyvale'},
  {value: 'Takanini', label: ' Takanini'},
  {value: 'Takapuna', label: ' Takapuna'},
  {value: 'Te Atatu South', label: ' Te Atatu South'},
  {value: 'Three Kings', label: ' Three Kings'},
  {value: 'Tikipunga', label: ' Tikipunga'},
  {value: 'Titirangi', label: ' Titirangi'},
  {value: 'Torbay', label: ' Torbay'},
  {value: 'Waimauku', label: ' Waimauku'},
  {value: 'Waiuku', label: ' Waiuku'},
  {value: 'Welcome Bay', label: ' Welcome Bay'},
  {value: 'Beachlands', label: 'Beachlands'},
  {value: 'Blockhouse Bay', label: 'Blockhouse Bay'},
  {value: 'Browns Bay', label: 'Browns Bay'},
  {value: 'City Centre', label: 'City Centre'},
  {value: 'Dairy Flat', label: 'Dairy Flat'},
  {value: 'Devonport', label: 'Devonport'},
  {value: 'East Tamaki', label: 'East Tamaki'},
  {value: 'Eastern Beach', label: 'Eastern Beach'},
  {value: 'Epsom', label: 'Epsom'},
  {value: 'Flat Bush', label: 'Flat Bush'},
  {value: 'Forrest Hill', label: 'Forrest Hill'},
  {value: 'Freemans Bay', label: 'Freemans Bay'},
  {value: 'Glen Eden', label: 'Glen Eden'},
  {value: 'Glenfield', label: 'Glenfield'},
  {value: 'Grafton', label: 'Grafton'},
  {value: 'Henderson', label: 'Henderson'},
  {value: 'Hillcrest', label: 'Hillcrest'},
  {value: 'Hillsborough', label: 'Hillsborough'},
  {value: 'Hobsonville', label: 'Hobsonville'},
  {value: 'Kelston', label: 'Kelston'},
  {value: 'Long Bay', label: 'Long Bay'},
  {value: 'Manurewa', label: 'Manurewa'},
  {value: 'Massey', label: 'Massey'},
  {value: 'Maungatapu', label: 'Maungatapu'},
  {value: 'Meadowbank', label: 'Meadowbank'},
  {value: 'Mission Bay', label: 'Mission Bay'},
  {value: 'Mt Albert', label: 'Mt Albert'},
  {value: 'Mt Eden', label: 'Mt Eden'},
  {value: 'Mt Roskill', label: 'Mt Roskill'},
  {value: 'Newmarket', label: 'Newmarket'},
  {value: 'Ngunguru', label: 'Ngunguru'},
  {value: 'One Tree Hill', label: 'One Tree Hill'},
  {value: 'Orewa', label: 'Orewa'},
  {value: 'Otahuhu', label: 'Otahuhu'},
  {value: 'Pakuranga', label: 'Pakuranga'},
  {value: 'Papatoetoe', label: 'Papatoetoe'},
  {value: 'Parnell', label: 'Parnell'},
  {value: 'Pt Chevalier', label: 'Pt Chevalier'},
  {value: 'Pukekohe', label: 'Pukekohe'},
  {value: 'Ranui', label: 'Ranui'},
  {value: 'Remuera', label: 'Remuera'},
  {value: 'Schnapper Rock', label: 'Schnapper Rock'},
  {value: 'Silverdale', label: 'Silverdale'},
  {value: 'St Heliers', label: 'St Heliers'},
  {value: 'St Johns', label: 'St Johns'},
  {value: 'Stanmore Bay', label: 'Stanmore Bay'},
  {value: 'Stonefields', label: 'Stonefields'},
  {value: 'Sunnyook', label: 'Sunnyook'},
  {value: 'Takapuna', label: 'Takapuna'},
  {value: 'Te Atatu South', label: 'Te Atatu South'},
  {value: 'Three Kings', label: 'Three Kings'},
  {value: 'Totara Vale', label: 'Totara Vale'},
  {value: 'Unsworth Heights', label: 'Unsworth Heights'},
  {value: 'Waiuku', label: 'Waiuku'},
  {value: 'Warkworth', label: 'Warkworth'},
  {value: 'Waterview', label: 'Waterview'},
  {value: 'Woodhill', label: 'Woodhill'},
  {value: 'Wynyard Quarter', label: 'Wynyard Quarter'}] 

  const selectprice_from = [
    {value: '', label: 'Any'},
    {value: '100', label: '$100'},
    {value: '200', label: '$200'},
    {value: '300', label: '$300'},
    {value: '400', label: '$400'},
    {value: '500', label: '$500'},
    {value: '600', label: '$600'},
    {value: '700', label: '$700'},
    {value: '800', label: '$800'},
    {value: '900', label: '$900'},
    {value: '1000', label: '$1000+'},
  ]

  const selectprice_to = [
    {value: '', label: 'Any'},
    {value: '100', label: '$100'},
    {value: '200', label: '$200'},
    {value: '300', label: '$300'},
    {value: '400', label: '$400'},
    {value: '500', label: '$500'},
    {value: '600', label: '$600'},
    {value: '700', label: '$700'},
    {value: '800', label: '$800'},
    {value: '900', label: '$900'},
    {value: '1000', label: '$1000+'},
  ]

  const selectbedrooms = [
    {value: '', label: 'Any'},
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6+', label: '6+'},
  ]

  const selectbathrooms = [
    {value: '', label: 'Any'},
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6+', label: '6+'},
  ]

  const selectproperty_type = [
    {value: '', label: 'Any'},
    {value: 'Apartment', label: 'Apartment'},
    {value: 'House', label: 'House'},
    {value: 'Townhouse', label: 'Townhouse'},
    {value: 'Unit', label: 'Unit'},
  ]

  const selectpet_friendly = [
    {value: '', label: 'Any'},
    {value: 'yes', label: 'Yes'},
    {value: 'no', label: 'No'}
  ]

  const selectfibre = [
    {value: '', label: 'Any'},
    {value: 'yes', label: 'Yes'},
    {value: 'no', label: 'No'}
  ]

  const [districts, SetDistricts] = useState([]);
  const [suburb_districts, SetSuburbs] = useState([]);
  const [price_from, SetPrice_from] = useState([]);
  const [price_to, SetPrice_to] = useState([]);
  const [bedrooms,SetBedrooms] = useState([]);
  const [bathrooms, SetBathrooms] = useState([]);
  const [property_type, SetProperty_type] = useState([]);
  const [pet_friendly, SetPet_friendly] = useState([]);
  const [fibre, SetFibre] = useState([]);
  const [filtereddata, SetFilteredData] = useState([]);


  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("listing_id");


  useEffect(() => {
    const sortArray = type => {
      const types = {
        listing_id: 'listing_id',
        date_listed_int: 'date_listed_int',
        price: 'price',
        bedroom_count: 'bedroom_count',
        bathroom_count: 'bathroom_count',
        suburb: 'suburb',
        city: 'city', 
        maxprice: 'price',
      };
      const sortProperty = types[type];
        const sorted = [...products].sort((a, b) => {
          if (sortProperty === 'suburb') {
            return a.suburb.localeCompare(b.suburb);
          } else if (sortProperty === 'city') {
            return a.city.localeCompare(b.city);
          } else if (sortType === 'maxprice') {
            return b.price > a.price ? 1 : -1;
          } else if (sortType === 'olddate_listed') {
            return a.date_listed_int - b.date_listed_int;
          } else {
            return a[sortProperty] - b[sortProperty];
          }});
        setData(sorted);
      };
      sortArray(sortType);
    }, [sortType]);


  return (
    <div className={styles.listings}>
      <Navbar/>

      <div className={styles.searchbox}>
        <h1>Search Rentals in Auckland</h1>
      <Select className={styles.districts} options={selectdistricts} placeholder="District" onClick={(e) => SetDistricts(e.target.value)}/>
      <Select className={styles.suburbs} options={selectsuburbs} placeholder="Suburbs" onClick={(e) => SetSuburbs(e.target.value)}/>
      <Select className={styles.price_from} options={selectprice_from} placeholder="Price From" onClick={(e) => SetPrice_from(e.target.value)}/>
      <Select className={styles.price_to} options={selectprice_to} placeholder="Price To" onClick={(e) => SetPrice_to(e.target.value)}/>
      <Select className={styles.bedrooms} options={selectbedrooms} placeholder="Bedrooms" onClick={(e) => SetBedrooms(e.target.value)}/>
      <Select className={styles.bathrooms} options={selectbathrooms} placeholder="Bathrooms" onClick={(e) => SetBathrooms(e.target.value)}/>
      <Select className={styles.property_type} options={selectproperty_type} placeholder="Property Type" onClick={(e) => SetProperty_type(e.target.value)}/>
      <Select className={styles.pet_friendly} options={selectpet_friendly} placeholder="Pet Friendly" onClick={(e) => SetPet_friendly(e.target.value)}/>
      <Select className={styles.fibre} options={selectfibre} placeholder="Fibre" onClick={(e) => SetFibre(e.target.value)}/>
      <button className={styles.submit} onClick={"HandleSearch"}>SEARCH</button>
      </div>
      <div className={styles.search}>
        <p>Sort By</p>
      <select onChange={(e) => setSortType(e.target.value)}> 
      <option value="date_listed">Latest Listings</option>
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

                <p className={styles.product4}>
                  {" "}
                  <FaBed /> {product.bedroom_count} <FaBath />{" "}
                  {product.bathroom_count}
                </p>
                <p className={styles.product6}>{downtown[product.downtown]}{" "}
                {entertainment[product.entertainment]}{" "}
                {water[product.water]}{" "}
                {family[product.family]}{" "}
                {nature[product.nature]}{" "}
                {sport[product.sport]}
                </p>
                <p className={styles.product5}>Rent: ${product.price}</p>
              </div>
            </Card>
          </a>
        ))}
      </Container>
    </div>
  );
};

export default Products;

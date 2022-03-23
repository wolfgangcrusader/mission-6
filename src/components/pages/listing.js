import './listing.css';
import {
  FaBed,
  FaBath} from 'react-icons/fa'
// import bedicon from './images/bedicon.png'
// import bathicon from './images/bathicon.png'
import Navbar from '../Navbar'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react';
// const id = 7


export default function Listing() {
  const [showViewProperty, setShowViewProperty] = useState('noForm')
  const { id } = useParams()
  const handleClick = () => {
    setShowViewProperty('showForm')
  }
  const handleClickBack = () => {
    setShowViewProperty('noForm')
  }




  const [listingData, setListingData] = useState([]);



  //axios request to get listing details on any listing from its id. 

  useEffect(() => {
    axios.get(`http://ebsnodeapplication-env.eba-p7evdbqp.us-east-1.elasticbeanstalk.com/listingData/${id}`)
      .then(res => {
        setListingData(res.data)
        // console.log(listingData)
        console.log(res.data)
        console.log('test')
      })
  }, [id])

  //conditional rendering for attributes

  let furnishing = {
    0: <div>Unfurnished </div>,
    1: <div>Furnished </div>
  }
  let pet_friendly_nav = {
    0: <div>Not Pet Friendly</div>,
    1: <div>Pet Friendly</div>
  }

  let pet_friendly = {
    0: <div>No</div>,
    1: <div>Yes</div>
  }

  let bed_count = {
    1: <div>Bed </div>,
    2: <div>Beds</div>,
    3: <div>Beds</div>,
    4: <div>Beds</div>,
    5: <div>Beds</div>,
    6: <div>Beds</div>,
    7: <div>Beds</div>,
  }

  let bath_count = {
    1: <div>Bath </div>,
    2: <div>Baths</div>,
    3: <div>Baths</div>,
    4: <div>Baths</div>,
    5: <div>Baths</div>,
    6: <div>Baths</div>,
    7: <div>Baths</div>,
  }

  let broadband = {
    0: <div>No Fibre</div>,
    1: <div>Fibre</div>
  }

  let smokers = {
    0: <div>No</div>,
    1: <div>Yes</div>
  }

  let supermarket = {
    0: <p></p>,
    1: <div> Supermarket,  </div>,
    2: <div> Supermarkets, </div>,
    3: <div> Supermarkets, </div>,
    4: <div> Supermarkets, </div>,
  }

  let park = {
    0: <div></div>,
    1: <div> Park, </div>
  }

  let dog_park = {
    0: <div>Church</div>,
    1: <div> Dog Park </div>
  }

  //mapping allows for any listing clicked on on the previous page to be presented in the same manner, given they share the same 'key' names in the database. 
  //allows the app to display thousands of listings

  return (<div className='listing-main-body'>
    <Navbar />
    {listingData.map((attribute) => (
      <>
        <div className='listing-page-main-body'>
          <div className='whitespace-navbar-buffer'></div>
          <div className='listing-page-main-body-content'>
            {showViewProperty === 'showForm' &&
              <div className='listing-page-property-veiw-container'>
                <div className='listing-page-property-veiw-container-body'>
                  <div className='listing-page-property-veiw-container-title'>Property Viewing</div>
                  <div className='listing-page-property-veiw-container-date'>
                    <label className='listing-page-property-veiw-container-date-label'> Select a viewing time</label>
                    <input type="date" className='listing-page-property-veiw-container-date-input'></input>
                  </div>
                  <div className='listing-page-property-veiw-container-email'>
                    <label>Enter your email address</label>
                    <input placeholder='example@mail.com'
                      className='listing-page-property-veiw-container-email-input'></input>
                  </div>
                  <div className='listing-page-property-veiw-container-names'>
                    <div className='listing-page-property-veiw-container-firstname'>
                      <label className='listing-page-property-veiw-container-firstname-label'>First Name</label>
                      <input className='listing-page-property-veiw-container-lastname-input'></input>
                    </div>
                    <div className='listing-page-property-veiw-container-lastname'>
                      <label className='listing-page-property-veiw-container-lastname-label'>Last Name</label>
                      <input className='listing-page-property-veiw-container-lastname-input'></input>
                    </div>
                  </div>
                  <div className='listing-page-property-view-container-mobile'>
                    <label className='listing-page-property-view-container-mobile-label'>Mobile Number</label>
                    <input className='listing-page-property-view-container-mobile-input'></input>
                  </div>
                  <div className='listing-page-property-view-container-special'>
                    <div className='listing-page-property-view-container-special-view-count'>No. of viewers <input className='listing-page-property-view-container-special-view-count-input'></input></div>
                    <div className='listing-page-property-view-container-special-vacc-pass'>Upload your Vaccine     Pass<div className='listing-page-property-view-container-special-vacc-pass-btn'>Upload</div>
                    </div>
                  </div>
                  <div className='listing-page-property-view-container-text-area'>
                    <textarea className='listing-page-property-view-container-text-area-itself'></textarea>
                  </div>
                  <div className='listing-page-property-view-container-action-btns'>
                    <div className='listing-page-property-view-container-action-btns-close'>Book</div>
                    <div className='listing-page-property-view-container-action-btns-book' onClick={handleClickBack}>Close</div>

                  </div>
                </div>
              </div>}
            {showViewProperty === 'noForm' && <div></div>}
            <div className='listing-page-main-body-content-top' >
              <div className='listing-page-main-body-content-top-left'>
                <div className='listing-page-main-body-content-top-left-top'>
                  {attribute.suburb}, {attribute.bedroom_count} bedrooms, ${attribute.price} per week
                </div>
                <div className='listing-page-main-body-content-top-left-bottom'>
                  <div className='property-navbar-item'>Residential </div>
                  <div className='property-navabr-item-divider'>|</div>
                  <div className='property-navbar-item'>{attribute.property_type} </div>
                  <div className='property-navabr-item-divider'>|</div>
                  <div className='property-navbar-item'>{attribute.suburb} </div>
                  <div className='property-navabr-item-divider'>|</div>
                  <div className='property-navbar-item'>{furnishing[attribute.furnishing]} </div>
                  <div className='property-navabr-item-divider'>|</div>
                  <div className='property-navbar-item'>{pet_friendly_nav[attribute.pet_friendly]}</div>
                </div>
              </div>
              <div className='listing-page-main-body-content-top-right'>
                <div className='listing-page-main-body-content-top-right-view-btn' onClick={handleClick}><div className='listing-page-main-body-content-top-right-view-btn-text'>View this Property</div></div>
                <div className='listing-page-main-body-content-top-right-apply-btn' >APPLY</div>
              </div>
            </div>
            <div className='listing-page-main-body-content-bottom' >
              <div className='listing-page-main-body-content-bottom-left' >
                <img
                  alt="property"
                  src={attribute.images}
                  className="listing-page-property-image"
                ></img>
              </div>
              <div className='listing-page-main-body-content-bottom-right'>
                <div className='listing-page-main-body-content-bottom-right-top'>
                  <div className='listing-page-main-body-content-bottom-right-top-date-listed'>Listed: {attribute.date_listed}</div>
                  <div className='listing-page-main-body-content-bottom-right-top-title'>
                    {attribute.suburb}, {attribute.bedroom_count} Bedrooms
                  </div>
                  <div className='listing-page-main-body-content-bottom-right-top-address'>{attribute.address}, {attribute.city}</div>
                  <div className='listing-page-main-body-content-bottom-right-top-price'>${attribute.price} per week</div>
                  <div className='listing-page-main-body-content-bottom-right-top-icons'>
                    <div className='listing-page-main-body-content-bottom-right-top-icons-bed'>
                      <FaBed/>
                      {attribute.bedroom_count} {bed_count[attribute.bedroom_count]}</div>
                    <div className='listing-page-main-body-content-bottom-right-top-icons-bath'>
                      <FaBath/>
                      {attribute.bathroom_count} {bath_count[attribute.bathroom_count]}</div>
                  </div>
                </div>
                <div className='listing-page-main-body-content-bottom-right-middle'>
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>Available</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{attribute.availability}</div>
                  </div>
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>Furnishings</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{furnishing[attribute.furnishing]}</div>
                  </div>
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>In the area</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{supermarket[attribute.supermarket]}
                      {park[attribute.parks]} {dog_park[attribute.dog_parks]}</div>
                  </div>
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>Ideal Tenants</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{attribute.ideal_tenants}</div>
                  </div>
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>Maxium Tenants</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{attribute.max_tenants}</div>
                  </div>
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>Pets</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{pet_friendly[attribute.pet_friendly]}</div>
                  </div>
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>Smokers</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{smokers[attribute.smokers]}</div>
                  </div>
                  {/* <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                                        <div className='listing-page-main-body-content-bottom-right-middle-info'>Smoke alarm</div>
                                        <div className='listing-page-main-body-content-bottom-right-middle-info'>{attribute.smoke_alarm}</div>
                                    </div> */}
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>Property ID#</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{attribute.listing_id}</div>
                  </div>
                  <div className='listing-page-main-body-content-bottom-right-middle-info-container'>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>Broadband options</div>
                    <div className='listing-page-main-body-content-bottom-right-middle-info'>{broadband[attribute.fibre]}</div>
                  </div>
                </div>
                <div className='listing-page-main-body-content-bottom-right-bottom'>{attribute.description.slice(0, 250)}.....</div>
              </div>
            </div>
          </div>
        </div>
      </>
    ))}

  </div>
  )
}

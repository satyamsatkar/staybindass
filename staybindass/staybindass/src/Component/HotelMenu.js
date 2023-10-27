import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { DatePicker, Space } from 'antd';
import DOMPurify from 'dompurify';
import axios from 'axios';
import InnerHeader from './InnerHeader';
import moment from 'moment';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const HotelMenu = () => {
  const params = useParams();
  const { hotid , price } = params;
  const [villa, setvilla] = useState([]);
  const [adult, setadult] = useState(0);
  const [children, setchildren] = useState(0);
  const [room, setroom] = useState(0);
  const [gallery, setgallery] = useState({});
  const[aminityImage,setAminityImage] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [days , setdays] = useState(0);

  

  const handleChange = (dates) => {
    if (dates && dates.length === 2) {
      const startDate = dates[0];
      const endDate = dates[1];

      if (startDate && endDate) {
        const lengthOfDateRange = Math.abs(endDate.diff(startDate, 'days')) + 1; 
        setdays(lengthOfDateRange)
      }
    }

    setDateRange(dates);
  };
  

  const data = {
    fromdate: dateRange,
    todate: dateRange,
    adult: adult,
    children: children,
    room: room,
    prop_slug: villa.slug,
    userID: localStorage.getItem('userId'),
    prop_name: villa.title,
    prop_id: villa.id,
    address: villa.address,
    guestname: localStorage.getItem('fullname'),
    guestemail: localStorage.getItem('email'),
    mobile: localStorage.getItem('mobile'),
  };

  const sanitizedData = DOMPurify.sanitize(villa.overview);
  const security = villa.security;
  const rules = villa.rules;
  const policies = villa.policies;
  // console.log(villa.policies,"policies");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8081/Booking_page', data)
      .then((res) => {
        Navigate('/paymentpage');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  useEffect(() => {
    axios.post();
  });

  const { RangePicker } = DatePicker;

  const fetchJson = () => {
    fetch('https://staybindass.com/projson.php')
    
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const filteredData = data.filter((element) => element.id === hotid);
        setvilla(filteredData?.[0]);
      });
  };

  const handleClick = async () => {
    try {
      await navigator.share({
        title: 'Villas',
        text: 'Check out this amazing Villa!',
        url: 'http://localhost:3000/hotelmenu/' + hotid,
      });
      console.log('Successfully shared');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  useEffect(() => {
    if (hotid) {
      fetchJson();
    }
  }, [hotid]);

  
  const data1 = {
    villaid: villa.id,
  };



  useEffect(() => {
    if (villa?.id) {
      villaid();
    }
  }, [villa]);

  async function villaid() {
    axios.post('http://localhost:8081/gallary', data1)
    .then((res)=>{
   
      setgallery(res);
    })
    .catch((err)=>{
      console.log(err)
    })
  
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '60px',
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getImages = async () => {
    axios
      .get("http://localhost:8081/ameniti_img")
      .then((res) => {
        console.log(res.data);
        setAminityImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

useEffect(()=>{
  getImages();
}, [])
  
function decodeHTMLEntities(text) {
  if(text){

    return text.replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>')
               .replace(/&quot;/g, '"')
               .replace(/&#39;/g, "'")
               .replace(/&#x2F;/g, '/');
  }
  else{
    fetchJson();
  }
}

// console.log(decodeHTMLEntities(sanitizedData));

  return (
    <>
      <InnerHeader />
      <div className='container mt80 h100vh'>
        <div className=''>
          <div className='carousle-dest ' style={{ position: 'relative' }}>
            <Slider {...settings}>
              {
                gallery?.data?.map((item)=>{
                  return(
                    <img src={'https://staybindass.com/upload/vgallery/' + item.logo} alt='logo'/>
                  )
                })
              }
            </Slider> 
            {
                gallery?.data?.map((item)=>{
                  return(
                    
                    <img src={'https://staybindass.com/upload/vgallery/' + item?.logo} alt='logo' className='photo-gallary' onClick={handleOpen}/>
                  )
                })
              }
      
          </div>
          <div>
            <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
              <Box sx={style}>
                <div>
                  <i class='bi bi-x-circle modal-close' onClick={handleClose}></i>
                </div>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  Image Gallary
                </Typography>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  <ImageList  sx={{ width: '100%' }} variant='quilted' cols={2} rowHeight='100%'>
                    {gallery?.data?.map((item) => (
                      <ImageListItem  key={item.id} cols={item.cols || 2} rows={item.rows || 1}>
                        <img {...srcset('https://staybindass.com/upload/vgallery/' + item?.logo, 100, item.rows, item.cols)} alt={item.title} loading='lazy' />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-8 info-part'>
            <div className='d-flex justify-content-between px-1 py-4 align-items-center'>
              <div className='star'>
                {/* <p>
                ⭐⭐⭐⭐⭐<span>3,014 reviews</span>
              </p> */}
              </div>
              <div>
                <button className='btn btn-sm border-1 border-danger' onClick={handleClick}>
                  <i className='bi bi-share-fill'></i> Share
                </button>
                <button className='mx-2 btn btn-sm btn-danger'>
                  <i className='bi bi-suit-heart-fill'></i> Save
                </button>
              </div>
            </div>

            <div className='row amenities'>
              <div className='col-lg-3 col-6 text-center'>
                <p className='back py-3 px-1'>
                  <i className='fa-solid fa-bed'></i> {villa?.room_type}
                </p>
              </div>
              <div className='col-lg-3 col-6 text-center'>
                <p className='back  py-3 px-1'>
                  <i className='fa-solid fa-bath'></i> {villa?.home_type}
                </p>
              </div>
              <div className='col-lg-3 col-6 text-center'>
                <p className='back  py-3 px-1'>
                  <i className='fa-solid fa-users'></i> {villa?.minguest}/{villa?.maxguest} Guest
                </p>
              </div>
              <div className='col-lg-3 col-6 text-center'>
                <p className='back py-3 px-1'>
                  <i className='fa-solid fa-sun'></i> Minimum {villa?.nights}
                </p>
              </div>
            </div>
            <h2>Overview</h2>
            <ul className='overview'>
              <p dangerouslySetInnerHTML={{ __html:  decodeHTMLEntities(sanitizedData)}}></p>
              <p id='hideshow' className='readmore'>
                Read More
              </p>
            </ul>

            <h2 className='py-3'>Amenities</h2>

            <div className='row'>
              <div className='col-lg-6 col-6'>
                <p>
                  <i className='bi bi-wifi'></i> Free WIFI
                </p>
              </div>

              <div className='col-lg-6 col-6'>
                <p>
                  <i className='bi bi-tv'></i> Television
                </p>
              </div>
            </div>

            <p type='button' className='readmore' data-bs-toggle='modal' data-bs-target='#exampleModal'>
              See More
            </p>

            <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h1 className='modal-title fs-5' id='exampleModalLabel'>
                      Amenities
                    </h1>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                  </div>
                  <div className='modal-body'>
                    <div className='row'>
                      <div className='col-lg-12 col-12'>
                        <div className='row'>
                        {villa?.amenities?.split(",").map((ele) => (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                              className="col-6 d-flex"
                              key={ele.id}
                            >
                              {aminityImage
                                ?.filter((item) => item.title === ele)
                                .map((item) => {
                                  return (
                                    <img
                                      style={{
                                        width: "40px",
                                        height: "auto",
                                        filter: "contrast(50%)",
                                      }}
                                      src={
                                        "https://staybindass.com/upload/amenities/" +
                                        item?.upload_image
                                      }
                                      alt=""
                                    />
                                  );
                                })}{" "}
                              <p style={{ margin: "0 ", fontSize: "0.9rem" }}>
                                {ele}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='meal-plan p-4 '>
              <h2>Meal Plan</h2>
              <p className='lh-sm'>Local authentic meals are provided by the caretaker on demand. The caretaker is also present on-site to assist you at all times. We offer healthy home-cooked Maharashtrian veg, non-veg, Jain meals and specialities prepared using locally sourced fresh ingredients as much as possible. Tea/Coffee will be served during breakfast and high tea time. If you would like tea/coffee at any other time of the day, it can be arranged at an additional charge.</p>
              <div className='d-flex'>
                <p>
                  {' '}
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='0.5' y='0.5' width='23' height='23' rx='1.5' fill='white' stroke='#11BF0E'></rect>
                    <rect x='5' y='5' width='14' height='14' rx='7' fill='#11BF0E'></rect>
                  </svg>{' '}
                  Veg
                </p>
                <p className='mx-5'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='0.5' y='0.5' width='23' height='23' rx='1.5' fill='white' stroke='#FA4B4B'></rect>
                    <rect x='5' y='5' width='14' height='14' rx='7' fill='#FA4B4B'></rect>
                  </svg>{' '}
                  Non-Veg
                </p>
              </div>
              <div className='d-flex'>
                <button className='btn btn-sm btn-danger'>View Menu</button>
                <button className='btn btn-sm btn-danger mx-2'>Read More</button>
              </div>
            </div>

            <div className='py-3'>
              <p>(Meals can be booked offline by getting in touch with our team)</p>
            </div>

            <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button className='nav-link active' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#pills-home' type='button' role='tab' aria-controls='pills-home' aria-selected='true'>
                  RULES FOR GUESTS
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link' id='pills-profile-tab' data-bs-toggle='pill' data-bs-target='#pills-profile' type='button' role='tab' aria-controls='pills-profile' aria-selected='false'>
                  SECURITY
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link' id='pills-contact-tab' data-bs-toggle='pill' data-bs-target='#pills-contact' type='button' role='tab' aria-controls='pills-contact' aria-selected='false'>
                  POLICIES
                </button>
              </li>
              {/* <li className='nav-item' role='presentation'>
              <button className='nav-link' id='pills-disabled-tab' data-bs-toggle='pill' data-bs-target='#pills-disabled' type='button' role='tab' aria-controls='pills-disabled' aria-selected='false'>
                FAQ
              </button>
            </li> */}
            </ul>

            <div className='tab-content' id='pills-tabContent'>
              <div className='tab-pane fade show active ' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab' tabIndex='0' dangerouslySetInnerHTML={{__html : decodeHTMLEntities(rules)}}>
          
              </div>
              <div className='tab-pane fade' id='pills-profile' role='tabpanel' aria-labelledby='pills-profile-tab' tabIndex='0' dangerouslySetInnerHTML={{__html: decodeHTMLEntities(security)}}>
                
              </div>
              <div className='tab-pane fade' id='pills-contact' role='tabpanel' aria-labelledby='pills-contact-tab' tabIndex='0' dangerouslySetInnerHTML={{__html : decodeHTMLEntities(policies)}}>
                
              </div>

              <div className='tab-pane fade' id='pills-disabled' role='tabpanel' aria-labelledby='pills-disabled-tab' tabIndex='0'>
                <div className='card p-3 '>
                  <div className='d-flex justify-content-between align-items-center'>
                    <button className='btn btn-danger faq-btn' id='faqtoggle'>
                      +
                    </button>
                    <p className='m-0' id='question'>
                      <b>Can I book only one or two rooms, or do I need to book the entire Home?</b>
                    </p>
                  </div>
                  <p id='ans' className='ans-detail'>
                    You cannot book one room. You need to book the entire home.
                  </p>
                </div>

                <div className='card p-3 my-2'>
                  <div className='d-flex align-items-center'>
                    <button className='btn btn-danger faq-btn' id='faqtoggle1'>
                      +
                    </button>
                    <p className='m-0' id='question'>
                      <b>Can I book only one or two rooms, or do I need to book the entire Home?</b>
                    </p>
                  </div>
                  <p id='ans1' className='ans-detail'>
                    You cannot book one room. You need to book the entire home.
                  </p>
                </div>
                <div className='card p-3 my-2'>
                  <div className='d-flex align-items-center'>
                    <button className='btn btn-danger faq-btn' id='faqtoggle1'>
                      +
                    </button>
                    <p className='m-0' id='question'>
                      <b>Can I book only one or two rooms, or do I need to book the entire Home?</b>
                    </p>
                  </div>
                  <p id='ans1' className='ans-detail'>
                    You cannot book one room. You need to book the entire home.
                  </p>
                </div>
                <ul>
                  <li>This villa is pet-friendly but pets are not allowed beyond the verandah.</li>
                  <li>Considering the unique location of the villa, Internet connectivity can get affected due to falling of trees, heavy rains or other causes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bookmain row align-items-center'>
          <p className='col-8 m-0'>Do you want to book this?</p>
          <button type='button' className='btn btn-danger btn-sm col-4 p-2' data-bs-toggle='modal' data-bs-target='#exampleModal1'>
            Book Now
          </button>
        </div>

        <div className='modal fade' id='exampleModal1' tabIndex='-1' aria-labelledby='exampleModalLabel1' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-scrollable'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
              </div>
              <div className='modal-body'>
                <p className='dest-text'>
                  <span>Start from </span>
                  <b>
                    <span className='fs-5'>₹{price}</span> /night
                  </b>
                </p>

                <form onSubmit={handleSubmit}>
                  <div className='date-border p-2'>
                    <p>
                      <b>Check in - Check out</b>
                    </p>
                    <Space style={{ width: '100%', height: '50px' }} direction='vertical' size={12}>
                      <RangePicker style={{ height: '50px' }} onChange={handleChange} />
                    </Space>
                  </div>
                  <div className='date-border p-2'>
                    <p>
                      <b>Guest</b>
                    </p>
                    <span>{adult} adults -</span>
                    <span> {children} children -</span>
                    <span> {room} Room</span>
                  </div>
                  <div>
                    <div className='row justify-content-around align-items-center p-3'>
                      <p className='m-0 col-6'>
                        <b>Adults</b>
                      </p>
                      <div className='d-flex align-items-center col-6 justify-content-end'>
                        <button
                          type='button'
                          className='minus-btn mx-2'
                          onClick={() => {
                            if (adult > 0) {
                              setadult(adult - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <p className='m-0'>{adult}</p>
                        <button type='button' className='plus-btn mx-2' onClick={() => setadult(adult + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className='row  justify-content-around align-items-center p-3'>
                      <p className='m-0 col-6'>
                        <b>children</b>
                      </p>
                      <div className='d-flex align-items-center col-6 justify-content-end'>
                        <button
                          type='button'
                          className='minus-btn mx-2'
                          onClick={() => {
                            if (children > 0) {
                              setchildren(children - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <p className='m-0'>{children}</p>
                        <button type='button' className='plus-btn mx-2' onClick={() => setchildren(children + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className='row  justify-content-around align-items-center p-3'>
                      <p className='m-0 col-6'>
                        <b>Room</b>
                      </p>
                      <div className='d-flex align-items-center col-6 justify-content-end'>
                        <button
                          type='button'
                          className='minus-btn mx-2'
                          onClick={() => {
                            if (room > 0) {
                              setroom(room - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <p className='m-0'>{room}</p>
                        <button type='button' className='plus-btn mx-2' onClick={() => setroom(room + 1)}>
                          +
                        </button>
                      </div>
                      <button type='submit' className='btn btn-danger w-100 my-3' data-bs-dismiss='modal'>
                        Book
                      </button>
                    </div>

                    <div className='d-flex justify-content-between'>
                      <p>₹{price} x {days} night </p>
                      <p>₹{price * days}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p>Service Charges </p>
                      <p>₹{price * days} </p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <p>
                        <b>Total before taxes</b>
                      </p>
                      <p>
                        <b>₹{price * days}</b>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelMenu;
import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer';

import { DatePicker, Space } from 'antd';
import axios from 'axios';

import InnerHeader from './InnerHeader';
import useCount from '../utils/Count';

const ListingPage = () => {
  const [click, setClick] = useState('');
  const [villas, setvillas] = useState([]);
  const [villasRawData, setVillasRawData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggest, setSuggest] = useState([]);
  const [adult, setadult] = useState(0);
  const [children, setchildren] = useState(0);
  const [room, setroom] = useState(0);


  const [city, setcity] = useState([]);


  const location = useLocation();





  useEffect(() => {
    SearchCity();
  }, [city]);

  const SearchCity = async () => {
    const data = await fetch('http://:8081/citylist');
    const json = await data.json();
    setcity(json);
    console.log(json);
  };

  useEffect(() => {
    SearchFetch();
  }, [searchQuery]);

  const SearchFetch = async () => {
    const data = await fetch('http://localhost:8081/addproperty');
    const json = await data.json();
    setSuggest(json);
  };

  const [selectedDate, setSelectedDate] = useState([]);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchTerm(value);
    setSearchParams(new URLSearchParams({ search: value }));
    navigate(`?search=${value}`);
  };

  const data = {
    userID: localStorage.getItem('userId'),
    fromdate: selectedDate[0],
    todate: selectedDate[1],
    cityname: searchQuery,
    adult: adult,
    children: children,
    room: room,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter the villas based on the searchQuery
    const filteredVillas = villasRawData.filter((villa) => villa.title.toLowerCase().includes(searchQuery.toLowerCase()));

    // Update the displayed villas with the filtered results
    setvillas(filteredVillas);

    axios
      .post('http://localhost:8081/search_comp', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchJson = async () => {
    const response = await fetch('https://staybindass.com/projson.php');
    const data = await response.json();
    setvillas(data);
    setVillasRawData(data);
  };

  function handleClearAll() {
    setvillas(villasRawData);
  }

  function handleFilteredData() {
    const filteredData = villasRawData.filter((item) => (item.title.toLowerCase() + item.state.toLowerCase() + item.city.toLowerCase() + item.room_type + (item.minguest + ' guest') + item.pool).includes(searchTerm.toLowerCase() + click.toLowerCase()));
    if (filteredData.length > 2) {
      setvillas(filteredData);
    }
  }

  useEffect(() => {
    fetchJson();
  }, []);


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || '';
    setSearchTerm(query);

    if (query && villasRawData?.length > 0) {
      handleFilteredData();
    } else {
      handleClearAll();
    }
  }, [location.search, villasRawData]);


  

  const [wishdata, setwishdata] = useState([]);

  async function getwishdata() {
    const data = {
      user_id: localStorage.getItem('userId')
    }
    axios.post("http://localhost:8081/wish_data", data)
      .then((res) => {
        setwishdata(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getwishdata()

  }, [])

  console.log(wishdata)
  // console.log(villas.map((item)=> item.id ))

  const  navigate = useNavigate();

  const onhandleClick = async (id) => {
    console.log(id)
    const data = {
      property_id: id,
      user_id: localStorage.getItem('userId'),
    };

    if (localStorage.getItem('userId') ===  null) {
      navigate('/loginpage')
    }
    else {
      if (wishdata.some((item) => item.property_id === id)) {
        await axios.post('http://localhost:8081/wish_delete', data);

      } else {
        await axios.post('http://localhost:8081/wishlist', data);

      }
   
    }

     

   
    getwishdata()
  };

  return (
    <div className=''>
      <>
        <InnerHeader />

      </>


      {villas?.map((item, index) => {
        return (
          <div>
         <Link to={`/hotelmenu/${item.id}`}>
            <div className='item card  overflow-hidden mt-90' key={item.id}>
              <div className='img-fit'>
              <i className={wishdata.some((ele) => ele.property_id === item.id) ? 'bi bi-heart-fill heartbtn heartred' : 'bi bi-heart-fill heartbtn '} onClick={() => onhandleClick(item.id)}></i>
                <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                <p className='night-label '>{item.nights}</p>
              </div>

              <div className='info-part'>
                <h4>{item?.title} </h4>
                <p className='dest-text'>{item?.city}</p>
                <p className='dest-text'>
                  Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                </p>
                <p className='dest-text'>
                  <b>
                    <span className='fs-5'>₹0</span> /night
                  </b>
                </p>
                <p className='extra-text'>(exc. taxes & charges)</p>
              </div>
            </div>
          </Link>
          </div>
       
        );
      })}


      <Footer />
    </div>
  );
};

export default ListingPage;

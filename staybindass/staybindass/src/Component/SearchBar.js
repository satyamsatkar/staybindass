import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { DatePicker, Space } from 'antd';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import $ from 'jquery';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggest, setSuggest] = useState([]);
  const [adult, setadult] = useState(0);
  const [children, setchildren] = useState(0);
  const [room, setroom] = useState(0);
  // const [show, setshow] = useState(true);
  const navigate = useNavigate();
  const [city, setcity] = useState([]);

  useEffect(() => {
    SearchCity();
  }, []);

  const SearchCity = async () => {
    const data = await fetch('http://localhost:8081/citylist');
    const json = await data.json();
    setcity(json);
    // console.log(json);
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

  const data = {
    userID: localStorage.getItem('userId'),
    fromdate: selectedDate[0],
    todate: selectedDate[1],
    cityname: searchQuery,
    cityid: city.id,
    adult: adult,
    children: children,
    room: room,
  };

  const handleCloseSearchPart = () => {
    $('.search-part').hide();
  };

  useEffect(() => {
    
    $(document).ready(function () {
      $('#search').click(function () {
        $('.search-part').show();
      });

      $('#search-close').click(function () {
        handleCloseSearchPart();
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8081/search_comp', data)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { RangePicker } = DatePicker;

  return (
    <>
      <div className='listing-top-part search-position'>
        <form id='search' className='searchbar' role='search' style={{ zIndex: '100' }} onSubmit={handleSubmit}>
          {/* <input className='form-control'  type='search' placeholder='Search for destination or home' aria-label='Search' /> */}
          <Stack spacing={2} sx={{ width: '100%', background: 'white' }}>
            <Autocomplete id='free-solo-demo' onChange={(e, value) => setSearchQuery(value)} value={searchQuery} freeSolo options={city.map((option) => option.city)} getOptionSelected={(option, value) => option === value} renderInput={(params) => <TextField {...params} label='Enter Location' />} />
          </Stack>

          <div className='search-part'>
            <div className=' p-2'>
              <div className='d-flex justify-content-between'>
                <p>
                  <b>Check in - Check out</b>
                </p>
                <div id="search-close">
                  <i className='bi bi-x-circle modal-close' onClick={handleCloseSearchPart} ></i>
                </div>
              </div>
              <Space style={{ width: '100%', height: '50px' }} direction='vertical' size={12}>
                <RangePicker style={{ height: '50px' }} onChange={handleChange} />
              </Space>
            </div>
            <div className=' p-2'>
              <p>
                <b>Guest</b>
              </p>
              <span>{adult} adults -</span>
              <span> {children} children -</span>
              <span> {room} Room</span>
            </div>

        
            <div style={{ background: '#fff' }}>
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
                <button
                  onClick={() => {
                    if (searchQuery.length === 0) {
                      navigate('/');
                    } else {
                      navigate(`/listing?search=${searchQuery}`);
                    }
                  }}
                  type='submit'
                  className='btn btn-danger w-100 my-3'
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;





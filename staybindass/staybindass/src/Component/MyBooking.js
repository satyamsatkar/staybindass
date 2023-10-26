import { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import Header from './Header';
import Error from './Error';
import EmptyBooking from './EmptyBooking';

const MyBooking = () => {
  const [change, setChange] = useState(true);
  const [detail, setDetail] = useState({});

  const data = {
    userID: localStorage.getItem('userId'),
  };

  useEffect(() => {
    async function fetchData() {
      axios.post('http://localhost:8081/confirm_booking', data)
        .then((response) => {
          setDetail(response);
          console.log(response);
        });
    }

    fetchData();
  }, []);


  return detail?.data?.length === 0 ? (
    <>
      <EmptyBooking />
    </>

  ) : (
    <>
      <Header />
      <div className='p-3 mt80'>
        {detail?.data?.map((item) => {
          return (
            <div className='mybooking' key={item.id}>
              <h2>
                <b>My Bookings</b>
              </h2>

              <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                <li className='nav-item' role='presentation'>
                  <button className='nav-link active' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#pills-home' type='button' role='tab' aria-controls='pills-home' aria-selected='true'>
                    Active
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button className='nav-link' id='pills-profile-tab' data-bs-toggle='pill' data-bs-target='#pills-profile' type='button' role='tab' aria-controls='pills-profile' aria-selected='false'>
                    Past
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button className='nav-link' id='pills-contact-tab' data-bs-toggle='pill' data-bs-target='#pills-contact' type='button' role='tab' aria-controls='pills-contact' aria-selected='false'>
                    Cancel
                  </button>
                </li>
              </ul>
              <div className='tab-content' id='pills-tabContent'>
                <div className='tab-pane fade show active book-ticket' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab' tabIndex='0'>
                  <div className='row'>
                    <div className='col-4'>
                      <div className='py-2'>
                        <p className='head-text'>Villa Name</p>
                        <p>
                          <b>{item.prop_name}</b>
                        </p>
                      </div>
                      <div className='py-2'>
                        <p className='head-text'>Booking Date</p>
                        <p>
                          <b>{new Date(item.bookingDate).toLocaleDateString()}</b>
                        </p>
                      </div>
                    </div>

                    <div className='col-4'>
                      <div className='py-2'>
                        <p className='head-text'>Location</p>
                        <p>
                          <b>{item.address}</b>
                        </p>
                      </div>
                      <div className='py-2'>
                        <div>
                          <p className='head-text'>Check-in</p>
                          <p>
                            <b>{new Date(item.checkin).toLocaleDateString()}</b>
                          </p>
                        </div>
                        <div></div>
                      </div>
                    </div>

                    <div className='col-4 p-0'>
                      <div className='py-2'>
                        <p className='text-bg-danger p-1 text-center price'>₹{item.price}</p>
                      </div>
                      <div className='py-4'>
                        <p className='head-text'>Check-out</p>
                        <p>
                          <b>{new Date(item.checkout).toLocaleDateString()}</b>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='toggle-button'>
                    <i className={change ? 'bi bi-arrow-down-circle-fill' : 'bi bi-arrow-up-circle-fill'} id='More' onClick={() => setChange(!change)}></i>
                  </div>

                  {change ? null : (
                    <div id='downpart' className='' style={{}}>
                      <hr style={{ margin: '0px' }} />
                      <div className='row'>
                        <div className='col-6 lh-lg'>
                          <p>Paid</p>
                          <p>Ramain</p>
                          <p>Total</p>
                        </div>

                        <div className='col-6 lh-lg' style={{ textAlign: 'right' }}>
                          <p>{item.totalamt}</p>
                          <p>₹0</p>
                          <p>{item.totalamt}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className='tab-pane fade' id='pills-profile' role='tabpanel' aria-labelledby='pills-profile-tab' tabIndex='0'>
                  ...
                </div>
                <div className='tab-pane fade' id='pills-contact' role='tabpanel' aria-labelledby='pills-contact-tab' tabIndex='0'>
                  ...
                </div>
              </div>
            </div>
          );
        })}

        <Footer />
      </div>
    </>

  );
};

export default MyBooking;

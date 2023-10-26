import Item from 'antd/es/list/Item';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PaymentPage = () => {
  const [paydetail, setPaydetail] = useState({});
  const data = {
    userID: localStorage.getItem('userId'),
  };

  useEffect(() => {
    async function fetchData() {
      axios.post('http://localhost:8081/payment_page', data).then((response) => {
        setPaydetail(response);
        console.log(response);
      });
    }
    fetchData();
  }, []);

  return (
    <div>
      {paydetail?.data?.map((item) => {
        return (
          <div class='box mt80'>
            <div class=''>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-left' viewBox='0 0 16 16'>
                <path fill-rule='evenodd' d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'></path>
              </svg>{' '}
              Review and pay
            </div>

            <table style={{ width: '100%', marginTop: '20px' }}>
              <tr>
                <th style={{ padding: '20px', fontSize: '20px', fontWeight: '500' }}>Trip details</th>
                <th style={{ fontWeight: '500' }}>Edit</th>
              </tr>

              <tbody>
                <tr>
                  <td class='pull-right border1'>Check In</td>
                  <td class='border1 right'>{item.checkin}</td>
                </tr>

                <tr>
                  <td class='pull-right border1'>Check Out </td>
                  <td class='border1 right'>{item.checkout}</td>
                </tr>

                <tr>
                  <td class='pull-right border1'> Guests</td>
                  <td class='border1 right'>{item.adults} Adults</td>
                </tr>

                <tr>
                  <td class='pull-right bordersolid'> Children</td>
                  <td class='bordersolid right'>{item.children} Children</td>
                </tr>
              </tbody>
            </table>

            <div class='box1'>
              <h5 class='text'>Meal Plan</h5>

              <div class='box2'>
                <div class='meal-type'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='0.5' y='0.5' width='23' height='23' rx='1.5' fill='white' stroke='#11BF0E'></rect>
                    <rect x='5' y='5' width='14' height='14' rx='7' fill='#11BF0E'></rect>
                  </svg>
                  <div class='abc'>Veg</div>
                </div>

                <div class='meal-type'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='0.5' y='0.5' width='23' height='23' rx='1.5' fill='white' stroke='#FA4B4B'></rect>
                    <rect x='5' y='5' width='14' height='14' rx='7' fill='#FA4B4B'></rect>
                  </svg>
                  <div class='abc'>Non-Veg</div>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '10px' }}>(Meals can be booked offline by getting in touch with our team)</p>
            <h2 class='text-22 fw-500 mt-40 md:mt-24 mb-3'>Booking Details</h2>

            <div class='form-floating mb-3 user'>
              <input type='text' class='form-control ' value={item.guest_name} id='floatingInput' placeholder='name@example.com' required />
              <label for='floatingInput'> Full Name* </label>
            </div>

            <div class='form-floating mb-3 user'>
              <input type='email' class='form-control ' value={item.guest_email} id='floatingInput' placeholder='name@example.com' required />
              <label for='floatingInput'> Email* </label>
            </div>

            <div class='form-floating mb-3 user'>
              <input type='number' class='form-control ' value={item.guest_mobile} id='floatingInput' placeholder='name@example.com' required />
              <label for='floatingInput'>Phone Number* </label>
            </div>

            <div class='form-floating mb-3 user'>
              <input type='text' class='form-control ' id='floatingInput' placeholder='name@example.com' required />
              <label for='floatingInput'> Residential City* </label>
            </div>

            <p>(All the booking communications will be sent to above mentioned contact details)</p>

            <div class='form-floating mb-3 user'>
              <input type='text' class='form-control  ' id='floatingInput' placeholder='name@example.com' required />
              <label for='floatingInput'> Any special request? </label>
            </div>

            <h6 class='text-15 fw-500 mt-40 md:mt-24'>Enter GST details (optional)</h6>

            <div class='form-floating mb-3 user'>
              <input type='text' class='form-control ' id='floatingInput' placeholder='name@example.com' required />
              <label for='floatingInput'> Company Name </label>
            </div>

            <div class='form-floating mb-3 user'>
              <input type='email' class='form-control ' id='floatingInput' placeholder='name@example.com' required />
              <label for='floatingInput'> GST Number </label>
            </div>

            <div class='form-floating mb-3 user'>
              <input type='number' class='form-control ' id='floatingInput' placeholder='name@example.com' required />
              <label for='floatingInput'>Address </label>
            </div>

            <div class='dropdown show '>
              <a class='btn w-100 mb-5 dropdown-toggle' style={{ backgroundColor: '#ab2440', color: 'aliceblue' }} href='index' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Dropdown link
              </a>

              <div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                <a class='dropdown-item' href='index'>
                  Action
                </a>
              </div>
            </div>

            <h2 class='text-22 fw-500 mt-40 md:mt-24'>Cancellation Policy</h2>

            <p>
              To know more about cancellation policy{' '}
              <a href='https://www.staybindass.com/policies.php'>
                <u>click here</u>
              </a>
            </p>

            <div class='d-flex items-center'>
              <div class='form-checkbox  mb-3 '>
                <input type='checkbox' name='name' />
                <div class='form-checkbox__mark'>
                  <div class='form-checkbox__icon icon-check '></div>
                </div>
              </div>
              <div class='text-14 lh-12 ml-10 mb-3'>
                I agree with
                <a href='https://www.staybindass.com/terms-and-conditions.php'>
                  <u>Terms &amp; Services</u>
                </a>
                of StayBindass
              </div>
            </div>

            <div className='bookmain row align-items-center bg-light'>
              <p className='col-8 m-0'>Do you want to book this?</p>
              <button type='button' className='btn btn-danger btn-sm col-4 p-2' data-bs-toggle='modal' data-bs-target='#exampleModal2'>
                Pay Now
              </button>
            </div>
            <div class='modal fade' id='exampleModal2' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                  </div>
                  <div class='modal-body'>
                    <div class='d-flex items-center'>
                      <div class='form-checkbox  mb-3 '>
                        <input type='checkbox' name='name' />
                        <div class='form-checkbox__mark'>
                          <div class='form-checkbox__icon icon-check '></div>
                        </div>
                      </div>
                      <div class='text-14 lh-12 ml-10 mb-3'>
                        I agree with
                        <a href='https://www.staybindass.com/terms-and-conditions.php'>
                          <u>Terms &amp; Services</u>
                        </a>
                        of StayBindass
                      </div>
                    </div>
                    <div class='box4'>
                      <div class='box-4'>
                        <div class='img'>
                          <img src='https://staybindass.com/upload/property_thumbnail/Villa-SB-020-16-1681470080.jpg' alt='villa' class='img1' />
                        </div>
                        <div class='box5'>
                          <div class='mt-4'>
                            <h6>SB RF 020</h6>
                          </div>
                          <div class='text-14 mt-3'>Goa</div>
                        </div>
                      </div>
                      <h5 class='text-18 fw-500 mt-20 md:mt-10' style={{ paddingLeft: '20px' }}>
                        Price Details
                      </h5>
                      <div class='box6'>
                        <div class='d-flex'>
                          <div class='w-50 ' style={{ padding: '10px 10px' }} id='open-dialog'>
                            <span class='info-icon'>
                              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M8.00065 1.33594C4.32065 1.33594 1.33398 4.3226 1.33398 8.0026C1.33398 11.6826 4.32065 14.6693 8.00065 14.6693C11.6807 14.6693 14.6673 11.6826 14.6673 8.0026C14.6673 4.3226 11.6807 1.33594 8.00065 1.33594ZM8.66732 11.3359H7.33398V7.33594H8.66732V11.3359ZM8.66732 6.0026H7.33398V4.66927H8.66732V6.0026Z' fill='#ab2440'></path>
                              </svg>
                            </span>
                            ₹62,400 x 8 nights &nbsp;
                          </div>
                          <div class='w-50 ' style={{ textAlign: 'right', padding: '10px 10px' }}>
                            ₹499,200
                          </div>
                        </div>

                        <div class='d-flex '>
                          <div class='w-50 ' style={{ padding: '0px 10px' }} id='open-dialog'>
                            ₹{item.price} x 0 nights &nbsp;
                            <span class='info-icon'>
                              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M8.00065 1.33594C4.32065 1.33594 1.33398 4.3226 1.33398 8.0026C1.33398 11.6826 4.32065 14.6693 8.00065 14.6693C11.6807 14.6693 14.6673 11.6826 14.6673 8.0026C14.6673 4.3226 11.6807 1.33594 8.00065 1.33594ZM8.66732 11.3359H7.33398V7.33594H8.66732V11.3359ZM8.66732 6.0026H7.33398V4.66927H8.66732V6.0026Z' fill='#ab2440'></path>
                              </svg>
                            </span>
                          </div>
                          <div class='w-50 ' style={{ textAlign: 'right', padding: '0px 10px' }}>
                            ₹499,200
                          </div>
                        </div>
                      </div>
                      <div class='btn1'>
                        <div class='text-1'>
                          <p>You pay only : ₹186,368 per person</p>
                        </div>
                        <br />
                        <a href='but' class='button2'>
                          Pay Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // <p>{item.id}</p>
        );
      })}
    </div>
  );
};

export default PaymentPage;


import { useEffect, useState } from 'react';
import Footer from './Footer';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


const ListingPage = () => {

  const[villas , setVillas] = useState({})

  const data = {
    userid : localStorage.getItem('userId')
  }

  useEffect (()=>{
  
  })  
  
  return (
    <div className=''>
      <div className='listing-top-part mt80 container'>
 
      </div>

      <SearchBar style={{zIndex : "1000"}}/>
      {villas?.map((item, index) => {
        return (
          <Link to={`/hotelmenu/${item.id}`}>
            <div className='item card my-3 overflow-hidden' key={item.id}>
              <div className='img-fit'>
                <i className='bi bi-heart-fill heartbtn'></i>
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
        );
      })}

      <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Modal title
              </h1>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>

            <div className='modal-body'>
              <div className='top-filter'>
                <p>
                  <b>Top filter</b>
                </p>

                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='flexRadioDefault' value='anjuna' id='flexCheckDefault1' onClick={(e) => setModsearch(e.target.value)} />
                  <label className='form-check-label' htmlFor='flexCheckDefault1'>
                    Anjuna
                  </label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='flexRadioDefault' value='Nerul' id='flexCheckDefault2' onClick={(e) => setModsearch(e.target.value)} />
                  <label className='form-check-label' htmlFor='flexCheckDefault2'>
                    Nerul
                  </label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='flexRadioDefault' value='Parra' id='flexCheckDefault3' onClick={(e) => setModsearch(e.target.value)} />
                  <label className='form-check-label' htmlFor='flexCheckDefault3'>
                    Parra
                  </label>
                </div>

                <div className='form-check'>
                  <input className='form-check-input' type='radio' value='Bardez' name='flexRadioDefault' id='flexCheckDefault4' onClick={(e) => setModsearch(e.target.value)} />
                  <label className='form-check-label' htmlFor='flexCheckDefault4'>
                    Bardez
                  </label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' value='Assagaon' name='flexRadioDefault' id='flexCheckDefault5' onClick={(e) => setModsearch(e.target.value)} />
                  <label className='form-check-label' htmlFor='flexCheckDefault5'>
                    Assagaon
                  </label>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <button type='button' className='btn btn-secondary my-2' data-bs-dismiss='modal' >
                Show List
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListingPage;

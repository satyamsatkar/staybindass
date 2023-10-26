
import SearchBar from './SearchBar';
import TodaysDeal from './TodayDeal';
import SimpleSlider from './Slider';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Header from './Header';
// import VillaVeriety from './VillaVeriety'

const Body = () => {
  const [banner, getBanner] = useState([]);

  useEffect(() => {
    getfetchbanner();
  }, []);

  async function getfetchbanner() {
    const data = await fetch('http://localhost:8081/awt_master');
    const json = await data.json();

    getBanner(json);
  }

  return (
    <>
    <Header/>
      <div className='banner-main mt80'>
        <div id='carouselExampleSlidesOnly' className='carousel slide' data-bs-ride='carousel'>
          <div className='carousel-inner'>
            {banner.map((item) => {
              return (
                <div className='carousel-item active' key={item.id}>
                  <img src={'https://www.staybindass.com/upload/sliderimage/' + item.slider_img} className='d-block w-100' alt='...' />
                </div>
              );
            })}
          </div>
        </div>

        <SearchBar />
      </div>

      <SimpleSlider hello='shsh' />
      <TodaysDeal />
      {/* <VillaVeriety/> */}
      <Footer/>
    </>
  );
};

export default Body;

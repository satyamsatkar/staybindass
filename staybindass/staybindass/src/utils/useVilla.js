// import React from 'react';
import { data } from 'jquery';
import { useState } from 'react';
import { useEffect } from 'react';

const useVilla = (id) => {
  const [villa, setVilla] = useState(null);



  useEffect(() => {
    villaeffect();
  }, [villa]);

  async function villaeffect() {
    const data = await fetch(
      'https://staybindass.com/uat/json/approveProperty/approveProperty.json' +
        id
    );

    // const json = await data.json();
    // console.log(json.data);
    setVilla(data);
  }

  return villa;
};

export default useVilla;

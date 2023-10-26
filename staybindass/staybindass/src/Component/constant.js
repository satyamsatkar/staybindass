import loc1 from '../img/icons/location/goa.png';
import loc2 from '../img/icons/location/Bordi.png';
import loc3 from '../img/icons/location/Dahanu.png';
import loc4 from '../img/icons/location/Daman.png';
import loc5 from '../img/icons/location/Igatpuri.png';
import loc6 from '../img/icons/location/Gorai.png';
import loc7 from '../img/icons/location/Kamshet.png';
import loc8 from '../img/icons/location/Kasara.png';

import vill1 from '../img/Villa/Villa SB 001/Villa SB 001-2.jpg'
import vill2 from '../img/Villa/Villa SB 001/Villa SB 001-3.jpg'
import vill3 from '../img/Villa/Villa SB 001/Villa SB 001-4.jpg'


import Var1 from '../img/icons/Top Collection.webp';
import Var2 from '../img/icons/Beachside Villas.webp';
import Var3 from '../img/icons/Budget Friendly.webp';
import Var4 from '../img/icons/Kids Friendly Villas.webp';
import Var5 from '../img/icons/Luxurious Apartments.webp';
import Var6 from '../img/icons/Penthouse.webp';
import Var7 from '../img/icons/Resort.webp';

export const Destination = [
  {
    id: 2,
    img: loc1,
    name: 'Gujrat',
  },
  {
    id: 2,
    name: 'karnataka',
    img: loc2,
  },
  {
    id: 3,
    name: 'Mumbai',
    img: loc3,
  },
  {
    id: 4,
    name: 'Jammu&Kashmir',
    img: loc4,
  },
  {
    id: 5,
    name: 'Bihar',
    img: loc5,
  },
  {
    id: 6,
    name: 'Assam',
    img: loc6,
  },
  {
    id: 7,
    name: 'Tamilnadu',
    img: loc7,
  },
  {
    id: 8,
    name: 'Kerla',
    img: loc8,
  },
];



export const TodayDeal  = [

  {
    name :"Villa in Anjuna Goa 3BHK",
    place :"Candolim, Goa,India",
    guest :"Upto 6 Guest | 3 Bedrooms | 1 Pool",
    rate :"₹ 5000",
    label:"(exc. taxes & charges)",
    img: vill1
  },
  {
    name :"Villa in Pune 1BHK",
    place :"Lavasa, Pune,India",
    guest :"Upto 2 Guest | 3 Bedrooms | 1 Pool",
    rate :"₹ 10000",
    label:"(exc. taxes & charges)",
    img: vill2
  },
  {
    name :"Villa in Surat 2BHK",
    place :"Silvassa,Surat,India",
    guest :"Upto 3 Guest | 3 Bedrooms | 1 Pool",
    rate :"₹ 20000",
    label:"(exc. taxes & charges)",
    img: vill3
  }
]


export const Veriety =[
  {
    img: Var1,
    name:"Top Collection",
    target:"#pills-home",
    controls:"pills-Collection",
    class: "nav-link active",
    id:"pills-home-tab",
    tabid:"pills-home",

  
  },
  {
    img: Var2,
    name:"Budget Friendly",
    target:"#pills-Beachside",
    controls:"pills-Beachside",
    class: "nav-link",
    id:"pills-Beach-tab",
    tabid:"pills-Beachside",
    value:"Penthouse",
  },
  {
    img: Var3,
    name:"Luxurious Villas",
    target:"#pills-Lux",
    controls:"pills-Luxurious",
    class: "nav-link",
    id:"pills-Lux-tab",
    tabid:"pills-Lux",
    value:"Luxurious Villas"
  },
  {
    img: Var4,
    name:"Riverside Villas",
    target:"#pills-Riverside",
    controls:"pills-Riverside",
    class: "nav-link",
    id:"pills-River-tab",
    tabid:"pills-Riverside",
    value:"Luxurious Villas"
  },
  {
    img: Var5,
    name:"Nature Lap",
    target:"#pills-nature",
    controls:"pills-Natures",
    class: "nav-link",
    id:"pills-nature-tab",
    tabid:"pills-nature",
    value:"Luxurious Villas"
  },
  {
    img: Var6,
    name:"Pet Friendly Villas",
    target:"#pills-Pet",
    controls:"pills-Pet",
    class: "nav-link",
    id:"pills-pet-tab",
    tabid:"pills-Pet",
    value:"Luxurious Villas",
  },
  {
    img: Var7,
    name:"Kids Friendly",
    target:"#pills-Friend",
    controls:"pills-Kids",
    class: "nav-link ",
    id:"pills-friend-tab",
    tabid:"pills-Kids",
    value:"Luxurious Villas",
  },
  {
    img: Var7,
    name:"Penthouse",
    target:"#pills-Penthouse",
    controls:"pills-Penthouse",
    class: "nav-link ",
    id:"pills-Pent-tab",
    tabid:"pills-Penthouse",
    value:"Penthouse",
  }
]

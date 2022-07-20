import React, { useState} from 'react';
import Grbutton from "components/Grbutton/Grbutton";
import HomeListItem from "./HomeListItem/HomeListItem";



import { Scrollbars } from 'react-custom-scrollbars-2';
import "./DashboardHome.scss"

const DashboardHome = () => {

  // const itemData = { 
  //   id:1, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'
  // }
  const fakeDataArr = [
    {id:1, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:2, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:3, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:4, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:5, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:6, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:7, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:8, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:9, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:10, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:11, img: '/list-item-img.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'}
  ]
  const [listDataArr, setListDataArr] = useState(fakeDataArr)
  return (
    <div className="DashboardHome">
      <div className="l-container">
        <div className="top-container">
          <div className="top-title">
            Funky Feed
          </div>
          <Grbutton
            onClick={()=>{}}
          >
            Earn Points Faster
          </Grbutton>
        </div>
        <div className="l-body">
          <div className="anime-img-container">
            <img className="anime-img" src="/talking.gif" alt="talking"/>
          </div>
        </div>
        <div className="l-list">
          <Scrollbars style={{ height: 345 }}>
            {listDataArr.map(el=>(
              <HomeListItem 
                key = {el.id}
                data = {el}
              />
            ))}
          </Scrollbars>
        </div>
      </div>
      <div className="r-container">
        <div className="top-container">
          <div className="top-title">
            Mojo Multipliers
          </div>
          <Grbutton
            onClick={()=>{}}
          >
            View All Mojo Vials
          </Grbutton>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome

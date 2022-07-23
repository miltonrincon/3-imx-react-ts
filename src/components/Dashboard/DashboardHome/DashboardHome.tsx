import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SpiredSlider from "components/SpiredSlider/SpiredSlider";
import HomeListItem from "./HomeListItem/HomeListItem";
import { Scrollbars } from 'react-custom-scrollbars-2';
import {DASHBOARD_PATH} from 'routes/dashboardRoutes';
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

  const [selectedId, setSelectedId] = useState(0)

  const dummySpiredImageDataArr = [
    {
      id: 0,
      imageUrl: "/dummy_slider_image_1.png",
      name: "Mojo Vial #201",
      info: [
        {
          val: "1.1X",
          label: "FUNKY MULTIPLIER"
        },
        {
          val: "1/200",
          label: "RARITY"
        }
      ]
    },
    {
      id: 1,
      imageUrl: "/dummy_slider_image_2.png",
      name: "Mojo Vial #202",
      info: [
        {
          val: "1.9X",
          label: "FUNKY MULTIPLIER"
        },
        {
          val: "1/400",
          label: "RARITY"
        }
      ]
    },
    {
      id: 2,
      imageUrl: "/dummy_slider_image_3.png",
      name: "Mojo Vial #203",
      info: [
        {
          val: "2.1X",
          label: "FUNKY MULTIPLIER"
        },
        {
          val: "1/500",
          label: "RARITY"
        }
      ]
    },
    {
      id: 3,
      imageUrl: "/dummy_slider_image_4.png",
      name: "Mojo Vial #204",
      info: [
        {
          val: "5.0X",
          label: "FUNKY MULTIPLIER"
        },
        {
          val: "1/800",
          label: "RARITY"
        }
      ]
    },
    {
      id: 4,
      imageUrl: "/dummy_slider_image_5.png",
      name: "Mojo Vial #205",
      info: [
        {
          val: "1.3X",
          label: "FUNKY MULTIPLIER"
        },
        {
          val: "1/250",
          label: "RARITY"
        }
      ]
    },
  ]
  const [arrData, setArrData] = useState(dummySpiredImageDataArr);

  const afterChangeSlideSpiredSlider = (curent:number) => {
    setSelectedId(arrData[curent].id)
  }

  // use useEffect for call this listdata for list from BE and setListDataArr method to save into state here
  // useEffect(() => {
  //  setListDataArr([....])
  //  setArrData([...])
  // }, []);
  
  const notify = () => toast("Notify text!");
  const notifys = () => toast.success("Notify success text!");
  const notifyi = () => toast.info("Notify info text!");
  const notifye= () => toast.error("Notify error text!");
  const notifyw= () => toast.warning("Notify warning text!");

  return (
    <React.Fragment>
      <div style={{position:'absolute'}}>
        <button onClick={notify}>Notify text!</button>
        <button onClick={notifys}>Notify success!</button>
        <button onClick={notifyi}>Notify info!</button>
        <button onClick={notifye}>Notify error!</button>
        <button onClick={notifyw}>Notify warning!</button>
      </div>

      <div className="DashboardHome">
        <div className="l-container">
          <div className="top-container">
            <div className="top-title">
              Funky Feed
            </div>
            <Link className="Grbutton" to={`${DASHBOARD_PATH}/mint`}>
              Earn Points Faster
            </Link>
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
            <Link className="Grbutton" to={`${DASHBOARD_PATH}/inventory?id=${selectedId}`}>
              View All Mojo Vials
            </Link>
          </div>
          <SpiredSlider sliderData={arrData} afterChangeSlide={afterChangeSlideSpiredSlider}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DashboardHome

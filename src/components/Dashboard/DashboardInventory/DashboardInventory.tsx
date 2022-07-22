import React, { useState, useEffect } from 'react';
import SpiredSlider from "components/SpiredSlider/SpiredSlider";
import classNames from 'classnames/bind';
import Grbutton from "components/Grbutton/Grbutton";
import "./DashboardInventory.scss"
const DashboardInventory = () => {


  const fakeDataArr = [
    {id:1, img: '/dummy_slider_image_1.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:2, img: '/dummy_slider_image_2.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:3, img: '/dummy_slider_image_3.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:4, img: '/dummy_slider_image_4.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:5, img: '/dummy_slider_image_5.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:6, img: '/dummy_slider_image_1.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:7, img: '/dummy_slider_image_2.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:8, img: '/dummy_slider_image_3.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'},
    {id:9, img: '/dummy_slider_image_4.png',title: 'QUEST',t1: 'NFT COLLECTION',t2: 'ACTIVITY',price: 40,textPrice: 'earned',currency: '/currency.svg'}
  ]

  const [gridDataArr, setGridDataArr] = useState(fakeDataArr)
  // TODO one array, but after see data structure
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

  // use useEffect for call this listdata for list from BE and setListDataArr method to save into state here
  // useEffect(() => {
  //  setListDataArr([....])
  //  setArrData([...])
  // }, []);

  const [selectedElement, setSelectedElement] = useState(0)
  useEffect(() => {
    setSelectedElement(gridDataArr[0].id)
  }, [gridDataArr]);
  interface InventoryGridElementProps {
    id: number,
    imageUrl: string,
  }
  const selectElement = (id: number) => {
    setSelectedElement(id);
    // TODO: some updating states for info above grid 9x9 element
  }
  const InventoryGridElement = ( {id, imageUrl } : InventoryGridElementProps) => {
    return (
      <div
        key = {id}
        className={ classNames('inventory-grid-element', { active: selectedElement===id }) } 
        onClick={() => selectElement(id)}
      >
        <img className="inventory-element-image" src={imageUrl} alt={imageUrl}/>
      </div>
    );
  }

  return (
    <div className="DashboardInventory">
      <div className="l-container">
        <SpiredSlider sliderData={arrData} mainSlideHeight={385}/>
      </div>
      <div className="r-container">
        <div className="top-container">
          {/* TODO: render these elements from array data */}
          <div className="top-title">My Mojo Vault</div>
          <div className="top-text">Every Mojo Multiplier you mint will multiply the Passive & Active Funky Points you earn. Mojo Multilpiers perks stack infinitely!</div>
        </div>
        <div className="info-data-container">
          <div className="info-data-element">
            <div className="el-val">2X</div>
            <div className="el-label">TOTAL MULTIPLIER</div>
          </div>
          <div className="info-data-element">
            <div className="el-val">3</div>
            <div className="el-label">TOTAL MOJO VIALS</div>
          </div>
        </div>
        <div className="inventory-list-grid">
          {gridDataArr.map(el=>(
            <InventoryGridElement
              id= {el.id}
              imageUrl= {el.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardInventory

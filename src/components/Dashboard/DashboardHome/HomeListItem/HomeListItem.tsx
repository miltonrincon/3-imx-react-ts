import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import "./HomeListItem.scss"
interface ItemDataProps {
  img: string | undefined,
  title: string | undefined,
  t1: string | undefined,
  t2: string | undefined,
  price: string | number | null | undefined,
  textPrice: string | undefined,
  currency: string | undefined
}
const HomeListItem = ({data}: any) => {
  console.log("data:",data)
  return (
    <div className="HomeListItem"
    >
      <div className="i-img-container">
        <img className="i-item-img" src={data?.img} alt="itemImage"/>
      </div>
      <div>
        <div className="i-title">{data?.title}</div>
        <div className="i-item-t">
          <span className="i-t1">{data?.t1}</span>&nbsp;|&nbsp;<span  className="i-t2">{data?.t2}</span>
        </div>
      </div>
      <div>
        <div className="i-price-box">
          <div className="i-item-price">
            <div className="i-price">{data?.price}</div>
            <div className="i-text-price">{data?.textPrice}</div>
          </div>
          <img className="i-currency-img" src={data?.currency} alt="currency"/>
        </div>
      </div>
    </div>
  )
}

export default HomeListItem

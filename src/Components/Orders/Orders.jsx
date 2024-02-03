import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
// import Style from './Orders.module.css'

export default function Orders() {

  const [userOrder, setUserOrder] = useState([])

  let { getUserOrders } = useContext(cartContext)
  async function getOrders() {
    let orders = await getUserOrders()

    for (let i = 0; i < orders.length; i++) {
      const Allorders = orders[i];
      const order = Allorders.cartItems[i]
      setUserOrder(order)
    }
  }
  useEffect(() => {
    getOrders()
  }, [])

  return <>
    <h1>Orders</h1>
{/* 
    <div className="row">
      {userOrder.map((orderr) => <div className="col-md-2" >
        <div className="category cursor-pointer"  >
          <img className='w-100' src={orderr.product.imageCover} />
          <h4 className="h6 my-2">00</h4>
        </div>
      </div>)}
    </div> */}
  </>

}

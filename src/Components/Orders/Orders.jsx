import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import noData from "../../Assets/images/No data.svg";
import { userContext } from "../../Context/UserContext";
import { cartContext } from "../../Context/CartContext";
import OrderLoading from "../Loading/OrderLoading";
import { useQuery } from "react-query";
import axios from "axios";

export default function Orders() {
  const { userId, userToken } = useContext(userContext);
  const { getCart } = useContext(cartContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (userToken) getCart();
  }, [userToken]);

  const fetchOrders = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_KEY}/orders/user/${userId}`
    );
    return data.reverse();
  };

  const { data: orders, isLoading: ordersIsLoading } = useQuery(
    ["userOrder", userId],
    fetchOrders,
    { enabled: !!userId && pathname === "/allorders" }
  );

  return (
    <section className="flex items-center wrapper animate-fadeIn">
      <div className="flex-1 px-6 py-6 mx-auto bg-white rounded-md border dark:border-neutral-800 dark:bg-black lg:py-10 lg:px-10 ">
        {ordersIsLoading ? (
          <OrderLoading />
        ) : orders && orders.length > 0 && userId ? (
          <>
            <OrderHeader
              userName={orders[0]?.user?.name}
              orderId={orders[0]?.id}
            />
            <OrderItems products={orders[0]?.cartItems} />
            <OrderDetails
              paymentMethodType={orders[0]?.paymentMethodType}
              productCount={orders[0]?.cartItems.length}
              totalOrderPrice={orders[0]?.totalOrderPrice}
            />
          </>
        ) : (
          <NoData />
        )}
      </div>
    </section>
  );
}

function OrderHeader({ userName, orderId }) {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-4 text-2xl font-semibold lg:text-4xl dark:text-white">
        Thank you for your Order, {userName}!
      </h1>
      <p className="text-lg text-gray-500 dark:text-grayshade-50">
        Your order number is: {orderId}
      </p>
    </div>
  );
}

function OrderItems({ products }) {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <h2 className="mb-4 text-xl font-medium dark:text-grayshade-50">
        What you ordered:
      </h2>
      <div className="flex flex-col gap-5">
        {products?.map(({ _id, product, count }) => (
          <div
            key={_id}
            className="p-5 sm:flex sm:items-center gap-5 bg-white rounded-md shadow dark:bg-grayshade-400"
          >
            <Link
              to={`/ProductDetails/${product.id}`}
              className="w-full sm:w-24 h-60 sm:h-20"
            >
              <img
                className="size-full rounded-sm object-cover max-sm:mb-2"
                src={product.imageCover}
                alt={product.title}
                width={80}
                height={80}
              />
            </Link>
            <div className="w-full">
              <Link
                className="text-lg font-medium dark:text-grayshade-50"
                to={`/ProductDetails/${product.id}`}
              >
                {product.title.length > 70
                  ? product.title.substring(0, 70) + "..."
                  : product.title}
              </Link>
              <ProductDetails product={product} count={count} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductDetails({ product, count }) {
  return (
    <div className="flex flex-col sm:flex-row gap-1 mt-2">
      <DetailItem label="Category" value={product.category.name} />
      <DetailItem label="Brand" value={product.brand.name} />
      <DetailItem label="Quantity" value={count} />
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <p className="mr-4 text-sm font-medium">
      <span className="font-medium dark:text-grayshade-50">{label}:</span>
      <span className="ml-2 text-grayshade-50 dark:text-grayshade-50">
        {value}
      </span>
    </p>
  );
}

function OrderDetails({ paymentMethodType, productCount, totalOrderPrice }) {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-4 text-xl font-medium dark:text-grayshade-50">
          Order Details:
        </h2>
        <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-3">
          <DetailBox label="Payment Type" value={paymentMethodType} />
          <DetailBox label="Products" value={productCount} />
          <DetailBox label="Total" value={totalOrderPrice} unit="EGP" />
        </div>
        <Link
          to="/"
          className="px-6 py-3 text-black border rounded-md md:w-auto dark:border-grayshade-300 dark:hover:bg-grayshade-500 dark:text-white"
        >
          Go back shopping
        </Link>
      </div>
    </>
  );
}

function DetailBox({ label, value, unit }) {
  return (
    <div className="relative flex items-center justify-between px-5 py-3 font-medium leading-8 bg-white rounded-md shadow dark:text-grayshade-50 dark:bg-grayshade-400 font-heading">
      <span>{label}</span>
      <span className="flex items-center">
        {unit && <span className="ml-3 mr-1 text-sm">{unit}.</span>}
        <span className="text-xl">{value}</span>
      </span>
      {label === "Products" && (
        <div className="absolute right-0 flex items-center justify-center bg-grayshade-200 rounded-md w-14 h-14">
          <div className="flex items-center justify-center text-lg font-bold text-black bg-gray-100 rounded-full dark:text-white dark:bg-grayshade-500 w-11 h-11">
            {value}
          </div>
        </div>
      )}
    </div>
  );
}

function NoData() {
  return (
    <div className="flex justify-center animate-fadeIn">
      <div className="flex items-center text-center flex-col gap-2">
        <img src={noData} alt="No Data" className="w-64" />
        <p className="text-xl">No items found!</p>
        <p className="text-gray-500 dark:text-grayshade-50">
          We couldn’t find items that matched your search in the given time
          period.
        </p>
      </div>
    </div>
  );
}

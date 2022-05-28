import Cart from "./components/Cart/Cart";
import React from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData } from "./store/cart-action";
import { fetchCartData } from "./store/cart-action";
// import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed === true) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;

// useEffect(() => {
//   if (isInitial) {
//     isInitial = false;
//     return;
//   }

//   const sendCartData = async () => {
// dispatch(
//   uiActions.showNotification({
//     status: "pending",
//     title: "Sending...",
//     message: "Updating cart...",
//   })
// );

// const response = await fetch(
//   "https://react-demo-d7f50-default-rtdb.firebaseio.com/cart.json",
//   {
//     method: "PUT",
//     body: JSON.stringify(cart),
//   }
// );

// if (!response.ok) {
//   throw new Error("Sending cart data failed");
// }

// const responseData = await response.json();

//   dispatch(
//     uiActions.showNotification({
//       status: "success",
//       title: "Success!",
//       message: "Cart is up to date",
//     })
//   );
// };

//   sendCartData().catch((e) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "error",
//         title: "Error!",
//         message: "Cart update failed",
//       })
//     );
//   });
// }, [cart, dispatch]);

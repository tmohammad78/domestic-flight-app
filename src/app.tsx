import "./style/domestic.css";
import React from "react";
import ReactDOM from "react-dom";


const MainApp = ({ dispatch = {} }) => {
  const pubsub = window.eventMFE;

  const {auth,setAuth} = dispatch
  const [totalPrice ,setTotalPrice] = React.useState(0)
  const renderElementAfterAuth = auth?.isLogin && (
    <div>
      Welcome <b>{auth.name}</b>
      <button onClick={() => setAuth({ isLogin: false, name: null})}>Logout</button>
    </div>
  )
  
  const calculatePrice = () => {
    console.log(pubsub,'ddwindow.eventMFE')
    pubsub?.subscribe("data",({defaultPrice}) => {
      setTotalPrice(100 + defaultPrice)
    })
  }

  return (
    <div className="main">
      <h3>Domestic Flight</h3>
      This is Domestic Flight
      {renderElementAfterAuth}

      <hr />
      {totalPrice > 0 && (
        <div>This is total price: {totalPrice}</div>
      )}
      <button onClick={calculatePrice}>show total Price</button>
    </div>
  );
};

export default MainApp;

export function renderDomestic(container: HTMLElement) {
  ReactDOM.render(<MainApp />, container);
}

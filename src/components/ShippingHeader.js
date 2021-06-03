import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../store";
import CheckoutSteps from "./CheckoutSteps";
import { setPage } from "../action"

export default function ShippingHeader(props) {
  const { dispatch } = useContext(StoreContext);
  const history = useHistory();

  const onClickHeader = () => {
    setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
    history.push("/");
  };

  return (
    <header className="shipping-header">
      <div className="header-wrap">
        <div className="shipping-header-text">
          <h3 className="header-title" onClick={onClickHeader}>{props.title}</h3>
        </div>
      </div>

      <CheckoutSteps className="checkoutsteps" {...props}></CheckoutSteps>
    </header>
  );
}
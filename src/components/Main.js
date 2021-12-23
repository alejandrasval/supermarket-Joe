import React, { useEffect, useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutInitiate } from "../redux/actions";
import { getProducts, Total, SubTotal } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";

const Main = () => {
  const shippingCost = 7;
  const { user } = useSelector((store) => store.user);
  const { product } = useSelector((store) => store.product);
  const { total } = useSelector((store) => store.total);

  let dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleAuth = () => {
    if (user) {
      dispatch(logOutInitiate());
    }
  };

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  //Checkbox marked

  const calculateTotal = (e, product) => {
    console.log(e.target.checked)
    if(e.target.checked === true) {
      dispatch(SubTotal(product))
    }
    // let selectProduct = e.target.checked;
    // if (!!e.target.checked) {
    //   dispatch(SubTotal(product))
    // }
  };

  //Select and Unselect all

  const selectAll = () => {
    
  }

  const unselectAll = () => {
    
  }

  //Counter

  const [counter, setCounter] = useState(0);

  const add = () => setCounter(counter + 1);
  const substract = () => setCounter(counter - 1);


  const handleSubmit = () => {
    swal({
      text: "Tu compra se ha realizado con éxito",
      icon: "success",
    });
  };

  return (
    <>
      <div className="nav-">
        <nav className="navbar">
          <Link to={`${user ? "/" : "/login"}`} className="navbar-link">
            <div onClick={handleAuth} className="navbar-option">
              <span className="navbar-option2">
                {user ? "Cierra sesión" : "Identifícate"}
              </span>
            </div>
          </Link>
        </nav>
        <div className="container">
          <div className="left">
            <h1 className="title">Joe's Supermarket</h1>
            <p className="motto">
              <em>Productos frescos de la mejor calidad.</em>
            </p>
            <img
              className="main-image"
              src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1640239091/pexels-photo-6707511_ia6rzr.jpg"
              alt=""
            ></img>
          </div>
          <div className="right">
            <h4>Ingredientes</h4>
            <h3>Risotto de setas (vegano)</h3>
            <div className="selectors">
              <button className="btn-selector" onClick={selectAll}>Seleccionar todo</button>
              <button className="btn-selector" onClick={unselectAll}>Deseleccionar todo</button>
            </div>
            {product.map((obj) => (
              <div key={uuidv4()} className="product-card">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    calculateTotal(e, product);
                  }}
                />
                <div className="card-left">
                  <p className="product-title">{obj.product}</p>
                  <p>{obj.brand}</p>
                  <p>{obj.quantity}</p>
                  <div className="counter">
                    <button
                      className="btn-subs-counter"
                      onClick={substract}
                      style={{ opacity: counter === 1 ? 0.4 : 1 }}
                    >
                      -
                    </button>
                    <p>{counter}</p>
                    <button className="btn-add-counter" onClick={add}>
                      +
                    </button>
                  </div>
                </div>
                <div className="card-right">
                  <p>$ {obj.price}</p>
                </div>
              </div>
            ))}
            <div className="information-checkout">
              <p>Items: 1</p>
              <p>Subtotal: $ 2.95</p>
              <p>Gastos de envío: $ {shippingCost}</p>
              <p>Total: $ 9,95</p>
            </div>
            <div className="btn-add">
              <button type="submit" className="btn" onClick={handleSubmit}>
                Comprar ingredientes: ${}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

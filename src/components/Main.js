import React, { useEffect, useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutInitiate } from "../redux/actions";
import { getProducts } from "../redux/actions";
import swal from "sweetalert";

const Main = () => {
  const [list, setList] = useState([]);
  const shippingCost = 7;
  const { user } = useSelector((store) => store.user);
  const { product } = useSelector((store) => store.product);
  // const { total } = useSelector((store) => store.total);

  let dispatch = useDispatch();

  const handleAuth = () => {
    if (user) {
      dispatch(logOutInitiate());
    }
  };

  useEffect(() => {
    dispatch(getProducts());
    setList(product);
    // eslint-disable-next-line
  }, [list]);

  //Select and Unselect all

  const [checkedAll, setCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState([]);

  const handleClick = (e, id) => {
    setIsChecked([...isChecked, id]);
    if (!e.target.checked) {
      setIsChecked(isChecked.filter((item) => item !== id));
    }
  };

  const handleSelectAll = () => {
    setCheckedAll(!checkedAll);
    setIsChecked(catalogue.map((li) => li.id));
    console.log(product);
    if (checkedAll) {
      setIsChecked([]);
    }
  };

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

  const catalogue = product.map((obj, index) => {
    return (
      <div key={index} className="product-card">
        <input
          type="checkbox"
          onChange={(e) => handleClick(e, index)}
          checked={isChecked.includes(index)}
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
    );
  });

  return (
    <>
      <div>
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
              <input
                type="checkbox"
                className="btn-selector"
                onChange={handleSelectAll}
                checked={checkedAll}
              />
              Seleccionar todo
            </div>
            {catalogue}
            <div className="information-checkout">
              <p>Items:</p>
              <p>Subtotal: $</p>
              <p>Gastos de envío: $ {shippingCost}</p>
              <p>Total: $</p>
            </div>
            <div className="btn-add">
              <button type="submit" className="btn" onClick={handleSubmit}>
                Comprar ingredientes: $
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

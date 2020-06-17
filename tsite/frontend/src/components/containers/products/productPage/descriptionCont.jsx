import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductPage from "../../../layouts/products/productPage/productPage";
import axios from "axios";

const DescriptionContainer = ({ product }) => {
  const [update, setUpdate] = useState(null);
  let { productId } = useParams();

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie("csrftoken");

  useEffect(() => {
    setUpdate(null);
  }, [update]);

  const updateDescription = descriptionHTML => {
    let productToUpdate = product
    // clean description data from bad whitespaces
    let cleanDescrHTML = descriptionHTML.replace( /&nbsp;/g, " " )
    productToUpdate.description = cleanDescrHTML;
    axios
      .put(`/api/products/${productId}/`, JSON.stringify(product), {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken
        }
      })
      .then(r => {
        console.log(r.status);
        setUpdate(r.status);
      })
      .catch(e => console.log(e));
  };
  return (
    <ProductPage product={product} callBack={updateDescription} />
  );
};
export default DescriptionContainer;

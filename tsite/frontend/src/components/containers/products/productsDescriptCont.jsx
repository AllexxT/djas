import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductsDescr from "../../layouts/products/productsDescr";
import axios from "axios";
import { useLocation } from "react-router";

const ProductsDescrCont = () => {
  const head = useSelector((state) => state.headReducer);
  const [update, setUpdate] = useState(null);
  const textOfPage = head.head.body;
  const location = useLocation();

  // const allowToRender = location.pathname.split("/")[
  //   location.pathname.split("/").length - 1
  // ];

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

  const updateDescription = (descriptionHTML) => {
    let productToUpdate = head.head;
    // clean description data from bad whitespaces
    let cleanDescrHTML = descriptionHTML.replace(/&nbsp;/g, " ");
    productToUpdate.body = cleanDescrHTML;
    axios
      .put(`/api/page/${head.head.page}/`, JSON.stringify(head.head), {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
      })
      .then((r) => {
        console.log(r.status);
        setUpdate(r.status);
      })
      .catch((e) => console.log(e));
  };
  return (
    // allowToRender == head.head.page && (
      <ProductsDescr textOfPage={textOfPage} callBack={updateDescription} />
    // )
  );
};

export default ProductsDescrCont;

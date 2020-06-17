import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sertificates from "../../layouts/sertificates/sertificates";
import { getSertificates } from "../../../actions/sertificates";

const SertificatesContainer = () => {
  const sertificates = useSelector((state) => state.sertificateReducer.sertificates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSertificates());
  }, []);

  return <Sertificates {...{sertificates}} />;
};

export default SertificatesContainer;

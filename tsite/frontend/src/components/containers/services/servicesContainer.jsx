import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../../actions/services";
import { useEffect } from "react";
import InstallationSett from "../../layouts/services/installationSett/installationSett";
import InstallationFence from "../../layouts/services/installationFence/installationFence";
import InstallationMonuments from "../../layouts/services/installationMonuments/installationMonuments";

const ServicesContainer = ({ page }) => {
  const services = useSelector((state) => state.servicesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices(page));
  }, []);
  return <>
  {services.fetching && <p>loading</p> ||
    (
      <>
        {page == 'sett' && <InstallationSett data={services.servicesPage[0]} />}
        {page == 'fence' && <InstallationFence data={services.servicesPage[0]} />}
        {page == 'monuments' && <InstallationMonuments data={services.servicesPage[0]} />}
      </>
    )
  }
  </>;
};

export default ServicesContainer;

import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import loadable from '@loadable/component'

import App from "./layouts/App";

const Page404 = loadable(() => import('./page404'))
// import Page404 from "./page404"

const NewsContainer = loadable(() => import("./containers/news/newsContainer"))
// import NewsContainer from "./containers/news/newsContainer";

// const Sett = loadable(() => import("./containers/products/sett"))
import Sett from "./containers/products/sett";

const Fence = loadable(() => import("./containers/products/fence"))
// import Fence from "./containers/products/fence";

const Brick = loadable(() => import("./containers/products/brick"))
// import Brick from "./containers/products/brick";

const Monuments = loadable(() => import("./containers/products/monuments"))
// import Monuments from "./containers/products/monuments";

const Parapet = loadable(() => import("./containers/products/parapet"))
// import Parapet from "./containers/products/parapet";

const Mdse = loadable(() => import("./layouts/mdse/mdse"))
// import Mdse from "./layouts/mdse/mdse";

const ExpositionContainer = loadable(() => import("./containers/exposition/expositionContainer"))
// import ExpositionContainer from "./containers/exposition/expositionContainer";

const Register = loadable(() => import("./accounts/Register"))
// import Register from "./accounts/Register";

const Login = loadable(() => import("./accounts/Login"))
// import Login from "./accounts/Login";

const Services = loadable(() => import("./layouts/services/services"))
// import Services from "./layouts/services/services";

const Delivery = loadable(() => import("./layouts/services/delivery/delivery"))
// import Delivery from "./layouts/services/delivery/delivery";

const Calculate = loadable(() => import("./layouts/services/calculate/calculate"))
// import Calculate from "./layouts/services/calculate/calculate";

const Consultation = loadable(() => import("./layouts/services/consultation/consultation"))
// import Consultation from "./layouts/services/consultation/consultation";

const InstallSett = loadable(() => import("./containers/services/installSett"))
// import InstallSett from "./containers/services/installSett";

const InstallMonuments = loadable(() => import("./containers/services/installMonuments"))
// import InstallMonuments from "./containers/services/installMonuments";

const InstallFence = loadable(() => import("./containers/services/installFence"))
// import InstallFence from "./containers/services/installFence";

const SertificatesContainer = loadable(() => import("./containers/sertificates/sertificatesContainer"))
// import SertificatesContainer from "./containers/sertificates/sertificatesContainer";

const TitleComponent = loadable(() => import("./containers/titleComponent"))
// import TitleComponent from "./containers/titleComponent";


//  // CHECKING IS USER LOGGED IN
// import { useEffect } from "react";
// import { loadUser } from "../actions/auth";
// import { useDispatch } from "react-redux";


const WithTitle = ({ component: Component, page, home }) => {

  return class Title extends React.Component {
    render() {
      return (
        <>
          <TitleComponent {...{ page, home }} />
          <Component />
        </>
      );
    }
  };
};
const MdseHome = WithTitle({
  component: Mdse /* NewsContainer */,
  page: "products" /* "home" */,
  home: true
});
const NewsComponent = WithTitle({
  component: NewsContainer,
  page: "home",
});
const SettComponent = WithTitle({
  component: Sett,
  page: "sett",
});
const FenceComponent = WithTitle({
  component: Fence,
  page: "fence",
});
const BrickComponent = WithTitle({
  component: Brick,
  page: "brick",
});
const MonumentsComponent = WithTitle({
  component: Monuments,
  page: "monuments",
});
const ParapetComponent = WithTitle({
  component: Parapet,
  page: "parapet",
});
const ExpositionContainerComponent = WithTitle({
  component: ExpositionContainer,
  page: "our_works",
});
const SertificatesComponent = WithTitle({
  component: SertificatesContainer,
  page: "sertificates",
});
const ServicesComponent = WithTitle({
  component: Services,
  page: "services",
});
const DeliveryComponent = WithTitle({
  component: Delivery,
  page: "dostavka",
});
const InstallSettComponent = WithTitle({
  component: InstallSett,
  page: "ukladka_plitki",
});
const InstallFenceComponent = WithTitle({
  component: InstallFence,
  page: "ustanovka_zabora",
});
const InstallMonumentsComponent = WithTitle({
  component: InstallMonuments,
  page: "ustanovka_pamyatnikov",
});
const CalculateComponent = WithTitle({
  component: Calculate,
  page: "zamer",
});
const ConsultationComponent = WithTitle({
  component: Consultation,
  page: "",
});
const ErrorComponent = WithTitle({
  component: Page404,
  page: "error",
});
const RoutedApp = () => {
  //  // CHECKING IS USER LOGGED IN
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadUser());
  // }, []);
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Route path="/products/sett" component={SettComponent} />
          <Route path="/products/fence" component={FenceComponent} />
          <Route path="/products/brick" component={BrickComponent} />
          <Route path="/products/monuments" component={MonumentsComponent} />
          <Route path="/products/parapet" component={ParapetComponent} />

          {/* <Route path="/products" component={MdseComponent} /> */}

          <Route
            exact
            path="/exposition"
            component={ExpositionContainerComponent}
          />

          <Route exact path="/sertificates" component={SertificatesComponent} />

          <Route
            exact
            path="/services/delivery"
            component={DeliveryComponent}
          />
          <Route exact path="/services/sett" component={InstallSettComponent} />
          <Route
            exact
            path="/services/fence"
            component={InstallFenceComponent}
          />
          <Route
            exact
            path="/services/monuments"
            component={InstallMonumentsComponent}
          />
          <Route
            exact
            path="/services/calculate"
            component={CalculateComponent}
          />
          <Route
            exact
            path="/services/consultation"
            component={ConsultationComponent}
          />
          <Route exact path="/services" component={ServicesComponent} />

          <Route exact path="/news" component={NewsComponent} />

          <Route exact path="/" component={MdseHome} />

          <Redirect
            status={301}
            from="/trotuarnaya-plitka-zaporozhe"
            to="/products/sett"
          />
          <Redirect
            status={301}
            from="/evrozabory-zaporozhe"
            to="/products/fence"
          />
          <Redirect
            status={301}
            from="/pamyatniki-zaporozhe"
            to="/products/monuments"
          />

          <Route path="/*" component={ErrorComponent} status={404} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default RoutedApp;

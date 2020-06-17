import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";

const Alerts = () => {
  const error = useSelector(state => state.errorsReducer);
  const messages = useSelector(state => state.messagesReducer);
  const alert = useAlert();
  useEffect(() => {
    if (error.msg.username) {
      alert.error(`Логин: ${error.msg.username.join()}`);
    }
    if (error.msg.password) {
      alert.error(`Пароль: ${error.msg.password.join()}`);
    }
    if (error.msg.email) {
      alert.error(`Емайл: ${error.msg.email.join()}`);
    }
    if (error.msg.non_field_errors) {
      alert.error(error.msg.non_field_errors.join());
    }

    if (messages.logOut) {
      alert.info(messages.logOut);
    }
    if (messages.logIn) {
        alert.info(messages.logIn);
      }
  }, [error.msg, messages]);
  return <Fragment />;
};

export default Alerts;

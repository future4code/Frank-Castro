import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    }
  }, [history]);
};

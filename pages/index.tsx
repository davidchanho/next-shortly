import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUrl, urlsSelector } from "../app/urlSlice";
import HomePage from "./home";

export default function Home() {
  const dispatch = useDispatch();
  const { urls } = useSelector(urlsSelector);

  useEffect(() => {
    if (urls.length === 0) {
      dispatch(loadUrl());
    }
  }, []);

  return <HomePage />;
}

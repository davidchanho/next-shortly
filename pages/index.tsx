import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUrl } from "../app/urlSlice";
import HomePage from "./home";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUrl());
  }, []);

  return <HomePage />;
}

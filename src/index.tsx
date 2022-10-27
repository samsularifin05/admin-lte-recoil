// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <Suspense fallback={<Skeleton width={"100%"} height={1000} />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);

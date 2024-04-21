import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import theme from "./flowbite-theme";
import { Flowbite } from "flowbite-react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages";
import SignInPage from "./pages/authentication/sign-in";
import SignUpPage from "./pages/authentication/sign-up";
import CardInfo from "./pages/authentication/card";
import Terms from "./pages/terms/terms";
import Help from "./pages/help/help";
import Bill from "./pages/payment/bill";
import OtherUser from "./pages/payment/other_user";


const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} index />
          <Route path="/authentication/sign-in" element={<SignInPage />} />
          <Route path="/authentication/sign-up" element={<SignUpPage />} />
          <Route path="/authentication/card" element={<CardInfo />} />
          <Route path="/terms-and-conditions" element={<Terms />}/>
          <Route path="/help" element={<Help />} />
          <Route path="/payment/bill" element={<Bill />} />
          <Route path="/payment/other_user" element={<OtherUser />} />
        </Routes>
      </BrowserRouter>
    </Flowbite>
  </StrictMode>
);

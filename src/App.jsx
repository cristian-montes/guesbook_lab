import React from "react";
// import { UserProvider } from "./context/UserContext";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";

export default function App() {
  return (
      <Layout>
        <Home />
      </Layout>
  )
}

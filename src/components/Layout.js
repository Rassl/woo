import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import Header from "./Header";
import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = (props) => {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <div>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Arizonia&family=Inter:wght@100&display=swap" rel="stylesheet" />
            <title>Lulls pastry</title>
          </Head>
          <Header />
          {props.children}
          <Footer />
        </div>
      </ApolloProvider>
    </AppProvider>
  );
};

export default Layout;

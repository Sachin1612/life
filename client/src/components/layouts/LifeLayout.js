import { FeedLayout } from "components/feed/FeedLayout";
import { NetworkLayout } from "components/network/NetworkLayout";
import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "./Navbar";

const LifeLayout = ({ component: Component, ...rest }) => {
  return (
    <>
      <Navbar />
      <Route
        {...rest}
        render={(props) => (
          <main className="grid md:grid-cols-4 pt-4">
            <div className="md:col-span-1">
              <FeedLayout />
            </div>
            <div className="md:col-span-2 p-8">
              <Component {...props} />
              <div className="md:col-span-1">
                <NetworkLayout />
              </div>
            </div>
          </main>
        )}
      />
    </>
  );
};

export default LifeLayout;

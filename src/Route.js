import React, { useState, useMemo } from "react";
import { UserContext } from "./hooks/UserContext";
import { Switch, useLocation } from "react-router-dom";
import { Login, Home, PageOne, PageTwo, NoMatch } from "./pages/";

import PublicRoute from "./hooks/PublicRoute";
import PrivateRoute from "./hooks/PrivateRoute";

import CustomLayout from "./component/layout";

import { Route } from "react-router-dom";

import { Layout } from "antd";

import HomeRoutes from "./util/HomeRoutes";

const { Content, Footer } = Layout;

function AppRouter(props) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  function replaceString(string) {
    let regex = string.replace("<br/>", "/");
    return regex;
  }

  // eslint-disable-next-line
  let location = useLocation();

  return (
    <UserContext.Provider value={value}>
      <Switch>
        <PublicRoute restricted={true} component={Login} path="/" exact />

        <CustomLayout className="app-home" isHeader={true} isSideNav={true}>
          <div
            style={{
              marginLeft: "290px",
              marginTop: "40px",
              width: "96%",
              position: "fixed",
              marginRight: "15px",
              borderRadius: "5px",
            }}
          >
            {HomeRoutes.sub1
              .filter((data) => data.path === window.location.pathname)
              .map((data, i) => {
                return (
                  <>
                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "DBOzoneX",
                        lineHeight: "24px",
                        marginBottom: "5px",
                      }}
                    >
                      <span>คลังเอกสารสินไหม {">"} </span>
                      <span style={{ color: "#1890FF" }}>
                        {replaceString(data.menu_wording)}
                      </span>
                    </div>
                    <Layout
                      style={{
                        borderRadius: "10px",
                        maxWidth: "80%",
                        maxHeight: "100%",
                      }}
                    >
                      <Content>
                        <Route
                          exact
                          path={data.path}
                          component={data.component}
                        />
                      </Content>
                    </Layout>
                  </>
                );
              })}

            {HomeRoutes.sub2
              .filter((data) => data.path === window.location.pathname)
              .map((data, i) => {
                return (
                  <>
                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "DBOzoneX",
                        lineHeight: "24px",
                      }}
                    >
                      <span>คลังเอกสารสินไหม {">"} </span>
                      <span style={{ color: "#1890FF" }}>
                        {replaceString(data.menu_wording)}
                      </span>
                    </div>
                    <Layout
                      style={{
                        borderRadius: "10px",
                        width: "80%",
                        height: "100%",
                      }}
                    >
                      <Content>
                        <Route
                          exact
                          path={data.path}
                          component={data.component}
                        />
                      </Content>
                    </Layout>
                  </>
                );
              })}
          </div>
        </CustomLayout>

        <PrivateRoute component={PageOne} path="/page-1" exact />
        <PrivateRoute component={PageTwo} path="/page-2" exact />
        <PrivateRoute component={Home} path="/home" exact />
        <PrivateRoute component={NoMatch} />
      </Switch>
    </UserContext.Provider>
  );
}

export default AppRouter;

import { Refine, GitHubBanner, ErrorComponent } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import dataProvider from "@refinedev/simple-rest";
import routerBindings, {
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { Header } from "./header";
import { Posts } from "./pages/posts";

import "./App.css";

function App() {
  return (
    
    <BrowserRouter>
    <Header></Header>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider("https://bgg-json.azurewebsites.net")}
          resources={[{ name: "collection/edwalter", list: "/" }]}
          routerProvider={routerBindings}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route
              element={
                <div
                  style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                  }}
                >
                  <Outlet />
                </div>
              }
            >
              <Route index element={<Posts />} />
              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;

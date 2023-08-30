import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
    <Suspense fallback={'Loading...'}>
                <BrowserRouter>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = MainLayout
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = (props) => <>{props.children}</>
                            }
                            const Page = route.component

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Routes>
                </BrowserRouter>
            </Suspense>
    </div>
  );
}

export default App;

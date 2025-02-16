import { useRoutes } from "react-router-dom";
import { Routes } from "./routes";

// Pages
import NotFound from "@pages/auth/NotFound";
import WithLayout from "@pages/LandingPage/WithLayout";
import Landing from "@pages/LandingPage/Landing";
import PublicLayout from "@components/core/layouts/Main/PublicLayout";
import DefaultLayout from "@components/core/layouts/Main/DefaultLayout";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <WithLayout page={Landing} layout={PublicLayout} />,
    },
    {
      path: "*",
      element: <WithLayout page={NotFound} layout={DefaultLayout} />,
    },
    ...Routes,
  ]);

  return routes;
};

export default Router;

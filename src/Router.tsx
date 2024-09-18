import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Accueil from "./routes/accueil/Accueil";
import Appartement from "./routes/appartement/Appartement";
import { getAppartement, getAppartements } from "./api/appartementsService";
import Error404 from "./routes/errors/Error404";
import APropos from "./routes/aPropos/APropos";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Accueil />} loader={getAppartements} />
      <Route path="aPropos" element={<APropos />} />
      <Route
        path="appartements/:id"
        element={<Appartement />}
        loader={({ params }) => {
          return getAppartement(params.id);
        }}
        errorElement={<Error404/>}
      />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);
const Router = () => <RouterProvider router={router} />;

export default Router;

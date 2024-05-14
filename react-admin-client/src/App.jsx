import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PosterList } from "../components/Poster/PosterList";
import { PosterEdit } from "../components/Poster/PosterEdit";
import { PosterCreate } from "../components/Poster/PosterCreate";
import { CategoryList } from "../components/Category/CategoryList";
import { CategoryEdit } from "../components/Category/CategoryEdit";
import { CategoryCreate } from "../components/Category/CategoryCreate";

const dataProvider = jsonServerProvider("http://localhost:2000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posters" list ={PosterList} edit={PosterEdit} create={PosterCreate} />
    <Resource name="categories" list ={CategoryList} edit={CategoryEdit} create={CategoryCreate} recordRepresentation="name" />
  </Admin>
);

export default App;

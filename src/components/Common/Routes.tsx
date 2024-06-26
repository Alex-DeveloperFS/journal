import Home from "../Pages/Home.tsx";
import About from "../Pages/About.tsx";
import Contacts from "../Pages/Contacts.tsx";
import Login from "../Layouts/Login.tsx";
import Registration from "../Layouts/Registration.tsx";
import NotFound from "../Pages/NotFound.tsx";
import Articles from "../Pages/Articles.tsx";
import { ComponentType } from "react";

interface RouteInterface {
  path: string;
  component: ComponentType;
  name: string;
}

export const routes: RouteInterface[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/contacts", component: Contacts, name: "Contacts" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/registration", component: Registration, name: "Registration" },
  { path: "*", component: NotFound, name: "NotFound" },
  { path: "/articles", component: Articles, name: "Articles" }
];

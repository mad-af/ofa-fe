import { LinksFunction } from "@remix-run/node";
import {Navbar, links as NavbarLinks} from "~/components/Navbar/index";

export const links: LinksFunction = () => {
  return [
    ...NavbarLinks(), 
  ];
}

export default function About() {
  return (
    <div >
      <Navbar/>
    </div>
  )
}
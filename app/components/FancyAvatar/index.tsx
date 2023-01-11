import { LinksFunction } from "@remix-run/node";
import styles from "./styles.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

export function FancyAvatar() {
 return (
  <div className="avatar">
    <div className="shape"></div>
    {/* <div className="decoration"></div> */}
  </div>
 ) 
}


import { LinksFunction } from "@remix-run/node";
import {Navbar, links as NavbarLinks} from "~/components/Navbar/index";
import {FancyAvatar, links as FancyAvatarLinks} from "~/components/FancyAvatar/index";
import styles from "~/styles/landing/home.css";
import { FaLinkedin, FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles }, 
    ...NavbarLinks(), 
    ...FancyAvatarLinks(),
  ];
}

export default function Home() {
  return (
    <div >
      <Navbar/>
      
      <div className="container">
        <div className="content">
          <FancyAvatar/>
          <div className="caption">
            <h2>Mochamad Aufa</h2>
            <p>I am a WordPress Developer at heart and create features that are best suited for the job at hand.</p>
            <ul>
              <li><a href=""><FaFacebookSquare className="icon" /></a></li>
              <li><a href=""><FaLinkedin className="icon" /></a></li>
              <li><a href=""><FaWhatsappSquare className="icon" /></a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

import { navbarHoverEffects } from "./nav/navbar";
import { home } from "./pages/home"
import { menu } from "./pages/menu"
import { story } from "./pages/story"
import { order } from "./pages/order"
import { contact } from "./pages/contact"
import { homeLink } from "./nav/link_constants"
import { menuLink } from "./nav/link_constants"
import { storyLink } from "./nav/link_constants"
import { orderLink } from "./nav/link_constants"
import { contactLink } from "./nav/link_constants"

navbarHoverEffects();
home();
homeLink.addEventListener('click', home)
menuLink.addEventListener('click', menu)
storyLink.addEventListener('click', story)
orderLink.addEventListener('click', order)
contactLink.addEventListener('click', contact)
// home();
// menu();
// story();
// order();
// contact();   


import { css } from "emotion";

import { active } from "./active";
import { navLink } from "./navLink";
import { navbarBrand } from "./navbarBrand";
import { navbarNav } from "./navbarNav";
import { navbarText } from "./navbarText";
import { navbarToggler } from "./navbarToggler";
import { navbarTogglerIcon } from "./navbarTogglerIcon";
import { show } from "./show";

export const navbarDark = css`& .${navbarBrand} {
  color: white;
}

& .${navbarBrand}:focus, & .${navbarBrand}:hover {
  color: white;
}

& .${navbarNav} .${navLink} {
  color: rgba(255, 255, 255, 0.5);
}

& .${navbarNav} .${navLink}:focus, & .${navbarNav} .${navLink}:hover {
  color: rgba(255, 255, 255, 0.75);
}

& .${navbarNav} .${navLink}.disabled {
  color: rgba(255, 255, 255, 0.25);
}

& .${navbarNav} .${show} > .${navLink}, & .${navbarNav} .${active} > .${navLink}, & .${navbarNav} .${navLink}.${show}, & .${navbarNav} .${navLink}.${active} {
  color: white;
}

& .${navbarToggler} {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

& .${navbarTogglerIcon} {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

& .${navbarText} {
  color: rgba(255, 255, 255, 0.5);
}

`;

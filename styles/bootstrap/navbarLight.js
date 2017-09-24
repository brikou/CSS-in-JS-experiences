import { css } from "emotion";

import { active } from "./active";
import { navLink } from "./navLink";
import { navbarBrand } from "./navbarBrand";
import { navbarNav } from "./navbarNav";
import { navbarText } from "./navbarText";
import { navbarToggler } from "./navbarToggler";
import { navbarTogglerIcon } from "./navbarTogglerIcon";
import { show } from "./show";

export const navbarLight = css`& .${navbarBrand} {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarBrand}:focus, & .${navbarBrand}:hover {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarNav} .${navLink} {
  color: rgba(0, 0, 0, 0.5);
}

& .${navbarNav} .${navLink}:focus, & .${navbarNav} .${navLink}:hover {
  color: rgba(0, 0, 0, 0.7);
}

& .${navbarNav} .${navLink}.disabled {
  color: rgba(0, 0, 0, 0.3);
}

& .${navbarNav} .${show} > .${navLink}, & .${navbarNav} .${active} > .${navLink}, & .${navbarNav} .${navLink}.${show}, & .${navbarNav} .${navLink}.${active} {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarToggler} {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

& .${navbarTogglerIcon} {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

& .${navbarText} {
  color: rgba(0, 0, 0, 0.5);
}

`;

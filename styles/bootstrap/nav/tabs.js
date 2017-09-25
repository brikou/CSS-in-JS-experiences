import { css } from "emotion";

import { active } from "./../active";
import { dropdownMenu } from "./../dropdown/menu";
import { navLink } from "./link";
import { show } from "./../show";

export const navTabs = css`
  border-bottom: 1px solid #ddd;


& .nav-item {
  margin-bottom: -1px;
}

& .${navLink} {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

& .${navLink}:focus, & .${navLink}:hover {
  border-color: #e9ecef #e9ecef #ddd;
}

& .${navLink}.disabled {
  color: #868e96;
  background-color: transparent;
  border-color: transparent;
}

& .${navLink}.${active}, & .nav-item.${show} .${navLink} {
  color: #495057;
  background-color: #fff;
  border-color: #ddd #ddd #fff;
}

& .${dropdownMenu} {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

`;

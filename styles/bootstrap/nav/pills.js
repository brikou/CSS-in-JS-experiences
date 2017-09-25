import { css } from "emotion";

import { active } from "../active";
import { navLink } from "./link";

export const navPills = css`& .${navLink} {
  border-radius: 0.25rem;
}

& .${navLink}.${active} {
  color: #fff;
  background-color: #007bff;
}

`;

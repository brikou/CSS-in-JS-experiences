import { css } from "emotion";

import { btnDanger } from "./btnDanger";
import { btnDark } from "./btnDark";
import { btnInfo } from "./btnInfo";
import { btnLight } from "./btnLight";
import { btnOutlineDanger } from "./btnOutlineDanger";
import { btnOutlineDark } from "./btnOutlineDark";
import { btnOutlineInfo } from "./btnOutlineInfo";
import { btnOutlineLight } from "./btnOutlineLight";
import { btnOutlinePrimary } from "./btnOutlinePrimary";
import { btnOutlineSecondary } from "./btnOutlineSecondary";
import { btnOutlineSuccess } from "./btnOutlineSuccess";
import { btnOutlineWarning } from "./btnOutlineWarning";
import { btnPrimary } from "./btnPrimary";
import { btnSecondary } from "./btnSecondary";
import { btnSuccess } from "./btnSuccess";
import { btnWarning } from "./btnWarning";
import { dropdownToggle } from "./dropdownToggle";
import { navLink } from "./navLink";
import { navPills } from "./navPills";

export const show = css`& > .${btnPrimary}.${dropdownToggle} {
  background-color: #0069d9;
  background-image: none;
  border-color: #0062cc;
}

& > .${btnSecondary}.${dropdownToggle} {
  background-color: #727b84;
  background-image: none;
  border-color: #6c757d;
}

& > .${btnSuccess}.${dropdownToggle} {
  background-color: #218838;
  background-image: none;
  border-color: #1e7e34;
}

& > .${btnInfo}.${dropdownToggle} {
  background-color: #138496;
  background-image: none;
  border-color: #117a8b;
}

& > .${btnWarning}.${dropdownToggle} {
  background-color: #e0a800;
  background-image: none;
  border-color: #d39e00;
}

& > .${btnDanger}.${dropdownToggle} {
  background-color: #c82333;
  background-image: none;
  border-color: #bd2130;
}

& > .${btnLight}.${dropdownToggle} {
  background-color: #e2e6ea;
  background-image: none;
  border-color: #dae0e5;
}

& > .${btnDark}.${dropdownToggle} {
  background-color: #23272b;
  background-image: none;
  border-color: #1d2124;
}

& > .${btnOutlinePrimary}.${dropdownToggle} {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

& > .${btnOutlineSecondary}.${dropdownToggle} {
  color: #fff;
  background-color: #868e96;
  border-color: #868e96;
}

& > .${btnOutlineSuccess}.${dropdownToggle} {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

& > .${btnOutlineInfo}.${dropdownToggle} {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

& > .${btnOutlineWarning}.${dropdownToggle} {
  color: #fff;
  background-color: #ffc107;
  border-color: #ffc107;
}

& > .${btnOutlineDanger}.${dropdownToggle} {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

& > .${btnOutlineLight}.${dropdownToggle} {
  color: #fff;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

& > .${btnOutlineDark}.${dropdownToggle} {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

& > a {
  outline: 0;
}

& > .${navPills} .${navLink} {
  color: #fff;
  background-color: #007bff;
}

`;

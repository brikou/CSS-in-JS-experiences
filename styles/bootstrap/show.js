import { css } from "emotion";

import { btnDanger } from "./btn/danger";
import { btnDark } from "./btn/dark";
import { btnInfo } from "./btn/info";
import { btnLight } from "./btn/light";
import { btnOutlineDanger } from "./btn/outline/danger";
import { btnOutlineDark } from "./btn/outline/dark";
import { btnOutlineInfo } from "./btn/outline/info";
import { btnOutlineLight } from "./btn/outline/light";
import { btnOutlinePrimary } from "./btn/outline/primary";
import { btnOutlineSecondary } from "./btn/outline/secondary";
import { btnOutlineSuccess } from "./btn/outline/success";
import { btnOutlineWarning } from "./btn/outline/warning";
import { btnPrimary } from "./btn/primary";
import { btnSecondary } from "./btn/secondary";
import { btnSuccess } from "./btn/success";
import { btnWarning } from "./btn/warning";
import { dropdownToggle } from "./dropdown/toggle";
import { navLink } from "./nav/link";
import { navPills } from "./nav/pills";

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

import { css } from "emotion";

import { active } from "../active";
import { btn } from "../btn";
import { dropdownToggle } from "../dropdown/toggle";

export const btnGroup = css`
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;


& > .${btn} {
  position: relative;
  -ms-flex: 0 1 auto;
      flex: 0 1 auto;
  margin-bottom: 0;
}

& > .${btn}:hover {
  z-index: 2;
}

& > .${btn}:focus, & > .${btn}:active, & > .${btn}.${active} {
  z-index: 2;
}

& .${btn} + .${btn}, & .${btn} + &, & & + .${btn}, & & + & {
  margin-left: -1px;
}

& > .${btn}:not(:first-child):not(:last-child):not(.${dropdownToggle}) {
  border-radius: 0;
}

& > .${btn}:first-child {
  margin-left: 0;
}

& > .${btn}:first-child:not(:last-child):not(.${dropdownToggle}) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

& > .${btn}:last-child:not(:first-child), & > .${dropdownToggle}:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

& > & {
  float: left;
}

& > &:not(:first-child):not(:last-child) > .${btn} {
  border-radius: 0;
}

& > &:first-child:not(:last-child) > .${btn}:last-child, & > &:first-child:not(:last-child) > .${dropdownToggle} {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

& > &:last-child:not(:first-child) > .${btn}:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

[data-toggle="buttons"] > & > .${btn} input[type="radio"], [data-toggle="buttons"] > & > .${btn} input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

`;

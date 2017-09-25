import { css } from "emotion";

import { active } from "../../active";
import { btn } from "../../btn";
import { btnGroup } from "../group";
import { dropdownToggle } from "../../dropdown/toggle";

export const btnGroupVertical = css`
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

& .${btn} + .${btn}, & .${btn} + .${btnGroup}, & .${btnGroup} + .${btn}, & .${btnGroup} + .${btnGroup} {
  margin-left: -1px;
}


  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: column;
      flex-direction: column;
  -ms-flex-align: start;
      align-items: flex-start;
  -ms-flex-pack: center;
      justify-content: center;


& .${btn}, & .${btnGroup} {
  width: 100%;
}

& > .${btn} + .${btn}, & > .${btn} + .${btnGroup}, & > .${btnGroup} + .${btn}, & > .${btnGroup} + .${btnGroup} {
  margin-top: -1px;
  margin-left: 0;
}

& > .${btn}:not(:first-child):not(:last-child) {
  border-radius: 0;
}

& > .${btn}:first-child:not(:last-child) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

& > .${btn}:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

& > .${btnGroup}:not(:first-child):not(:last-child) > .${btn} {
  border-radius: 0;
}

& > .${btnGroup}:first-child:not(:last-child) > .${btn}:last-child, & > .${btnGroup}:first-child:not(:last-child) > .${dropdownToggle} {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

& > .${btnGroup}:last-child:not(:first-child) > .${btn}:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

`;

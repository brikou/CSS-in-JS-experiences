import { css } from "emotion";

import { btn } from "../btn";
import { formControl } from "../form/control";
import { formControlPlaintext } from "../form/control/plaintext";
import { inputGroupAddon } from "./addon";
import { inputGroupBtn } from "./btn";

export const inputGroupLg = css`& > .${formControlPlaintext}.${formControl}, & > .${formControlPlaintext}.${inputGroupAddon}, & > .${inputGroupBtn} > .${formControlPlaintext}.${btn} {
  padding-right: 0;
  padding-left: 0;
}

& > .${formControl}, & > .${inputGroupAddon}, & > .${inputGroupBtn} > .${btn} {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

& > select.${formControl}:not([size]):not([multiple]), & > select.${inputGroupAddon}:not([size]):not([multiple]), & > .${inputGroupBtn} > select.${btn}:not([size]):not([multiple]) {
  height: calc(2.3125rem + 2px);
}

& > .${inputGroupAddon}, & > .${inputGroupBtn} > .${inputGroupAddon}.${btn} {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

`;

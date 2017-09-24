import { css } from "emotion";

import { formControlLg } from "./formControlLg";
import { formControlSm } from "./formControlSm";

export const formControlPlaintext = css`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0;
    line-height: 1.25;
    border: solid transparent;
    border-width: 1px 0;

    &.${formControlSm}, &.${formControlLg} {
        padding-right: 0;
        padding-left: 0;
    }
`;

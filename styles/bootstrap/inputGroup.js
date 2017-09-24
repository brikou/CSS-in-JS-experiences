import { css } from "emotion";

import { formControl } from "./formControl";

export const inputGroup = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    width: 100%;

    & .${formControl} {
        position: relative;
        z-index: 2;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 1%;
        margin-bottom: 0;
    }

    & .${formControl}:focus, & .${formControl}:active, & .${formControl}:hover {
        z-index: 3;
    }

    & .${formControl} {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    & .${formControl}:not(:first-child):not(:last-child) {
        border-radius: 0;
    }

    & .${formControl}:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & .${formControl}:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

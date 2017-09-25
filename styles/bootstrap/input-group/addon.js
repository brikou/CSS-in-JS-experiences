import { css } from "emotion";

import { formControlLg } from "../form/control/lg";
import { formControlSm } from "../form/control/sm";

export const inputGroupAddon = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;

    &:not(:first-child):not(:last-child) {
        border-radius: 0;
    }

    white-space: nowrap;
    vertical-align: middle;

    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.25;
    color: #495057;
    text-align: center;
    background-color: #e9ecef;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;

    &.${formControlSm} {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        border-radius: 0.2rem;
    }

    &.${formControlLg} {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        border-radius: 0.3rem;
    }

    & input[type="radio"],
    & input[type="checkbox"] {
        margin-top: 0;
    }

    &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:not(:last-child) {
        border-right: 0;
    }

    &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

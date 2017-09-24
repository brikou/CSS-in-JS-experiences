import { css } from "emotion";

import { active } from "./active";
import { badge } from "./badge";

export const btn = css`
    display: inline-block;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: 0.25rem;
    transition: all 0.15s ease-in-out;

    &:focus,
    &:hover {
        text-decoration: none;
    }

    &:focus,
    &.focus {
        outline: 0;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }

    &.disabled,
    &:disabled {
        opacity: 0.65;
    }

    &:active,
    &.${active} {
        background-image: none;
    }

    a&.disabled,
    fieldset[disabled] a& {
        pointer-events: none;
    }

    & + .dropdown-toggle-split {
        padding-right: 0.5625rem;
        padding-left: 0.5625rem;
    }

    & + .dropdown-toggle-split::after {
        margin-left: 0;
    }

    [data-toggle="buttons"] > & input[type="radio"],
    [data-toggle="buttons"] > & input[type="checkbox"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        pointer-events: none;
    }

    & .${badge} {
        position: relative;
        top: -1px;
    }
`;

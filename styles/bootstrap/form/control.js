import { css } from "emotion";

import { inputGroupAddon } from "./../input-group/addon";
import { invalidFeedback } from "./../invalid/feedback";
import { invalidTooltip } from "./../invalid/tooltip";

export const formControl = css`
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    &::-ms-expand {
        background-color: transparent;
        border: 0;
    }

    &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: none;
    }

    &::-webkit-input-placeholder {
        color: #868e96;
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: #868e96;
        opacity: 1;
    }

    &::placeholder {
        color: #868e96;
        opacity: 1;
    }

    &:disabled,
    &[readonly] {
        background-color: #e9ecef;
        opacity: 1;
    }

    select&:not([size]):not([multiple]) {
        height: calc(2.25rem + 2px);
    }

    select&:focus::-ms-value {
        color: #495057;
        background-color: #fff;
    }

    &.is-valid {
        border-color: #28a745;
    }

    &.is-valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-valid ~ .${invalidFeedback}, &.is-valid ~ .${invalidTooltip} {
        display: block;
    }

    &.is-invalid {
        border-color: #dc3545;
    }

    &.is-invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }

    & + .${inputGroupAddon}:not(:first-child) {
        border-left: 0;
    }
`;

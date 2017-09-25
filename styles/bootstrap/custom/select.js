import { css } from "emotion";

import { invalidFeedback } from "./../invalid/feedback";
import { invalidTooltip } from "./../invalid/tooltip";

export const customSelect = css`
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

    display: inline-block;
    max-width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    line-height: 1.25;
    color: #495057;
    vertical-align: middle;
    background: #fff
        url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
        no-repeat right 0.75rem center;
    background-size: 8px 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
        border-color: #80bdff;
        outline: none;
    }

    &:focus::-ms-value {
        color: #495057;
        background-color: #fff;
    }

    &:disabled {
        color: #868e96;
        background-color: #e9ecef;
    }

    &::-ms-expand {
        opacity: 0;
    }
`;

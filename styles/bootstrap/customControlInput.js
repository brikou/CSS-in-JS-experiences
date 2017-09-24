import { css } from "emotion";

import { customControlIndicator } from "./customControlIndicator";

export const customControlInput = css`
    &.is-valid ~ .${customControlIndicator} {
        background-color: rgba(40, 167, 69, 0.25);
    }

    &.is-valid ~ .custom-control-description {
        color: #28a745;
    }

    &.is-invalid ~ .${customControlIndicator} {
        background-color: rgba(220, 53, 69, 0.25);
    }

    &.is-invalid ~ .custom-control-description {
        color: #dc3545;
    }

    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked ~ .${customControlIndicator} {
        color: #fff;
        background-color: #007bff;
    }

    &:focus ~ .${customControlIndicator} {
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px #007bff;
    }

    &:active ~ .${customControlIndicator} {
        color: #fff;
        background-color: #b3d7ff;
    }

    &:disabled ~ .${customControlIndicator} {
        background-color: #e9ecef;
    }

    &:disabled ~ .custom-control-description {
        color: #868e96;
    }
`;

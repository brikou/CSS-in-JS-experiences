import { css } from "emotion";

import { customFileControl } from "./control";

export const customFileInput = css`
    &.is-valid ~ .${customFileControl} {
        border-color: #28a745;
    }

    &.is-valid ~ .${customFileControl}::before {
        border-color: inherit;
    }

    &.is-valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-invalid ~ .${customFileControl} {
        border-color: #dc3545;
    }

    &.is-invalid ~ .${customFileControl}::before {
        border-color: inherit;
    }

    &.is-invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    min-width: 14rem;
    max-width: 100%;
    height: 2.5rem;
    margin: 0;
    opacity: 0;
`;

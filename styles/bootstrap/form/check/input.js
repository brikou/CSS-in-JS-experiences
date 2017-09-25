import { css } from "emotion";

import { formCheckLabel } from "./label";

export const formCheckInput = css`
    position: absolute;
    margin-top: 0.25rem;
    margin-left: -1.25rem;

    &:only-child {
        position: static;
    }

    &.is-valid + .${formCheckLabel} {
        color: #28a745;
    }

    &.is-invalid + .${formCheckLabel} {
        color: #dc3545;
    }
`;

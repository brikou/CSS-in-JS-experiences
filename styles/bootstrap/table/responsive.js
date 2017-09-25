import { css } from "emotion";

import { tableBordered } from "./bordered";

export const tableResponsive = css`
    @media (max-width: 991px) {
        & {
            display: block;
            width: 100%;
            overflow-x: auto;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }

        &.${tableBordered} {
            border: 0;
        }
    }
`;

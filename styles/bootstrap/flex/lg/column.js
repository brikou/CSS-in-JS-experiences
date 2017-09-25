import { css } from "emotion";

export const flexLgColumn = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

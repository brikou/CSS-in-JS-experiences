import { css } from "emotion";

export const alignItemsMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

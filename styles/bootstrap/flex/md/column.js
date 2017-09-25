import { css } from "emotion";

export const flexMdColumn = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

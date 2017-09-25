import { css } from "emotion";

export const orderMd1 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

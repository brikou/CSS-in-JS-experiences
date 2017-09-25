import { css } from "emotion";

export const orderSm1 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

import { css } from "emotion";

export const container = css`
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;

    @media (min-width: 576px) {
        & {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        & {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        & {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        & {
            max-width: 1140px;
        }
    }
`;

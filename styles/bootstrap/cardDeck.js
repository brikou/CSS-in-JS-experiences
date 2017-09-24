import { css } from "emotion";

import { card } from "./card";

export const cardDeck = css`
    @media (min-width: 576px) {
        & {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            margin-right: -15px;
            margin-left: -15px;
        }

        & .${card} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 1 0 0%;
            flex: 1 0 0%;
            -ms-flex-direction: column;
            flex-direction: column;
            margin-right: 15px;
            margin-left: 15px;
        }
    }
`;

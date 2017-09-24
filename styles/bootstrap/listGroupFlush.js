import { css } from "emotion";

import { listGroupItem } from "./listGroupItem";

export const listGroupFlush = css`
    & .${listGroupItem} {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
    }

    &:first-child .${listGroupItem}:first-child {
        border-top: 0;
    }

    &:last-child .${listGroupItem}:last-child {
        border-bottom: 0;
    }
`;

import { css } from "emotion";

import { listGroup } from "./listGroup";
import { listGroupItem } from "./listGroupItem";

export const card = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    & > .${listGroup}:first-child .${listGroupItem}:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    & > .${listGroup}:last-child .${listGroupItem}:last-child {
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }
`;

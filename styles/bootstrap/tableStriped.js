import { css } from "emotion";

export const tableStriped = css`
    & tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

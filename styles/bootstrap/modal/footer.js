import { css } from "emotion";

export const modalFooter = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 15px;
    border-top: 1px solid #e9ecef;

    & > :not(:first-child) {
        margin-left: 0.25rem;
    }

    & > :not(:last-child) {
        margin-right: 0.25rem;
    }
`;

import { css } from "emotion";

import { customControl } from "./customControl";
import { customControlIndicator } from "./customControlIndicator";
import { formCheck } from "./formCheck";
import { formCheckInput } from "./formCheckInput";
import { formCheckLabel } from "./formCheckLabel";
import { formControl } from "./formControl";
import { formControlPlaintext } from "./formControlPlaintext";
import { formGroup } from "./formGroup";
import { inputGroup } from "./inputGroup";

export const formInline = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;

    & .${formCheck} {
        width: 100%;
    }

    @media (min-width: 576px) {
        & label {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-bottom: 0;
        }

        & .${formGroup} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            -ms-flex-align: center;
            align-items: center;
            margin-bottom: 0;
        }

        & .${formControl} {
            display: inline-block;
            width: auto;
            vertical-align: middle;
        }

        & .${formControlPlaintext} {
            display: inline-block;
        }

        & .${inputGroup} {
            width: auto;
        }

        & .form-control-label {
            margin-bottom: 0;
            vertical-align: middle;
        }

        & .${formCheck} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            width: auto;
            margin-top: 0;
            margin-bottom: 0;
        }

        & .${formCheckLabel} {
            padding-left: 0;
        }

        & .${formCheckInput} {
            position: relative;
            margin-top: 0;
            margin-right: 0.25rem;
            margin-left: 0;
        }

        & .${customControl} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            padding-left: 0;
        }

        & .${customControlIndicator} {
            position: static;
            display: inline-block;
            margin-right: 0.25rem;
            vertical-align: text-bottom;
        }

        & .has-feedback .form-control-feedback {
            top: 0;
        }
    }
`;

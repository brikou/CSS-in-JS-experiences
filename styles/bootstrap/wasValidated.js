import { css } from "emotion";

import { customControlIndicator } from "./customControlIndicator";
import { customControlInput } from "./customControlInput";
import { customFileControl } from "./customFileControl";
import { customFileInput } from "./customFileInput";
import { customSelect } from "./customSelect";
import { formCheckInput } from "./formCheckInput";
import { formCheckLabel } from "./formCheckLabel";
import { formControl } from "./formControl";
import { invalidFeedback } from "./invalidFeedback";
import { invalidTooltip } from "./invalidTooltip";

export const wasValidated = css`
    & .${formControl}:valid, & .${customSelect}:valid {
        border-color: #28a745;
    }

    & .${formControl}:valid:focus, & .${customSelect}:valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &
        .${formControl}:valid
        ~ .${invalidFeedback},
        &
        .${formControl}:valid
        ~ .${invalidTooltip},
        &
        .${customSelect}:valid
        ~ .${invalidFeedback},
        &
        .${customSelect}:valid
        ~ .${invalidTooltip} {
        display: block;
    }

    & .${formCheckInput}:valid + .${formCheckLabel} {
        color: #28a745;
    }

    & .${customControlInput}:valid ~ .${customControlIndicator} {
        background-color: rgba(40, 167, 69, 0.25);
    }

    & .${customControlInput}:valid ~ .custom-control-description {
        color: #28a745;
    }

    & .${customFileInput}:valid ~ .${customFileControl} {
        border-color: #28a745;
    }

    & .${customFileInput}:valid ~ .${customFileControl}::before {
        border-color: inherit;
    }

    & .${customFileInput}:valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    & .${formControl}:invalid, & .${customSelect}:invalid {
        border-color: #dc3545;
    }

    & .${formControl}:invalid:focus, & .${customSelect}:invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    &
        .${formControl}:invalid
        ~ .${invalidFeedback},
        &
        .${formControl}:invalid
        ~ .${invalidTooltip},
        &
        .${customSelect}:invalid
        ~ .${invalidFeedback},
        &
        .${customSelect}:invalid
        ~ .${invalidTooltip} {
        display: block;
    }

    & .${formCheckInput}:invalid + .${formCheckLabel} {
        color: #dc3545;
    }

    & .${customControlInput}:invalid ~ .${customControlIndicator} {
        background-color: rgba(220, 53, 69, 0.25);
    }

    & .${customControlInput}:invalid ~ .custom-control-description {
        color: #dc3545;
    }

    & .${customFileInput}:invalid ~ .${customFileControl} {
        border-color: #dc3545;
    }

    & .${customFileInput}:invalid ~ .${customFileControl}::before {
        border-color: inherit;
    }

    & .${customFileInput}:invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
`;

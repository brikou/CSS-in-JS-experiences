import { css } from "emotion";
import { hydrate } from "emotion-server";
import Head from "next/head";

import "../styles/bootstrap/global";

import { active } from "../styles/bootstrap/active";
import { btn } from "../styles/bootstrap/btn";
import { btnGroup } from "../styles/bootstrap/btnGroup";
import { btnSecondary } from "../styles/bootstrap/btnSecondary";

if (typeof window !== "undefined") {
    hydrate(window.__NEXT_DATA__.ids);
}

export default () => (
    <div css={`padding: 2em;`}>
        <h1>Working example</h1>
        <div className={btnGroup} role="group">
            <button type="button" className={`${btn} ${btnSecondary}`}>
                Left
            </button>
            <button type="button" className={`${btn} ${btnSecondary} ${active}`}>
                Middle
            </button>
            <button type="button" className={`${btn} ${btnSecondary}`}>
                Right
            </button>
        </div>
        <hr />
        <h1>Not working (at all)</h1>
        <div css={btnGroup} role="group">
            <button type="button" css={`${btn}; ${btnSecondary}`}>
                Left
            </button>
            <button type="button" css={`${btn}; ${btnSecondary}; ${active}`}>
                Middle
            </button>
            <button type="button" css={`${btn}; ${btnSecondary}`}>
                Right
            </button>
        </div>
    </div>
);

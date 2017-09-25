import { btn } from "../styles/bootstrap/btn";
import { btnOutlineSuccess } from "../styles/bootstrap/btn/outline/success";
import { formControl } from "../styles/bootstrap/form/control";
import { formInline } from "../styles/bootstrap/form/inline";
import { mrSm2 } from "../styles/bootstrap/mr/sm/2";
import { my2 } from "../styles/bootstrap/my/2";
import { myLg0 } from "../styles/bootstrap/my/lg/0";
import { mySm0 } from "../styles/bootstrap/my/sm/0";

export const FormInline = () => (
    <form className={`${formInline} ${my2} ${myLg0}`}>
        <input
            className={`${formControl} ${mrSm2}`}
            type="text"
            placeholder="Search"
            aria-label="Search"
        />
        <button className={`${btn} ${btnOutlineSuccess} ${my2} ${mySm0}`} type="submit">
            Search
        </button>
    </form>
);

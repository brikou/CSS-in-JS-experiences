import { btn } from "../styles/bootstrap/btn";
import { btnOutlineSuccess } from "../styles/bootstrap/btnOutlineSuccess";
import { formControl } from "../styles/bootstrap/formControl";
import { formInline } from "../styles/bootstrap/formInline";
import { mrSm2 } from "../styles/bootstrap/mrSm2";
import { my2 } from "../styles/bootstrap/my2";
import { myLg0 } from "../styles/bootstrap/myLg0";
import { mySm0 } from "../styles/bootstrap/mySm0";

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

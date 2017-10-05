import {
    btn,
    btnOutlineSuccess,
    formControl,
    formInline,
    mrSm2,
    my2,
    myLg0,
    mySm0,
} from "../styles/bootstrap.js";

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

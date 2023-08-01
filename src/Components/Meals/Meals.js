import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailbleMeals";

const Meals = (props) => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals/>
        </Fragment>
    )
};

export default Meals;
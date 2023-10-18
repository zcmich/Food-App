import React, { useEffect, useState } from "react";

import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./Mealtem/MealItem";

const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {

            setIsLoading(true);
            const response = await fetch('https://react-http1-ea92c-default-rtdb.europe-west1.firebasedatabase.app//meals.json');
            if (!response.ok) {
                throw new Error("Cliff there was an error fetching availble meals")
            }
            const data = await response.json();
            console.log(data);

            const availableMeals = [];

            for (const key in data) {
                availableMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(availableMeals);
            setIsLoading(false);
        };

        fetchMeals().catch(error => {
            setIsLoading(false);
            setError(error.message);
        });

    }, [])

    let content = <p>Found no available meals.</p>;

    if (isLoading) {
        return <section className={classes.spinner}></section>;
    }

    if (meals.length > 0) {
        content = meals.map(meal =>
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />);
    }

    if (error) {
        content = <h2 className={classes.MealsError}>{error}</h2>
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {content}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;
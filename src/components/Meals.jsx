import { useEffect, useState } from 'react';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    fetchMeals();
  }, []);

  async function fetchMeals() {
    const response = await fetch('http://localhost:3000/meals');
    if (!response.ok) {
      throw new Error('Something went wrong!');
    } else {
      const meals = await response.json();
      setLoadedMeals(meals);
    }
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}

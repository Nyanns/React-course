/**
 * Generates a component that displays a list of random favorite foods.
 *
 * This function creates an array of food options, randomly selects three unique items
 * from the array, and renders them as a list of favorite foods.
 *
 * @returns {JSX.Element} A div containing h2 elements, each displaying a randomly selected food item.
 */
function FavoriteFood() {
  const foods = [`Pizza`, `Mie Ayam`, `Sate`, `Babi Guling`, `Soto Ayam`];
  const foodList = [];

  // Function to get a random food item
  const getRandomFood = () => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex];
  };

  // Loop to get 3 unique random food items
  while (foodList.length < 3) {
    const randomFood = getRandomFood();
    if (!foodList.includes(randomFood)) {
      foodList.push(randomFood);
    }
  }

  return (
    <div>
      {foodList.map((food, index) => (
        <h2 key={index}>
          My favorite food #{index + 1} is {food}
        </h2>
      ))}
    </div>
  );
}

export { FavoriteFood }; // Named export

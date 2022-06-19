function Destructuring() {
  const address = ["Manila", "Makati"];

  const [city1, city2, city3 = "Sairoden"] = address;
  console.log();

  const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
  const [coffee, , price] = item;

  return (
    <div>
      <h1>Destructuring Class</h1>
      <h2>
        A medium {coffee} costs {price}
      </h2>
    </div>
  );
}

export default Destructuring;

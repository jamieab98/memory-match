import { cardContent, shuffle } from "./cardContent";

function App() {
  const cards = shuffle(cardContent);

  return(
    <div>
      <div>
        {cards}
      </div>
    </div>
  );
}

export default App
🧠 Project: Memory Match — A Card Flipping Puzzle Game
🎮 Concept
Create a grid of face-down cards. Each turn, the player flips two cards. If they match, they stay revealed. If not, they flip back. The goal is to match all pairs in the fewest moves possible.

🔧 Core Features

- Card Grid: Render a grid of cards with hidden values (e.g., emojis, numbers, icons).
- Flip Logic: Clicking a card reveals its value. Track flipped cards using useState.
- Match Check: After two cards are flipped, check for a match. If matched, keep them revealed.
- Move Counter: Track how many turns the player has taken.
- Win Condition: Show a “You win!” message when all pairs are matched.

🧩 useState Challenges

- Manage multiple state variables:
- cards: array of card objects with value and flipped status
- flipped: array of currently flipped cards
- moves: number of turns taken
- matched: array of matched card indices or IDs
- Use setTimeout to delay flipping cards back if they don’t match
- Disable clicks while two cards are being compared

💡 Bonus Ideas

- Add a timer to track how fast the player finishes
- Let users choose difficulty (easy: 4 pairs, hard: 12 pairs)
- Add a “best score” tracker using localStorage
- Make it multiplayer: alternate turns and track each player’s score

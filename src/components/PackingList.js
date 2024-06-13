import { Item } from "./Item";
import { useState } from "react";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  // Sort according "Time" factor
  if (sortBy === "input") {
    sortedItems = items;
  }

  // Sorting alphabetically
  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  // Sort based on packed status
  // Unpacked items (packed=false) come before packed items (packed=true)
  if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name="action"
          id="action"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="description">Sort by Description</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}

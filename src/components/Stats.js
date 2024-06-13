export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>
          You haven't added any items yet! Start adding some items to your
          packing list 🚀
        </em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length; // returns array of items which have (packed = true) only
  const percentagePacked = Math.round((numPacked / numItems) * 100);
  console.log(numPacked);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go ✈️🌍"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}

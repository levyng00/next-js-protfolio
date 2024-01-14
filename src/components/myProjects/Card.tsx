import React, { useState } from "react";

const Card = () => {
  let lastCategory: null | "Vegetables  " | "Fruits" = null;
  const [checkbox, setCheckbox] = useState(false);
  const rows = [];
  const handleChage = () => {
    if (checkbox) {
      rows.fil;
    }
  };
  data.forEach((dat) => {
    if (dat.category !== lastCategory) {
      rows.push(
        <tr>
          <th colSpan={3}>{dat.category}</th>
        </tr>
      );
    }
    rows.push(
      <tr>
        <td>{dat.name}</td>
        <td>{dat.price}</td>
      </tr>
    );
    lastCategory = dat.category;
  });
  return (
    <div>
      <div>
        <input placeholder="Search..."></input>
        <input type="checkbox" value={checkbox} onChange={handleChage} />
        <label>Select only available</label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Card;

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

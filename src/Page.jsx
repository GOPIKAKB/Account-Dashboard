import React, { useState } from 'react';

const ItemList = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const handleItemToggle = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(items);
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleSelectAll} /> Select All
      </label>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleItemToggle(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

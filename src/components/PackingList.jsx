import { useState } from 'react';
import Item from './Item';

function PackingList({ items, onDeleteItems, onCheckItems, onClearItems }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy == 'input') sortedItems = items;

  if (sortBy == 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy == 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            onDeleteItems={onDeleteItems}
            onCheckItems={onCheckItems}
            {...item}
          />
        ))}
      </ul>
      <div className='action'>
        <select
          name=''
          id=''
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value='input'>Sort by Input Order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed Status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;

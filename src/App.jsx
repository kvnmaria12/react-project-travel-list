import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // wrong(we are mutating the original array)
    // breaks the concept of immutability
    // setItems((items) => items.push(item));
    /**
     *
     */
    // instead of mutating, we return an brand new array reference
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    const filteredItems = items.filter((item) => item.id != id);
    setItems(filteredItems);
  }

  function handleCheckedItems(id) {
    const checkedItems = items.map((item) =>
      item.id == id ? { ...item, packed: !item.packed } : item
    );

    setItems(checkedItems);
  }

  function handleClearItems() {
    if (items.length > 0) {
      const isConfirmed = window.confirm('Are you sure want to delete?');
      if (isConfirmed) setItems([]);
    }
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheckItems={handleCheckedItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

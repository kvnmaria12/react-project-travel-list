import { useState } from 'react';

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if description is empty
    if (!description) {
      setIsError(true);
      return;
    }
    // used (ES6) enhanced object literal on line 66
    const newItem = { quantity, description, packed: false, id: Date.now() };
    onAddItems(newItem);
    setIsError(false);
    setDescription('');
    setQuantity(1);
  };

  return (
    <>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need to your 😍 trip?</h3>
        <select
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
          name=''
          id=''
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type='text'
          placeholder='Item..'
        />
        <button>ADD</button>
      </form>
      {isError ? <h1 className='error-message'>Plese add an Item!</h1> : ''}
    </>
  );
}

export default Form;

function Item({
  id,
  packed,
  quantity,
  description,
  onDeleteItems,
  onCheckItems,
}) {
  return (
    <li>
      <input type='checkbox' value={packed} onChange={() => onCheckItems(id)} />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItems(id)}>❌</button>
    </li>
  );
}

export default Item;

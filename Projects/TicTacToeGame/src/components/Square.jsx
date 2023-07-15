const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className={`square ${value == 'X' ? 'text-orange' : 'text-green'} ${
        isWinningSquare ? 'winning' : ''
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

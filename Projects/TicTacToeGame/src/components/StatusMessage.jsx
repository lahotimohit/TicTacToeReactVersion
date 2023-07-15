const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(sqaureValue => sqaureValue !== null);
  const nextplayer = isXNext ? 'X' : 'O';
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          Winner is{' '}
          <span className={winner == 'X' ? 'text-orange' : 'text-green'}>
            {winner}
          </span>{' '}
        </div>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <div>
          Match is Tied between <span className="text-orange">X</span> and{' '}
          <span className="text-green">O</span>
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          Next player is{' '}
          <span className={isXNext ? 'text-orange' : 'text-green'}>
            {' '}
            {nextplayer}
          </span>
        </div>
      );
    }
    return null;
  };
  return <div className="status-message">{renderStatusMessage()}</div>;
};
export default StatusMessage;

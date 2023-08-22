import { usePhone } from '../../hooks/use.phone';
import { Key } from '../key/key';

export const Keyboard = () => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const { erase } = usePhone();

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number) => (
          <Key key={number}>{number}</Key>
        ))}
        <li>
          <button onClick={() => erase()} className="key big">
            Delete
          </button>
        </li>
      </ol>
    </div>
  );
};

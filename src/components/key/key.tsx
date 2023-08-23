import { usePhone } from '../../hooks/use.phone';

type Props = {
  n: string;
};
export function Key({ n }: Props) {
  const { add } = usePhone();

  return (
    <li>
      <button onClick={() => add(n)} className="key">
        {n}
      </button>
    </li>
  );
}

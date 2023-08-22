import { usePhone } from '../../hooks/use.phone';

type Props = {
  children: string;
};
export function Key({ children }: Props) {
  const { add } = usePhone();

  return (
    <li>
      <button onClick={() => add(children)} className="key">
        {children}
      </button>
    </li>
  );
}

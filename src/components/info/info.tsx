import { usePhone } from '../../hooks/use.phone';

export function Info() {
  const { phoneState } = usePhone();
  return <span className="message">{phoneState.info}</span>;
}

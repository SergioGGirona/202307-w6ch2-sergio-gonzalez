import { usePhone } from '../../hooks/use.phone';

export function Display() {
  const { phoneState } = usePhone();

  return <span className="number">{phoneState.phone}</span>;
  //   <!-- El botón de llamar debe tener la clase "activo" cuando -->
  //   <!-- el número de teléfono tiene 9 cifras -->
}

import { usePhone } from '../../hooks/use.phone';

export function Action() {
  const { hang, call } = usePhone();

  return (
    <>
      <a
        onClick={(event) => {
          call(event);
        }}
        href="#"
        className="call"
      >
        Call
      </a>

      <a onClick={hang} href="#" className="hang active">
        Hang
      </a>
    </>
  );
}
//  Sólo se tiene que ver un botón u otro

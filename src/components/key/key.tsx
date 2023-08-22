type Props = {
  children: string;
};
export function Key({ children }: Props) {
  return (
    <li>
      <button className="key">{children}</button>
    </li>
  );
}

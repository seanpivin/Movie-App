export function ErrorMsg({ message }) {
  return (
    <p className="error">
      {message}
      <span role="img">⛔🚫🚯🚷📵</span>
    </p>
  );
}

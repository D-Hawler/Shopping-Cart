function Button({ className, description, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {description}
    </button>
  );
}

export default Button;

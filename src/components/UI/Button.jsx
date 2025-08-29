export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? 'text-button' : 'button';
  cssClasses += ' ' + className;
  return (
    <button className={cssClasses} {...props} onClick={props.onClick}>
      {children}
    </button>
  );
}

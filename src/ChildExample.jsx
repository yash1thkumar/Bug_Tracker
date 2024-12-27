function ChildFunction({ children, onSelect }) {
  return (
    <div>
      <ul>
        <button className="btn btn-info m-2 d-flex" onClick={onSelect}>
          {children}
        </button>
      </ul>
    </div>
  );
}

export default ChildFunction;

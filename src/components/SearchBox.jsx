import React, { useRef } from "react";

function SearchBox({
  value,
  onChange,
  placeholder = "Szukaj w przepisach...",
}) {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const trimmed = (value || "").trim();
    if (trimmed) {
      onChange(trimmed);
    } else if (inputRef.current) {
      onChange(inputRef.current.value.trim());
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex w-full items-center p-6 max-w-160 mx-auto">
      <div className="relative flex w-full items-center">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full h-12 px-4 text-m bg-white rounded-3xl ring-1 ring-primary caret-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="button"
          aria-label="Szukaj"
          onClick={handleSubmit}
          className="absolute right-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBox;

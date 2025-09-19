import React from "react";

function SearchBox({
  value,
  onChange,
  placeholder = "Szukaj w przepisach...",
}) {
  return (
    <div className="flex m-2 w-sm md:w-lg lg:w-4xl pl-6 items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 w-full bg-white rounded-4xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <span className="material-symbols-outlined items-center relative right-9">
        search
      </span>
    </div>
  );
}

export default SearchBox;

import React from "react";

function SearchBox({
  value,
  onChange,
  placeholder = "Szukaj w przepisach...",
}) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-secondary rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

export default SearchBox;

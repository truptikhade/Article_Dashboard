import { useState } from "react";

const FilterGroup = ({ label, values, selected, onChange }) => {
  const [open, setOpen] = useState(true);
  const toggle = (v) => {
    if (selected.includes(v)) {
      onChange(selected.filter(i => i !== v));
    } else {
      onChange([...selected, v]);
    }
  };
  return (
    <div className="filter-group">
      <div className="filter-header" onClick={() => setOpen(!open)}>
        {label}
        <span>{open ? "-" : "+"}</span>
      </div>

      {open && (
        <div className="filter-values">
          {values.map(v => (
            <label key={v}>
              <input type="checkbox" checked={selected.includes(v)} onChange={() => toggle(v)}/>
              {v}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGroup;
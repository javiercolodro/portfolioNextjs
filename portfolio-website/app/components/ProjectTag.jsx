import React from "react";

const ProjectTag = ({ name, onClick, isSelected, count }) => {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={() => onClick(name)}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
        isSelected
          ? "border-accent bg-accent/15 text-white"
          : "border-hairline text-muted hover:border-muted hover:text-white"
      }`}
    >
      {name}
      {typeof count === "number" && (
        <span
          className={`font-mono text-xs ${
            isSelected ? "text-accent-soft" : "text-slate-500"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default ProjectTag;

"use client";

interface FilterButton {
  label: string;
  value: string;
}

interface FilterButtonsProps {
  filters: FilterButton[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterButtons({
  filters,
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="flex gap-6 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`text-sm uppercase tracking-wider transition-opacity ${
            activeFilter === filter.value
              ? "opacity-100"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

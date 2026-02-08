"use client";

import { useState } from "react";
import { books } from "@/data/books";
import { movies } from "@/data/movies";
import { songs } from "@/data/songs";
import ItemCard from "@/components/ItemCard";
import FilterButtons from "@/components/FilterButtons";

type FilterType = "all" | "books" | "films" | "songs";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Books", value: "books" },
  { label: "Films", value: "films" },
  { label: "Songs", value: "songs" },
];

export default function ShelfPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const getItems = () => {
    const allItems = [
      ...books.map((book) => ({
        id: book.id,
        title: book.title,
        subtitle: book.author,
        type: "books" as const,
        aspectRatio: "portrait" as const,
      })),
      ...movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        subtitle: `${movie.year}`,
        type: "films" as const,
        aspectRatio: "portrait" as const,
      })),
      ...songs.map((song) => ({
        id: song.id,
        title: song.title,
        subtitle: song.artist,
        type: "songs" as const,
        aspectRatio: "square" as const,
      })),
    ];

    if (filter === "all") return allItems;
    return allItems.filter((item) => item.type === filter);
  };

  const items = getItems();

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <h1 className="text-4xl font-light mb-12">Shelf</h1>

      <FilterButtons
        filters={FILTERS}
        activeFilter={filter}
        onFilterChange={(f) => setFilter(f as FilterType)}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

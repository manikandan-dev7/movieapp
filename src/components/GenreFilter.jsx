import React from "react";

const GenreFilter = ({ genreList, setSelectedGenre }) => {
  return (
    <div className="inline-flex items-center gap-2 md:gap-3 bg-slate-900/70 px-3 md:px-4 py-2 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md">
      <span className="text-xs md:text-sm font-medium text-gray-200/90 tracking-wide">
        Filter by genre
      </span>

      <select
        className="px-3 py-1.5 md:py-2 rounded-xl bg-slate-950/80 text-xs md:text-sm text-gray-100 border border-white/15 outline-none focus:ring-2 focus:ring-pink-500/60 focus:border-pink-400/70 cursor-pointer"
        onChange={(e) => setSelectedGenre(e.target.value)}
        defaultValue=""
      >
        <option value="">All Genres</option>
        {genreList?.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;

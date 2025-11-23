import React, { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import { WatchListContext } from "../context/WatchListContext";
import MovieCard from "../components/MovieCard";

const WatchList = () => {
  const { watchlist, genreList } = useContext(WatchListContext);

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = watchlist
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((movie) => {
      return (
        !selectedGenre || movie.genre_ids?.includes(Number(selectedGenre))
      );
    });

  return (
    <div className="min-h-screen bg-blue-950 text-white pt-24 pb-10 px-4 md:px-8">
      {/* Header */}
      <header className="flex flex-col gap-2 mb-6 md:mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-red-600 drop-shadow-[0_0_18px_rgba(236,72,153,0.4)] hover:cursor-pointer">
          Watchlist
        </h1>
        <p className="text-sm md:text-base text-gray-300/80">
          You have{" "}
          <span className="font-semibold text-pink-400">
            {watchlist.length}
          </span>{" "}
          {watchlist.length === 1 ? "movie" : "movies"} saved.
        </p>
      </header>

      {/* Search + Genre Filter Row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
        {/* Search */}
        <div className="w-full md:max-w-md">
          <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2.5 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md">
            <span className="text-gray-400 text-sm whitespace-nowrap">
              Search
            </span>
            <input
              type="text"
              placeholder="Search in your watchlist..."
              className="flex-1 bg-transparent outline-none text-sm md:text-base text-gray-100 placeholder:text-gray-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-xs md:text-sm text-gray-300 hover:text-pink-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Genre Filter */}
        <div className="flex justify-start md:justify-end">
          <GenreFilter
            genreList={genreList}
            setSelectedGenre={setSelectedGenre}
          />
        </div>
      </div>

      {/* Movies Grid */}
      <div className="movies-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 text-sm md:text-base mt-6">
            {watchlist.length === 0
              ? "Your watchlist is empty. Add movies from the home page to see them here."
              : "No movies match your search or selected genre."}
          </p>
        )}
      </div>
    </div>
  );
};

export default WatchList;

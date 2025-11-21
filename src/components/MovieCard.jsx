import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../context/WatchListContext";

const MovieCard = ({ movie }) => {
  const { toggleWatchlist, watchlist } = useContext(WatchListContext);

  const inWatchList = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="relative group rounded-2xl p-3 shadow-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] bg-dark-card">
      
      {/* Poster */}
      <div className="relative overflow-hidden rounded-xl aspect-[2/3] mb-3">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
        />

        {/* Release year badge */}
        {movie.release_date && (
          <div className="absolute left-3 top-3 px-2.5 py-1 rounded-full text-[11px] font-semibold badge-bg">
            {new Date(movie.release_date).getFullYear()}
          </div>
        )}

        {/* Watchlist Heart */}
        <button
          className="absolute right-3 top-3 flex items-center justify-center w-9 h-9 rounded-full heart-btn transition-all duration-200"
          onClick={() => toggleWatchlist(movie)}
        >
          {inWatchList ? (
            <FaHeart className="text-pink-500 heart-glow" />
          ) : (
            <FaRegHeart className="text-gray-200 group-hover:text-pink-300" />
          )}
        </button>

        {/* Gradient overlay at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 gradient-to-top" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base md:text-lg font-semibold line-clamp-2 text-white">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between text-xs md:text-sm text-gray-300/90">
          <span className="truncate">
            {movie.release_date || "Release date TBA"}
          </span>
          {movie.vote_average ? (
            <span className="px-2 py-0.5 rounded-full text-[11px] rating-badge">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
          ) : null}
        </div>

        {movie.overview && (
          <p className="mt-1 text-xs text-gray-300/80 line-clamp-3">
            {movie.overview}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;

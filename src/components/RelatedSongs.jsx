import { data } from "autoprefixer";
import SongBar from "./SongBar";

const RelatedSongs = ({ data,  isPlaying, artistId,  activeSong, handlePauseClick, handlePlayClick}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">
      Related Songs:
    </h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
        key={`${song.key}-${artistId}`}
        i={i}
        song={song}
        artistId = {artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePlayClick={handlePlayClick}
        handlePauseClick={handlePauseClick} />
      ))}
    </div>
  </div>
);

export default RelatedSongs;

import Image from "next/image";

interface Track {
  position: number;
  name: string;
  artist: string;
  artwork: string;
}

const tracks: Track[] = [
  {
    position: 1,
    name: "Let It Happen",
    artist: "Tame Impala",
    artwork: "/currents.png",
  },
  {
    position: 2,
    name: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    artwork: "/am.png",
  },
  {
    position: 3,
    name: "Heat Waves",
    artist: "Glass Animals",
    artwork: "/dreamland.png",
  },
  {
    position: 4,
    name: "Let It Happen",
    artist: "Tame Impala",
    artwork: "/currents.png",
  },
  {
    position: 5,
    name: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    artwork: "/am.png",
  },
  {
    position: 6,
    name: "Heat Waves",
    artist: "Glass Animals",
    artwork: "/dreamland.png",
  },
  {
    position: 7,
    name: "Let It Happen",
    artist: "Tame Impala",
    artwork: "/currents.png",
  },
  {
    position: 8,
    name: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    artwork: "/am.png",
  },
  {
    position: 9,
    name: "Heat Waves",
    artist: "Glass Animals",
    artwork: "/dreamland.png",
  },
  {
    position: 10,
    name: "Heat Waves",
    artist: "Glass Animals",
    artwork: "/dreamland.png",
  },
];

export default function Music() {
  return (
    <div className="max-w-4xl mx-5 md:mx-auto">
      <h1 className="text-xl font-bold mb-6">My top 10 tracks</h1>
      <div className="grid grid-cols-3 gap-5">
        {tracks.map((track) => (
          <MusicCard key={track.position} track={track} />
        ))}
      </div>
    </div>
  );
}

function MusicCard({ track }: { track: Track }) {
  return (
    <div className="w-full h-96 relative rounded-xl overflow-clip">
      <Image src={track.artwork} alt="Artwork" fill={true} objectFit="cover" />
      <div className="absolute w-full h-full bg-gradient-to-b from-black/10 via-black/60 to-black/80"></div>
      <div
        className={`w-full h-full flex flex-col justify-between px-4 py-6 relative`}
      >
        <div className="flex justify-between">
          <span></span>
          <span className="text-6xl font-bold bg-[linear-gradient(45deg,#956732_0,#d69443_35%,#f2b96e_50%,#fcdd84_60%,#f2b96e_70%,#d69443_85%,#956732_100%,#ca9044_100%,#f2b963_100%)] bg-clip-text text-transparent">
            {track.position}
          </span>
        </div>
        <div>
          <div className="text-xl font-semibold text-white">{track.name}</div>
          <div>{track.artist}</div>
        </div>
      </div>
    </div>
  );
}

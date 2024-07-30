import Link from 'next/link';
import Image from 'next/image';
import anIcon from '/public/png/icon-an.png'; 
import mhIcon from '/public/png/icon-mh.png'; 
import bgIcon from '/public/png/icon-bg.png'; 
import frontCounter from '/public/png/lstc-counter.png'; 
import backWall from '/public/png/lstc-bg-wall.png'; 


export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-between h-screen max-w-[1000px] mx-auto overflow-hidden relative bg-stone-800">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to NFT Canvas Generators</h1>
        <div className="flex flex-row">
          <Link href="/celebrator">
            <Image src={anIcon} alt="Hand Drawn Art" className="w-20 mx-2" />
          </Link>
          <Link href="/malibu-high">
            <Image src={mhIcon} alt="Hand Drawn Art" className="w-20 mx-2" />
          </Link>
          <Link href="/phone-wallpaper">
            <Image src={bgIcon} alt="Hand Drawn Art" className="w-20 mx-2" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 z-10">
        <img src="/png/lstc-counter.png" alt="Hand Drawn Art" className="object-cover" />
      </div>
      
    </div>
    </>
  );
}

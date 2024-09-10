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
    <div className="flex flex-col items-center justify-between h-screen max-w-[1000px] mx-auto overflow-hidden relative">
      <div className="text-center p-4 z-20">
      <img src="/png/banner_lstc.png" className="mb-8 max-w-72 mx-auto" />
        <div className="flex flex-row justify-center text-lg space-x-2">

          <div className="flex-col">
            <Image src={anIcon} alt="Hand Drawn Art" className="w-20 mx-2 opacity-50" />
            ????
          </div>
          <div className="flex-col">
            <Link href="/malibu-high">
              <Image src={mhIcon} alt="Hand Drawn Art" className="w-20 mx-2" />
            </Link>
            Malibu High
          </div>
          <div className="flex-col">
            <Link href="/phone-wallpaper">
              <Image src={bgIcon} alt="Hand Drawn Art" className="w-20 mx-2" />
            </Link>
            Phone Wallpaper
          </div>
          
            
          
          
          
        </div>
      </div>
      <div className="fixed bottom-0 z-10">
        <img src="/png/lstc-counter.png" alt="Hand Drawn Art" className="object-cover" />
      </div>
      
    </div>
    </>
  );
}

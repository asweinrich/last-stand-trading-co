
'use client' 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


const MalibuHigh = () => {
  const [nftID, setNftID] = useState('');
  const [nftAlias, setNftAlias] = useState('');
  const [nftImg, setNftImg] = useState('/media/malibu-high/exampleWO.png');
  const [attributes, setAttributes] = useState([]);
  const [error, setError] = useState('');
  

  useEffect(() => {

    const canvas = document.getElementById('canvas-preview') as HTMLCanvasElement | null;
    const canvasFull = document.getElementById('canvas-full') as HTMLCanvasElement | null;

    if (canvas && canvasFull) {
      const ctx = canvas.getContext('2d');
      const ctxFull = canvasFull.getContext('2d');

      if (ctx && ctxFull) {
    
    
        canvasFull.width = 2388
        canvasFull.height = 1522

        canvas.width = 320
        canvas.height = 204

        const overlay = new Image()
        overlay.src = '/media/malibu-high/malibu-high-id.svg'

        const wildOneImg = new Image()
        wildOneImg.crossOrigin = 'anonymous'
        wildOneImg.src = nftImg 
        wildOneImg.onload = () => {
          ctx.drawImage(wildOneImg, (0.02*canvas.width), (0.0267*canvas.width), (0.367*canvas.width), (0.367*canvas.width))
          //make a ratio of screen width 
          ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height)
          //make a ratio of screen width 
          canvas.style.letterSpacing = '0.5px';
          ctx.font = "22px SteezBold";
          ctx.textAlign = "center";
          ctx.fillStyle = '#000';
          const paddedId = nftID.toString().padStart(4, '0')
          ctx.fillText('ID#: '+paddedId, (0.2067*canvas.width), (0.838*canvas.height))
          //make a ratio of screen width 
          ctx.font = "17px SteezBold";
          ctx.fillText(nftAlias, (0.64*canvas.width), (0.94*canvas.height))

          ctxFull.drawImage(wildOneImg, 48, 64, 876, 876)
          ctxFull.drawImage(overlay, 0, 0, 2388, 1522)
          canvasFull.style.letterSpacing = '0.5px'
          ctxFull.font = "175px SteezBold";
          ctxFull.textAlign = "center";
          ctxFull.fillStyle = '#000'
          ctxFull.fillText('ID#: '+paddedId, 494, 1274)
          ctxFull.font = "134px SteezBold";
          ctxFull.textAlign = "center";
          ctxFull.fillStyle = '#000'
          ctxFull.fillText(nftAlias, 1528, 1416)
        }
      }
    }
  }, [nftImg]);


  const handleFetchAttributes = async () => {

    const contractAddress = '0xe9A1a323b4c8FD5Ce6842edaa0cd8af943cBdf22';
    const apiUrl = `https://api.opensea.io/api/v2/chain/ethereum/contract/${contractAddress}/nfts/${nftID}`;

    try {
      const response = await axios.get(apiUrl, {
        params: {

        }, 
        headers: {
          'Accept': 'application/json',
          'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY
        }
      });
      if (response.status === 200) {
        console.log(response.data)
        setAttributes(response.data.nft.traits);
        setNftImg(response.data.nft.display_image_url)
        setError('');
      } else {
        setError('Failed to fetch data');
        setAttributes([]);
      }
    } catch (err) {
      setError('Failed to fetch data');
      setAttributes([]);
    }
  };

  const handleChangeId = (e: any) => {
    setNftID(e.target.value);
  };

  const handleChangeAlias = (e: any) => {
    setNftAlias(e.target.value);
  };

  function saveImage() {
      const canvas = document.getElementById('canvas-full') as HTMLCanvasElement | null;
      const image = canvas!.toDataURL("image/jpg")
      const win = window.open()
      win!.document.write('<img src="'+image+'" height="1522" width="2388" />')
  }

  function BackArrow() {
    return(
      <Link href="/" className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
        </svg>
        &nbsp; back
      </Link>
    )
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <BackArrow />
      <h1 className="text-4xl font-bold text-center mb-6">Malibu High ID Generator</h1>
      
      <canvas id="canvas-preview" className="mx-auto my-4"></canvas>
      <p className="text-xl leading-none text-center my-4">Enter your Wild One ID and alias, then hit GENERATE to get your school ID card</p>
      <div className="space-y-3">
        <input
          type="number"
          value={nftID}
          onChange={handleChangeId}
          placeholder="Enter Wild One ID"
          className="border rounded px-2 py-1 w-full text-black text-2xl"
        />
        <input
          type="text"
          value={nftAlias}
          onChange={handleChangeAlias}
          placeholder="Alias"
          className="border rounded px-2 py-1 w-full text-black text-2xl"
        />
        <button
          onClick={handleFetchAttributes}
          className="w-full font-bold bg-red-700 text-white px-4 py-2 rounded text-3xl"
        >
          Generate
        </button>
        {error && <p className="text-red-500">{error}</p>}

        <p className="text-xl leading-none text-center my-4">When your ID is ready, hit EXPORT to save it in high resolution</p>

        <button className="w-full font-bold bg-red-700 text-white px-4 py-2 rounded text-3xl" onClick={() => saveImage()}>Export</button>

      </div>



      <div className="hidden flex-column align-items-center">
        <canvas id="canvas-full" className="canvas-full-1 mx-auto mb-4" width="2388" height="1522"></canvas>
      </div>


    </div>


  );

};

export default MalibuHigh;

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const overlayDriveIn = '/media/phone-wallpaper/drive-in.png';
const overlayWanted = '/media/phone-wallpaper/wanted.png';
const overlayWhite = '/media/phone-wallpaper/bg-white.png';
const overlayOneOfOne = '/media/phone-wallpaper/one-of-one.png';
const overlayScribb = '/media/phone-wallpaper/scribble.png';
const overlayScribbPreview = '/media/phone-wallpaper/scribblePreview.png';
const overlayDriveInPreview = '/media/phone-wallpaper/drive-inPreview.png';
const overlayWhitePreview = '/media/phone-wallpaper/bg-whitePreview.png';
const overlayOneOfOnePreview = '/media/phone-wallpaper/one-of-onePreview.png';
const overlayWantedPreview = '/media/phone-wallpaper/wantedPreview.png';





const PhoneWallpaper = () => {
  const wildBunchAddress = '0xe9A1a323b4c8FD5Ce6842edaa0cd8af943cBdf22';


  const [wildOne, setWildOne] = useState([
    1,
    '/media/phone-wallpaper/exampleWO.png',
    overlayWhite,
    null,
    overlayWhitePreview,
    null,
  ]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

    const canvas = document.getElementById('canvas-preview') as HTMLCanvasElement | null;
    const canvasFull = document.getElementById('canvas-full') as HTMLCanvasElement | null;

    const sizeRatio = 1

    if (canvas && canvasFull) {
      const ctx = canvas.getContext('2d');
      const ctxFull = canvasFull.getContext('2d');

      if (ctx && ctxFull) {
        const loadResourcesAndDraw = async () => {
          canvasFull.width = 1125;
          canvasFull.height = 2436;
          canvas.width = 313*sizeRatio;
          canvas.height = 677*sizeRatio;

          const overlay = new Image();
          const overlayP = new Image();

          // Ensure wildOne[2] and wildOne[4] are not null
          if (wildOne[2]) {
            overlay.src = wildOne[2] as string;
          } else {
            console.error('Overlay source is null');
            return;
          }

          if (wildOne[4]) {
            overlayP.src = wildOne[4] as string;
          } else {
            console.error('Overlay preview source is null');
            return;
          }

          const baseImg = new Image();
          baseImg.crossOrigin = 'Anonymous';
          baseImg.src = wildOne[1] as string;

          await Promise.all([
            new Promise<void>((resolve) => (overlay.onload = () => resolve())),
            new Promise<void>((resolve) => (overlayP.onload = () => resolve())),
            new Promise<void>((resolve) => (baseImg.onload = () => resolve())),
            document.fonts.ready, // Wait for all fonts to be loaded
          ]);

          let driveInTextColor = '#222222';

           if (wildOne[5] && wildOne[2] === overlayDriveIn) {
            if (typeof wildOne[5] === 'object' && wildOne[5] !== null && 'traits' in wildOne[5]) {
              const traits = (wildOne[5] as { traits: { trait_type: string; value: string }[] }).traits;

              for (let i = 0; i < traits.length; i++) {
                if (traits[i].trait_type === 'Background Color') {
                  const bgColor = traits[i].value;
                  if (bgColor === 'Drive-In 4' || bgColor === 'Drive-In 10') {
                    driveInTextColor = '#dfdbd5';
                  }
                }
              }
            } else {
              console.error('wildOne[5] is not an object or does not have traits');
            }
          }

          // Clear the canvas before drawing
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctxFull.clearRect(0, 0, canvasFull.width, canvasFull.height);
  
          // Draw based on the selected overlay
          if (wildOne[2] === overlayDriveIn) {
            ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(baseImg, 20*sizeRatio, 203*sizeRatio, 270*sizeRatio, 270*sizeRatio);
            ctx.rotate((-5 * Math.PI) / 180);
            canvas.style.letterSpacing = '0.5px';
            ctx.font = 'bold '+ 6*sizeRatio + 'px PlatNomor';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#222222';
            const paddedId = wildOne[0]!.toString().padStart(4, '0');
            ctx.fillText('WO ' + paddedId, 55*sizeRatio, 638*sizeRatio);

            ctx.rotate((5 * Math.PI) / 180);

            canvas.style.letterSpacing = '1px';
            ctx.font = 36*sizeRatio +'px DueCredit';
            ctx.textAlign = 'center';
            ctx.fillStyle = driveInTextColor;
            ctx.fillText('STARRING WILD ONE ' + wildOne[0]!, 156*sizeRatio, 455*sizeRatio);

            ctxFull.drawImage(overlay, 0, 0, canvasFull.width, canvasFull.height);
            ctxFull.drawImage(baseImg, 75, 730, 970, 970);
            ctxFull.rotate((-5.5 * Math.PI) / 180);
            canvasFull.style.letterSpacing = '0.5px';
            ctxFull.font = 'bold 22px PlatNomor';
            ctxFull.textAlign = 'center';
            ctxFull.fillStyle = '#222222';
            ctxFull.fillText('WO ' + paddedId, 180, 2294);

            ctxFull.rotate((5 * Math.PI) / 180);

            canvasFull.style.letterSpacing = '1px';
            ctxFull.font = '126px DueCredit';
            ctxFull.textAlign = 'center';
            ctxFull.fillStyle = driveInTextColor;
            ctxFull.fillText('STARRING WILD ONE ' + wildOne[0]!, 560, 1645);
          } else if (wildOne[2] === overlayScribb) {
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, 313*sizeRatio, 677*sizeRatio);
            ctx.rotate((-5 * Math.PI) / 180);
            ctx.drawImage(baseImg, -2, 220*sizeRatio, 280*sizeRatio, 280*sizeRatio);
            ctx.rotate((5 * Math.PI) / 180);
            ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
            canvas.style.letterSpacing = '0.5px';
            ctx.font = 20*sizeRatio + 'px SteezBold';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#222222';
            ctx.rotate((-6 * Math.PI) / 180);
            ctx.fillText('"Wild One #' + wildOne[0]! + '"', 135*sizeRatio, 250*sizeRatio);

            ctxFull.fillStyle = 'red';
            ctxFull.fillRect(0, 0, 1125, 2436);
            ctxFull.rotate((-5 * Math.PI) / 180);
            ctxFull.drawImage(baseImg, 15, 795, 950, 950);
            ctxFull.rotate((5 * Math.PI) / 180);
            ctxFull.drawImage(overlay, 0, 0, canvasFull.width, canvasFull.height);
            canvasFull.style.letterSpacing = '0.5px';
            ctxFull.font = '68px SteezBold';
            ctxFull.textAlign = 'center';
            ctxFull.fillStyle = '#222222';
            ctxFull.rotate((-6.5 * Math.PI) / 180);
            ctxFull.fillText('"Wild One #' + wildOne[0]! + '"', 450, 898);
          } else if (wildOne[2] === overlayOneOfOne) {
            ctx.drawImage(baseImg, 92*sizeRatio, 273*sizeRatio, 130*sizeRatio, 130*sizeRatio);
            ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
            canvas.style.letterSpacing = '0.5px';
            ctx.font = 'bold '+ 7*sizeRatio + 'px Calibri';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#000';
            ctx.fillText(wildOne[3] !== null ? String(wildOne[3]) : '', 157 * sizeRatio, 488 * sizeRatio);
            ctx.font = 8*sizeRatio + 'px Calibri';
            ctx.fillText('WO ' + wildOne[0]!, 157*sizeRatio, 499*sizeRatio);

            ctxFull.drawImage(baseImg, 330, 980, 466, 466);
            ctxFull.drawImage(overlay, 0, 0, canvasFull.width, canvasFull.height);
            canvasFull.style.letterSpacing = '0.5px';
            ctxFull.font = 'bold 28px Calibri';
            ctxFull.textAlign = 'center';
            ctxFull.fillStyle = '#222222';
            ctxFull.fillText('' + wildOne[3]!, 563, 1755);
            ctxFull.font = '30px Calibri';
            ctxFull.fillText(String(wildOne[0]), 563, 1797);
          } else if (wildOne[2] === overlayWanted) {
            ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(baseImg, 68*sizeRatio, 233*sizeRatio, 148*sizeRatio, 148*sizeRatio);
            canvas.style.letterSpacing = '0.5px';
            ctx.font = 18*sizeRatio + 'px EuroWestern';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#222222';
            ctx.fillText('$' + wildOne[0]!, 140*sizeRatio, 426*sizeRatio);

            ctxFull.drawImage(overlay, 0, 0, canvasFull.width, canvasFull.height);
            ctxFull.drawImage(baseImg, 250, 845, 520, 520);
            canvasFull.style.letterSpacing = '0.75px';
            ctxFull.font = '94px EuroWestern';
            ctxFull.textAlign = 'center';
            ctxFull.fillStyle = '#222222';
            ctxFull.fillText('$' + wildOne[0]!, 505, 1535);
          } else if (wildOne[2]! === overlayWhite) {
            ctx.rotate((11 * Math.PI) / 180);
            ctx.drawImage(baseImg, 194*sizeRatio, 382*sizeRatio, 181*sizeRatio, 181*sizeRatio);
            ctx.rotate((-11 * Math.PI) / 180);
            ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
            canvas.style.letterSpacing = '0.5px';
            ctx.font = 13*sizeRatio + 'px SteezBold';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#222222';
            const paddedId = wildOne[0]!.toString().padStart(4, '0');
            ctx.rotate((6 * Math.PI) / 180);
            ctx.fillText('WO-' + paddedId, 227*sizeRatio, 419*sizeRatio);

            ctxFull.rotate((11 * Math.PI) / 180);
            ctxFull.drawImage(baseImg, 697, 1372, 650, 650);
            ctxFull.rotate((-11 * Math.PI) / 180);
            ctxFull.drawImage(overlay, 0, 0, canvasFull.width, canvasFull.height);
            canvasFull.style.letterSpacing = '0.5px';
            ctxFull.font = '42px SteezBold';
            ctxFull.textAlign = 'center';
            ctxFull.fillStyle = '#222222';
            ctxFull.rotate((6 * Math.PI) / 180);
            ctxFull.fillText('WO-' + paddedId, 790, 1508);
          }
        };

        loadResourcesAndDraw();
      }
    }  
  }, [wildOne]);

  const setWildOneData = async (event: React.FormEvent) => {
    event.preventDefault();

    const holder = document.getElementById('wildOneId') as HTMLInputElement;
    const tempId = Number(holder.value);

    if (tempId > 4000 || tempId < 1) {
      setErrorMessage('Invalid ID');
    } else {
      setErrorMessage('');


      const baseURL =
        `https://api.opensea.io/v2/chain/ethereum/contract/${wildBunchAddress}/nfts/${tempId}`;
      const apiKey = process.env.NEXT_PUBLIC_OPENSEA_API_KEY;

      if (!apiKey) {
        throw new Error('API key is missing');
      }

      try {
        const response = await fetch(baseURL, {
          method: 'GET',
          headers: {
            'X-API-KEY': apiKey,
            accept: 'application/json',
          },
        });
        const data = await response.json();
        const newMetadata = data.nft;
        let overlaySource = overlayDriveIn;
        let overlaySourceP = overlayDriveInPreview;
        let tempName = null;

        for (let i = 0; i < newMetadata.traits.length; i++) {
          if (newMetadata.traits[i].trait_type === 'Name') {
            overlaySource = overlayOneOfOne;
            overlaySourceP = overlayOneOfOnePreview;
            tempName = newMetadata.traits[i].value;
          } else if (newMetadata.traits[i].trait_type === 'Background') {
            const bg = newMetadata.traits[i].value;
            if (bg === 'Drive-In') {
              overlaySource = overlayDriveIn;
              overlaySourceP = overlayDriveInPreview;
            } else if (bg === 'Wanted') {
              overlaySource = overlayWanted;
              overlaySourceP = overlayWantedPreview;
            } else if (bg === 'Scribble') {
              overlaySource = overlayScribb;
              overlaySourceP = overlayScribbPreview;
            } else {
              overlaySource = overlayWhite;
              overlaySourceP = overlayWhitePreview;
            }
          }
        }

        const baseImgUrl = new URL(newMetadata.display_image_url);
        baseImgUrl.search = 'w=1000&auto=format';
        setWildOne([tempId, baseImgUrl.toString(), overlaySource, tempName, overlaySourceP, newMetadata]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };



  function saveImage() {
    const canvas = document.getElementById('canvas-full') as HTMLCanvasElement;
    if (!canvas) return;

    const image = canvas.toDataURL('image/jpg');
    const win = window.open();
    if (win) {
      win.document.write('<img src="' + image + '" height="2436" width="1125" />');
    }
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
      <div className="border-b-2 mt-4 mb-6 py-6">
        <h1 className="text-4xl font-bold text-center mb-2">Phone Wallpapers</h1>
        <p className="text-xl leading-none text-center">
          Enter your Wild One ID, then hit GENERATE to get a custom phone wallpaper
        </p>
      </div>
   
      <form onSubmit={setWildOneData}>
        
        <div className="space-y-3">
          <input
            className="border rounded px-2 py-1 w-full text-black text-2xl"
            placeholder="Enter Wild One ID"
            type="number"
            id="wildOneId"
            min="1"
            max="4000"
            step="1"
            required
          />
          <button
            className="w-full font-bold bg-red-700 text-white px-4 py-1 rounded text-3xl"
            type="submit"
          >
            Generate
          </button>

          <span className="text-red-800 my-2 error-message">{errorMessage}</span>

          <p className="text-xl leading-none text-center my-4">When your wallpaper is ready, hit EXPORT to save it in high resolution</p>

          <button
            className="w-full font-bold bg-red-700 text-white px-4 py-1 rounded text-3xl"
            type="button"
            onClick={() => saveImage()}
          >
            Export
          </button>
        </div>
      
      </form>

      <canvas id="canvas-preview" className="mx-auto my-4"></canvas>

      <div className="hidden flex-column align-items-center">
        <canvas
          id="canvas-full"
          className="canvas-full-1 mx-auto mb-4"
          width="1125"
          height="2436"
        ></canvas>
      </div>
    </div>
  );
};

export default PhoneWallpaper;

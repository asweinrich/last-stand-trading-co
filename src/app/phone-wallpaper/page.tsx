'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneWallpaper = () => {
  const wildBunchAddress = '0xe9A1a323b4c8FD5Ce6842edaa0cd8af943cBdf22';

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

  const [wildOne, setWildOne] = useState([
    1,
    '/media/phone-wallpaper/exampleWO.png',
    '/media/phone-wallpaper/bg-white.png',
    null,
    '/media/phone-wallpaper/bg-whitePreview.png',
    null,
  ]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    draw();
  }, [wildOne]);

  let driveInTextColor = '#222222';

  if (wildOne[5] && wildOne[2] === overlayDriveIn) {
    const traits = wildOne[5].traits;

    for (let i = 0; i < traits.length; i++) {
      if (traits[i].trait_type === 'Background Color') {
        const bgColor = traits[i].value;
        if (bgColor === 'Drive-In 4' || bgColor === 'Drive-In 10') {
          driveInTextColor = '#dfdbd5';
        }
      }
    }
  }

  function draw() {
    const canvas = document.getElementById('canvas-preview') as HTMLCanvasElement | null;
    const canvasFull = document.getElementById('canvas-full') as HTMLCanvasElement | null;

    if (!canvas || !canvasFull) {
      return;
    }

    const ctx = canvas.getContext('2d');
    const ctxFull = canvasFull.getContext('2d');

    if (!ctx || !ctxFull) {
      return;
    }

    canvasFull.width = 1125;
    canvasFull.height = 2436;
    canvas.width = 313;
    canvas.height = 677;

    const overlay = new Image();
    overlay.src = wildOne[2];

    const overlayP = new Image();
    overlayP.src = wildOne[4];

    const baseImg = new Image();
    baseImg.crossOrigin = 'Anonymous';
    baseImg.src = wildOne[1];
    baseImg.onload = () => {
      if (wildOne[2] === overlayDriveIn) {
        ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImg, 20, 203, 270, 270);
        ctx.rotate((-5 * Math.PI) / 180);
        canvas.style.letterSpacing = '0.5px';
        ctx.font = 'bold 6px PlatNomor';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#222222';
        const paddedId = wildOne[0].toString().padStart(4, '0');
        ctx.fillText('WO ' + paddedId, 55, 638);

        ctx.rotate((5 * Math.PI) / 180);

        canvas.style.letterSpacing = '1px';
        ctx.font = '36px DueCredit';
        ctx.textAlign = 'center';
        ctx.fillStyle = driveInTextColor;
        ctx.fillText('STARRING WILD ONE ' + wildOne[0], 156, 455);

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
        ctxFull.fillText('STARRING WILD ONE ' + wildOne[0], 560, 1645);
      } else if (wildOne[2] === overlayScribb) {
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 313, 677);
        ctx.rotate((-5 * Math.PI) / 180);
        ctx.drawImage(baseImg, -2, 220, 280, 280);
        ctx.rotate((5 * Math.PI) / 180);
        ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
        canvas.style.letterSpacing = '0.5px';
        ctx.font = '20px SteezBold';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#222222';
        ctx.rotate((-6 * Math.PI) / 180);
        ctx.fillText('"Wild One #' + wildOne[0] + '"', 135, 250);

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
        ctxFull.fillText('"Wild One #' + wildOne[0] + '"', 450, 898);
      } else if (wildOne[2] === overlayOneOfOne) {
        ctx.drawImage(baseImg, 92, 273, 130, 130);
        ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
        canvas.style.letterSpacing = '0.5px';
        ctx.font = 'bold 7px Calibri';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        ctx.fillText(wildOne[3], 157, 488);
        ctx.font = '8px Calibri';
        ctx.fillText('WO ' + wildOne[0], 157, 499);

        ctxFull.drawImage(baseImg, 330, 980, 466, 466);
        ctxFull.drawImage(overlay, 0, 0, canvasFull.width, canvasFull.height);
        canvasFull.style.letterSpacing = '0.5px';
        ctxFull.font = 'bold 28px Calibri';
        ctxFull.textAlign = 'center';
        ctxFull.fillStyle = '#222222';
        ctxFull.fillText('' + wildOne[3], 563, 1755);
        ctxFull.font = '30px Calibri';
        ctxFull.fillText(wildOne[0], 563, 1797);
      } else if (wildOne[2] === overlayWanted) {
        ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImg, 68, 233, 148, 148);
        canvas.style.letterSpacing = '0.5px';
        ctx.font = '18px EuroWestern';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#222222';
        ctx.fillText('$' + wildOne[0], 140, 426);

        ctxFull.drawImage(overlay, 0, 0, canvasFull.width, canvasFull.height);
        ctxFull.drawImage(baseImg, 250, 845, 520, 520);
        canvasFull.style.letterSpacing = '0.75px';
        ctxFull.font = '94px EuroWestern';
        ctxFull.textAlign = 'center';
        ctxFull.fillStyle = '#222222';
        ctxFull.fillText('$' + wildOne[0], 505, 1535);
      } else if (wildOne[2] === overlayWhite) {
        ctx.rotate((11 * Math.PI) / 180);
        ctx.drawImage(baseImg, 194, 382, 181, 181);
        ctx.rotate((-11 * Math.PI) / 180);
        ctx.drawImage(overlayP, 0, 0, canvas.width, canvas.height);
        canvas.style.letterSpacing = '0.5px';
        ctx.font = '13px SteezBold';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#222222';
        const paddedId = wildOne[0].toString().padStart(4, '0');
        ctx.rotate((6 * Math.PI) / 180);
        ctx.fillText('WO-' + paddedId, 227, 419);

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
  }

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
      const apiKey = 'fb08f4a9f4684d0d8ae14f638d66cefa';

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

  function WildOneInput() {
    return (
      <form onSubmit={setWildOneData}>
        <div className="flex flex-col text-3xl font-bold max-w-sm mx-auto">
          <span className="text-red-800 my-2 error-message">{errorMessage}</span>
          <input
            className="mb-4 py-2 px-3 text-black border-4 border-black"
            placeholder="Wild One #"
            type="number"
            id="wildOneId"
            min="1"
            max="4000"
            step="1"
            required
          />
          <button
            className="button bg-red-700 mb-4 p-1 border-4 border-black"
            type="submit"
          >
            Generate
          </button>

          <button
            className="button bg-red-700 p-1 border-4 border-black my-4 max-w-sm"
            type="button"
            onClick={() => saveImage()}
          >
            Download
          </button>
        </div>
      </form>
    );
  }

  function saveImage() {
    const canvas = document.getElementById('canvas-full') as HTMLCanvasElement;
    if (!canvas) return;

    const image = canvas.toDataURL('image/jpg');
    const win = window.open();
    if (win) {
      win.document.write('<img src="' + image + '" height="2436" width="1125" />');
    }
  }

  return (
    <main className="flex flex-col justify-center w-full overflow-x-hidden overflow-y-auto text-center bg-stone-700">
      <h1 className="text-5xl">Phone Wallpapers</h1>


      <div className="flex flex-col justify-center w-screen p-8" id="generator">
        <p className="text-2xl leading-tight">
          Enter your Wild One ID, then hit GENERATE to get a custom phone wallpaper
        </p>

        <canvas id="canvas-preview" className="mx-auto my-8"></canvas>
        <WildOneInput />
      </div>

      <div className="hidden flex-column align-items-center">
        <canvas
          id="canvas-full"
          className="canvas-full-1 mx-auto mb-4"
          width="1125"
          height="2436"
        ></canvas>
      </div>
    </main>
  );
};

export default PhoneWallpaper;

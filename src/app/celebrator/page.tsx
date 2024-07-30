'use client' 

import React, { useState } from 'react';
import axios from 'axios';

const Celebrator = () => {
  const [nftID, setNftID] = useState('');
  const [nftImg, setNftImg] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [error, setError] = useState('');

  const handleFetchAttributes = async () => {

    const contractAddress = '0xe9A1a323b4c8FD5Ce6842edaa0cd8af943cBdf22';
    const apiUrl = `https://api.opensea.io/api/v2/chain/ethereum/contract/${contractAddress}/nfts/${nftID}`;

    try {
      const response = await axios.get(apiUrl, {
        params: {

        }, 
        headers: {
          'Accept': 'application/json',
          'X-API-KEY': 'bd019ee388f74005b6eb1f5f3d184523'
        }
      });
      if (response.status === 200) {
        console.log(response.data)
        setAttributes(response.data.nft.traits);
        setNftImg(`https://api.thewildbunch.io/wildbunch/${nftID}.png`)
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

  const handleChange = (e: any) => {
    setNftID(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">NFT Attributes Fetcher</h1>
      <input
        type="text"
        value={nftID}
        onChange={handleChange}
        placeholder="Enter NFT ID"
        className="border rounded px-2 py-1 w-full"
      />
      <button
        onClick={handleFetchAttributes}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch Attributes
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <h2 className="text-xl font-semibold">Attributes:</h2>
        <ul>
          {attributes.map((attr, index) => (
            <li key={index}>
              <strong>{attr.trait_type}:</strong> {attr.value}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold">Img</h2>
        <img src={nftImg} className="w-36 h-36" />
      </div>
    </div>
  );

};

export default Celebrator;

import { fakeData, FakeDataItem, giftObjects } from '../fakeData/fakeData';
import { GiftCard } from '../components/GiftCard';
import '../styles/Gifts.css';
import { useEffect, useState } from 'react';
export const Gifts = ({ isLoggedIn }: any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if(isLoggedIn){
      let weddingList = fakeData.find((el : FakeDataItem) => el.listNumber === isLoggedIn.listNumber)?.gifts
      if (weddingList){
        // @ts-ignore
        setData(weddingList)
      }
    }

  },[isLoggedIn]);
  return isLoggedIn  ? (
    <div className="gift-cards-container">
      {
        data.map((gift: giftObjects) => {
          return <GiftCard gift={gift} />;
        })}
    </div>
  ) : (
    <div className="gift-cards-container">You are not logged in</div>
  );
};

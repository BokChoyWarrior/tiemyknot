import { fakeData, Gift } from '../fakeData/fakeData';
import { GiftCard } from '../components/GiftCard';
import '../styles/Gifts.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { List, RootState } from '..';

export const Gifts = () => {
  const [data, setData] = useState<Gift[]>([]);
  const currentList: List = useSelector((state: RootState) => state.currentList);

  useEffect(() => {
    if (currentList) {
      let weddingList = fakeData.find((el) => {
        return el.listNumber === currentList.listNumber;
      })?.gifts;
      if (weddingList) {
        setData(weddingList);
      }
    }
  }, [currentList]);

  return currentList ? (
    <div className="gift-cards-container">
      {data.map((gift: Gift) => {
        return <GiftCard gift={gift} />;
      })}
    </div>
  ) : (
    <div className="gift-cards-container">You are not logged in</div>
  );
};

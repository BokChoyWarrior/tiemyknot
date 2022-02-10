import { FakeDataItem } from '../fakeData/fakeData';
import { GiftCard } from '../components/GiftCard';
import '../styles/Gifts.css';
export const Gifts = ({ gifts }: { gifts: FakeDataItem[] }) => {
  return (
    <div className="gift-cards-container">
      {gifts.map((gift) => {
        return <GiftCard gift={gift} />;
      })}
    </div>
  );
};

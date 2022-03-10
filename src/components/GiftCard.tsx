import '../styles/GiftCard.css';
import { giftObjects } from '../fakeData/fakeData';
import Card from './Card';

const buttonStatuses = {
  0: { className: 'book', buttonText: 'Reserve' },
  1: { className: 'booked', buttonText: 'Booked' },
  2: { className: 'booked-by-you', buttonText: 'Reserved by you!' },
};

export const GiftCard = ({ gift }: { gift: giftObjects }) => {
  const giftStatus = gift.status as keyof typeof buttonStatuses; // weird typescript shit LOL
  // basically ocnverts gift.status to a key of buttonStatuses so that typescript knows we arent accessing, e.g, buttonStatuses[4]
  const buttonType = buttonStatuses[giftStatus].className;
  const buttonText = buttonStatuses[giftStatus].buttonText;
  return (
    <Card>
      {/* Could probably also extract card titles and stuff and just pass it into the card */}
      <div className="card-title">{gift.title}</div>
      <div className="card-description">{gift.description}</div>
      <div className="card-buttons">
        <button className={`button ${buttonType}`}>{buttonText}</button>
      </div>
    </Card>
  );
};

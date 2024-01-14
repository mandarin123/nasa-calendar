import { format } from 'date-fns';
import DayModal from './DayModal';

interface DayComponentProps {
  url: string;
  date: string;
}

const DayComponent: React.FC<DayComponentProps> = ({ url, date }) => {
  const dayOfWeek = format(new Date(date), 'EEEE');
  const dayOfMonth = format(new Date(date), 'd');

  return (
    <div style={{ backgroundImage: `url(${url})` }} className='h-20 bg-cover bg-center relative border'>
      <div className="p-2 text-white text-center">
        <div>{dayOfMonth}</div>
        <div>{dayOfWeek}</div>
        <DayModal />
      </div>
    </div>
  );
};

export default DayComponent;
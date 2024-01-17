import { format, set } from 'date-fns';
import DayModal from './DayModal';

interface DayComponentProps {
  url: string;
  date: string;
  title?: string;
  hdurl?: string;
  copyright?: string;
  explanation?: string;
  media_type?: string
}


const DayComponent: React.FC<DayComponentProps> = ({ url, date, title, hdurl, copyright, explanation, media_type}) => {
  const parsedDate = set(new Date(date), { minutes: new Date().getTimezoneOffset() });
  const dayOfWeek = format(parsedDate, 'EEEE');
  const dayOfMonth = format(parsedDate, 'd');

  return (
    <div style={{ backgroundImage: `url(${url})` }} className='h-28 bg-cover bg-center relative border'>
      <div className="bottom-0 left-0 right-0 p-2 text-white text-center">
        <div className='font-black text-xl'>{dayOfMonth}</div>
        <div className='text-2xl'>{dayOfWeek}</div>
        <DayModal
          url={url}
          title={title}
          hdurl={hdurl}
          date={date}
          copyright={copyright}
          explanation={explanation}
          media_type={media_type}
        />
      </div>
    </div>
  );
};

export default DayComponent;
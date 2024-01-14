import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from 'date-fns';
import DayComponent from './DayComponent';
import useNASAData from '../api/useNASAData';
import DayModal from './DayModal';

interface DayComponentProps {
  url: string;
  date: string;
}


const Calendar: React.FC = () => {
  const { nasaData, loading, error } = useNASAData();
  const currentDate = new Date(2023, 11, 1);
  const firstDayOfMonth = startOfMonth(new Date(2023, 11, 1));
  const lastDayOfMonth = endOfMonth(new Date(2023, 11, 31));
  const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar la información.</div>;
  }

  return (
    <div>
      <div className="text-2xl font-bold">{format(currentDate, 'MMMM yyyy')}</div>
      <div className="grid grid-cols-7">
        {daysInMonth.map((day, index) => {
          const formattedDay = format(day, 'yyyy-MM-dd');
          const imageInfo = nasaData.find((item: DayComponentProps) => isSameDay(new Date(item.date), new Date(formattedDay)));
          return (
            <div key={index} className="p-2 h-50 w-50">
              <DayComponent
                url={imageInfo?.url || 'default-image-url'}
                date={formattedDay}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from 'date-fns';
import DayComponent from './DayComponent';
import useNASAData from '../api/useNASAData';
import Loading from '../loading';

interface DayComponentProps {
  url: string;
  date: string;
  title?: string;
  hdurl?: string;
  copyright?: string;
  explanation?: string;
  media_type?: string;
  imageInfo: Date;
}


const Calendar = () => {
  const { nasaData, loading, error }: { nasaData: DayComponentProps[]; loading: boolean; error?: string } = useNASAData();
  const currentDate = new Date(2023, 11, 1);
  const firstDayOfMonth = startOfMonth(new Date(2023, 11, 1));
  const lastDayOfMonth = endOfMonth(new Date(2023, 11, 31));
  const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
  

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error al cargar la información.</div>;
  }

  return (
    <div>
      <div className="text-6xl font-bold text-center p-4 m-3 font-roboto">{format(currentDate, 'MMMM yyyy')}nN</div>
      <div className="grid md:grid-cols-7 xs:grid-cols-2">
        {daysInMonth.map((day, index) => {
          const formattedDay = format(day, 'yyyy-MM-dd');
          const filteredData = nasaData.filter((item) => isSameDay(new Date(item?.date), new Date(formattedDay)));
        
          if (filteredData.length > 0) {
            const imageInfo: DayComponentProps = filteredData[0];
            return (
              <div key={index} className="p-2 h-50 w-50">
                <DayComponent
                  url={imageInfo.url}
                  date={imageInfo.date}
                  title={imageInfo.title}
                  hdurl={imageInfo.hdurl}
                  copyright={imageInfo.copyright}
                  explanation={imageInfo.explanation}
                  media_type={imageInfo.media_type}
                />
              </div>
            );
          } else {
            return (
              <div key={index} className="p-2 h-50 w-50">
                
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Calendar;
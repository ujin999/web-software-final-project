import { useMemo } from 'react';
import { Calendar, dateFnsLocalizer} from 'react-big-calendar';
import { format, getDay, parse, startOfWeek } from 'date-fns';
import { ko } from 'date-fns/locale';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Canlendar.css'

import CustomToolbar from './CustomToolbar';
import CustomEvent from './CustomEvent';
import CustomAgendaEvent from './CustomAgendaEvent';

/**
 * BigCalendar 기반의 커스텀 캘린더
 * @returns {JSX.Element} Calendar 컴포넌트
 */

const formats = {
  agendaDateFormat: (date, culture, localizer) =>
    format(date, 'M월 d일(E)', { locale: ko }),
};

const dayStyleGetter = (date) => {
  const day = date.getDay(); // 0: 일요일, 6: 토요일
  if (day === 0) {
    return {
      style: {
        backgroundColor: '#ffe6e6', // 연한 빨간색
        color: '#d63031',          // 진한 빨간 텍스트
      }
    };
  }

  if (day === 6) {
    return {
      style: {
        backgroundColor: '#e6f0ff', // 연한 파란색
        color: '#0984e3',           // 진한 파란 텍스트
      }
    };
  }
  return {}; // 평일은 기본 스타일
};

const locales = { ko };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

const resources = [
  { resourceId: 1, resourceTitle: 'Board room' },
  { resourceId: 2, resourceTitle: 'Training room' },
]

let eventId = 0
const events = Array.from({ length: 1 }, (_, k) => k).flatMap((i) => {
  const currentResource = resources[i % resources.length];
  const now = new Date();
  const dayDiff = 0;
  const j = 1;

  const date1 = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + dayDiff,
    9 + (j % 4),
    0,
    0
  );

  const date2 = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + dayDiff + 3,
    15 + (j % 4),
    0,
    0
  );

  return Array.from({ length: 5 }, (_, j) => ({
    id: eventId++,
    title: `Event ${i + j} _ ${currentResource.resourceTitle}`,
    start: date1,
    end: date2,
    resourceId: currentResource.resourceId,
  }))
})


export default function ManagementCalendar() {
  const { defaultDate } = useMemo(() => {
    return { defaultDate: new Date() };
  }, []);

  return (
    <div style={{ height: '80vh', width: '90%', margin: 'auto' }}>
        <Calendar
            culture='ko'
            defaultDate={defaultDate}
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            step={60}
            style={{ height: '100%' }}
            timeslots={1}
            views={['month', 'agenda']}
            defaultView='month'
            dayPropGetter={dayStyleGetter}
            components={{
              toolbar: CustomToolbar,
              event: CustomEvent,
              agenda: {
                event: CustomAgendaEvent
                }
              }
            }
          formats={formats}
        />
    </div>
);
}
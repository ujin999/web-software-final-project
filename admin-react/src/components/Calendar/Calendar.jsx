import { useMemo } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, getDay, parse, startOfWeek } from 'date-fns';
import { ko } from 'date-fns/locale';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Canlendar.css';

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
        color: '#d63031', // 진한 빨간 텍스트
      },
    };
  }

  if (day === 6) {
    return {
      style: {
        backgroundColor: '#e6f0ff', // 연한 파란색
        color: '#0984e3', // 진한 파란 텍스트
      },
    };
  }
  return {}; // 평일은 기본 스타일
};

const locales = { ko };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// const resources = [
//   { resourceId: 1, resourceTitle: '커뮤니티 공식행사' },
//   { resourceId: 2, resourceTitle: '서버 점검' },
//   { resourceId: 3, resourceTitle: '어드민 페이지 발표' },
//   { resourceId: 4, resourceTitle: 'react 클로즈 베타' },
// ];

let eventId = 0;
let addDiff = 0;
// const events = Array.from({ length: resources.length }, (_, k) => k).flatMap((i) => {
//   const currentResource = resources[i % resources.length];
//   const now = new Date();
//   const dayDiff = 0;
//   const j = 1;

//   const date1 = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + dayDiff + addDiff,
//     9 + (j % 4),
//     0,
//     0
//   );

//   const date2 = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + dayDiff + addDiff + 1,
//     15 + (j % 4),
//     0,
//     0
//   );

//   addDiff += 5;

//   return Array.from({ length: 1 }, (_, j) => ({
//     id: eventId++,
//     title: `Event ${i + j + 1} _ ${currentResource.resourceTitle}`,
//     start: date1,
//     end: date2,
//     resourceId: currentResource.resourceId,
//     colorIndex: eventId - 1
//   }));
// });

// const eventsTest = [
//   {
//     id: 0,
//     title: '서버 점검',
//     start: new Date(2025, 5, 5, 10, 0),
//     end: new Date(2025, 5, 6, 11, 0),
//     colorIndex: 0,
//   },
//   {
//     id: 1,
//     title: '개발 일정',
//     start: new Date(2025, 5, 6, 9, 0),
//     end: new Date(2025, 5, 9, 12, 0),
//     colorIndex: 1,
//   },
//   {
//     id: 2,
//     title: '기말고사',
//     start: new Date(2025, 5, 16, 9, 0),
//     end: new Date(2025, 5, 20, 12, 0),
//     colorIndex: 2,
//   },
//   {
//     id: 3,
//     title: 'react 클로즈 베타',
//     start: new Date(2025, 5, 19, 10, 0),
//     end: new Date(2025, 5, 19, 12, 0),
//     colorIndex: 3,
//   }
// ];

export default function ManagementCalendar({event}) {
  const { defaultDate } = useMemo(() => {
    return { defaultDate: new Date() };
  }, []);

  return (
    <div style={{backgroundColor: 'white', height: '80vh', border: '1px solid rgba(208, 213, 220, 0.4)'}}>
      <div style={{ height: '75vh', width: '80%', margin: 'auto', marginTop:'20px'}}>
        <Calendar
          culture="ko"
          defaultDate={defaultDate}
          localizer={localizer}
          events={event}
          startAccessor="start"
          endAccessor="end"
          step={60}
          style={{ height: '100%' }}
          timeslots={1}
          views={['month', 'agenda']}
          defaultView="month"
          dayPropGetter={dayStyleGetter}
          components={{
            toolbar: CustomToolbar,
            event: CustomEvent,
            agenda: {
              event: CustomAgendaEvent,
            },
          }}
          formats={formats}
        />
      </div>
    </div>
  );
}

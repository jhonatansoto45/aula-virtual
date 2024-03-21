import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Programación de Computadores',
    start: TODAY_STR + 'T01:00:00',
    end: TODAY_STR + 'T03:00:00'
  },
  {
    id: createEventId(),
    title: 'Ingeniría de Software',
    start: TODAY_STR + 'T03:00:00',
    end: TODAY_STR + 'T05:00:00'
  },
  {
    id: createEventId(),
    title: 'Bases de datos',
    start: TODAY_STR + 'T06:00:00',
    end: TODAY_STR + 'T08:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}

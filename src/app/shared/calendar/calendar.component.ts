import { Component, OnInit } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarOptions!: CalendarOptions;
  currentEvents: EventApi[] = [];

  constructor() {}

  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [listPlugin],
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        end: '',
      },
      initialView: 'listWeek', //dayGridMonth -- completo
      initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
      weekends: true,
      locales: [{ code: 'es' }],
      // editable: true,
      selectable: true,
      selectMirror: true,
      noEventsText: 'Sin Clases Programadas',
      // dayMaxEvents: true,
      // select: this.handleDateSelect.bind(this),
      // eventClick: this.handleEventClick.bind(this),
      // eventsSet: this.handleEvents.bind(this),

      /* you can update a remote database when these fire:
      eventAdd:
      eventChange:
      eventRemove:
      */
    };
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    // this.changeDetector.detectChanges();
  }
}

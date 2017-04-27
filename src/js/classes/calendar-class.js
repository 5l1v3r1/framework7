import Utils from '../utils/utils';
import Use from '../utils/use';
import Events from '../modules/events';

class Calendar {
  constructor(params = {}) {
    const calendar = this;
    calendar.params = Utils.extend({

    }, params);
    return calendar;
  }
}

Use(Calendar).use(Events);

export default Calendar;

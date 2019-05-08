import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  rentalType(isShared) {
    return isShared ? 'shared' : 'whole';
  }

  getRangeOfDates(startAt, endAt) {
    let start = new Date(startAt);
    const end = new Date(endAt);
    const dateArr = [];

    while(start < end) {
      dateArr.push(moment(start).format('Y-MM-DD'));
      const newDate = start.setDate(start.getDate() + 1);
      start = new Date(newDate);
    }

    return dateArr;
  }
}

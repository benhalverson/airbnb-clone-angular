import { Booking } from 'src/app/booking/shared/booking.model';
import { Rental } from 'src/app/rental/shared/rental.model';

export interface User {
  username?: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  bookings: Booking[];
  rentals: Rental[];
}

export function userFactory(
  username: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  rentals?: Rental[],
  bookings?: Booking[]
): User {
  return {
    username,
    email,
    password,
    passwordConfirmation,
    rentals,
    bookings,
  };
}

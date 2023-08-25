import { FormControl } from "@angular/forms";

export const cantBeStrider = (control: FormControl) => {

  const usernames = ['strider', 'leogurdu', 'leo_gurdu','leo_rub_gur'];
  const value: string = control.value.trim().toLowerCase();

  if(usernames.includes(value)){
    return {
      noStrider: true,
    }
  }

  return null;

};
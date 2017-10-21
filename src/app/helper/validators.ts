import { AbstractControl, ValidatorFn } from '@angular/forms';


export function passwordConfirmValidator(param: any): ValidatorFn {
  return (c: AbstractControl) : {[key: string]: boolean} | null => {
    if (c.parent && c.value !== c.parent.get(param).value) {
      return {noMatch: true};
    }
    return null;
  };
}

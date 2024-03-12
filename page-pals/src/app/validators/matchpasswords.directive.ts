import { Directive,Input } from '@angular/core';

import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
@Directive({
  selector: '[appMatchpasswords]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchpasswordsDirective, multi: true }]
})
export class MatchpasswordsDirective implements Validator {

  @Input('appMatchPasswords') passwordsToMatch: string[] | undefined;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const password = control.value;
    if (password && this.passwordsToMatch && this.passwordsToMatch.length > 0) {
      const passwordsMatch = this.passwordsToMatch.every(p => p === password);
      return passwordsMatch ? null : { 'passwordMismatch': true };
    }
    return null;
  }

}





// export class MatchPasswordsValidatorDirective implements Validator {
//   @Input('appMatchPasswords') passwordsToMatch: string[];

//   validate(control: AbstractControl): { [key: string]: any } | null {
//     const password = control.value;
//     if (password && this.passwordsToMatch && this.passwordsToMatch.length > 0) {
//       const passwordsMatch = this.passwordsToMatch.every(p => p === password);
//       return passwordsMatch ? null : { 'passwordMismatch': true };
//     }
//     return null;
//   }
// }

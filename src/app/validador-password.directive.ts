import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidadorPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidadorPasswordDirective,
  multi: true}]
})
export class ValidadorPasswordDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return control.value < 5000000 ?  {"documento menor a 5": true } : null ;
  }

}

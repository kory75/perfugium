import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Test2Component),
      multi: true
    }
  ]
})
export class Test2Component implements OnInit, ControlValueAccessor {
  value: number = 0;

  constructor() { }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  ngOnInit(): void {
  }

  onClickPlus() { 
    this.value++;
    this.onChange(this.value);
  }

  onClickMinus() { 
    this.value--;
    this.onChange(this.value);
  }

  onRoll() {
    //rollService.Roll('2d6');
    this.value = Math.round(Math.random()*5+1);
    this.onChange(this.value);
  }

  onChange(obj: any) {

  }
}

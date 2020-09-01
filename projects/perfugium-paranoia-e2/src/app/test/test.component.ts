import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('hello'),
    clearance: new FormControl(3),
    player: new FormControl(5),
    serviceGroup: new FormControl()
  });

  rollDice() {
    //RollService.Roll('2d6');
    this.formGroup.get('player').setValue(Math.round(Math.random()*5+1));
  }

  constructor() { }

  ngOnInit(): void {

  }

}

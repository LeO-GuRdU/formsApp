import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

// public myForm: UntypedFormGroup = new UntypedFormGroup({
//   name: new FormControl('',[],[]),
//   price: new FormControl('',[],[]),
//   inStorage: new FormControl('',[],[]),
// })

public myForm: FormGroup = this.fb.group({
  name: [''],
  price: [0],
  inStorage: [0],
})

constructor( private fb: FormBuilder){}

onSave(): void {
  console.log(this.myForm.value);
}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:[""],
      gender:[""],
      qualifications: this.formBuilder.array([])
    })
    
  }
  get qualifications() : FormArray {
    return this.form.get("qualifications") as FormArray
  }
  newQualifications():FormGroup{
    return this.formBuilder.group({
      qua:[""],
      passed:[""]
    })
  }
  addQuali(){
    this.qualifications.push(this.newQualifications())
  }
  removeQuali(i:any){
    this.qualifications.removeAt(i)
  }
  onSubmit(){
    console.log(this.form.value);

  }
}

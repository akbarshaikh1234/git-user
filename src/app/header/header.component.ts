import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  formGrp:FormGroup;

  @Output() searchQuery = new EventEmitter<string>();
  @Output() sorter = new EventEmitter<string>();

  ngOnInit() {
    this.formGrp = this.fb.group({
      sorter:[''],
      query:[''],
    })

    this.onChange();
  }

  onChange(){
    this.formGrp.get('query').valueChanges
      .debounceTime(500)
      .subscribe(res => {
        if(res !== '')
          this.searchQuery.emit(res);
        else 
          this.searchQuery.emit('a');
      });

      this.formGrp.get('sorter').valueChanges
      .debounceTime(500)
      .subscribe(res => {
        this.sorter.emit(res)
      })
  }

  

}

import { Component, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-element-v1';
  @ViewChild('myModal', {static: false}) myModal;
  private modalRef;
  sampleForm: FormGroup;
  constructor(private modalService: ModalManager, private fb: FormBuilder){}
  user:any = {};
  sayHi(){
    alert("Hello, I am angular custom element !!!");
  }

  ngOnInit() {
    console.log("test")
    this.openModal();
    this.validateForm();
  }

  validateForm() {
    this.sampleForm = this.fb.group({
       first_name : ['', Validators.required ],
       email: ['', Validators.required ]
    });
  }

  openModal(){
    console.log("dd")
    this.modalRef = this.modalService.open(this.myModal, {
        size: "md",
        modalClass: 'mymodal',
        hideCloseButton: false,
        centered: false,
        backdrop: true,
        animation: true,
        keyboard: false,
        closeOnOutsideClick: true,
        backdropClass: "modal-backdrop"
    })
}
submitModalData(data) {
 console.log('data', data);
}
closeModal(){
    this.modalService.close(this.modalRef);
    //or this.modalRef.close();
}
}

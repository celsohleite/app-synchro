import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, NgModule, Inject, OnInit, Input, AfterViewInit } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.css'],
})
@NgModule({
    imports: [
    ]
})
export class AlertComponent implements OnInit {
    descricao: string;

    constructor(
        public dialogRef: MatDialogRef<AlertComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }


    ngOnInit() {
    }

    ngAfterViewInit(){
        this.descricao = this.data.descricao;
    }

}


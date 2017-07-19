import {Component} from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';


@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'app/dashboard/alert/tstFiles/dialog-overview-example.html',
  //entryComponents :[DialogOverviewExampleDialog]
})
export class DialogOverviewExample {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
 


}


@Component({
  selector: 'dialog-overview-example-dialog',
  //templateUrl: 'dialog-overview-example-dialog.html',
  template:
  `
  
<h1 md-dialog-title>Twitter Help</h1>

<div md-dialog-content>
    <md-card class="example-card">
        <md-card-header>
                <md-card-title><strong>Sources Autorisées et bloquées</strong></md-card-title>
                <md-card-subtitle>Pour Twitter </md-card-subtitle>
        </md-card-header>    
        <img md-card-image src="assets/img/twitterPageName.PNG"  />
        <md-card-content>    
            <p>
            Accéder à Twitter => copier le nom de la page (sans @) comme indiqué dans la photo
            ensuite collez-le dans l' input box réservé.
            </p>
        </md-card-content>   
    </md-card>       
  
</div>

<div md-dialog-actions>
  <button md-button (click)="dialogRef.close()" color="primary">
    Okays!
  </button>
  <button md-button (click)="dialogRef.close()">
    Cancel
  </button>
</div>`,
styles:[`
.example-card {
  width: 500px;
}`]
})
export class DialogOverviewExampleDialog 
{

    constructor(public dialogRef: MdDialogRef<DialogOverviewExampleDialog>)
     {}
}
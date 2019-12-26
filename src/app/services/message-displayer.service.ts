import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageDisplayerService {

  constructor(private snackBar: MatSnackBar) { }

  public displayMessage(message:string) {
    this.snackBar.open(message,null,{duration: 1000});
  }
}

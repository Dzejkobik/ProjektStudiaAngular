import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { MessageDisplayerService } from 'src/app/services/message-displayer.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingComponent } from 'src/app/loading/loading.component';

@Component({
  selector: 'app-table-action-new',
  templateUrl: './table-action-new.component.html',
  styleUrls: ['./table-action-new.component.scss']
})
export class TableActionNewComponent implements OnInit {

  constructor(private categoriesService: CategoriesService,
    private messageDisplayer: MessageDisplayerService, private dialog:MatDialog,
    private dialogRef:MatDialogRef<TableActionNewComponent>) { }

 name;

 ngOnInit() {
 }

 submit() {
   const loadingRef = this.dialog.open(LoadingComponent);
   this.categoriesService.addNewCategory(this.name).subscribe(res => {
     this.messageDisplayer.displayMessage("Category added");
     loadingRef.close();
     this.dialogRef.close();
   })
 }

}

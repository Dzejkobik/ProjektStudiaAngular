import { Component, OnInit, Inject } from '@angular/core';
import { LoadingComponent } from 'src/app/loading/loading.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CategoriesService } from 'src/app/services/categories.service';
import { MessageDisplayerService } from 'src/app/services/message-displayer.service';

@Component({
  selector: 'app-table-action-edit',
  templateUrl: './table-action-edit.component.html',
  styleUrls: ['./table-action-edit.component.scss']
})
export class TableActionEditComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private categoriesService: CategoriesService,
  private messageDisplayer: MessageDisplayerService, private dialog: MatDialog,
    private dialogRef:MatDialogRef<TableActionEditComponent>) { }

  name;

  ngOnInit() {
    const dialogRef = this.dialog.open(LoadingComponent);
    console.log(this.data);
    this.categoriesService.getCategoryById(this.data.id).subscribe(res => {
      console.log(res);
      this.name = res.name;
      dialogRef.close();
    })
  }

  submit() {
    const loadingRef = this.dialog.open(LoadingComponent);
    this.categoriesService.editCategory(this.name,this.data.id).subscribe(res => {
      console.log(res);
      loadingRef.close();
      this.messageDisplayer.displayMessage("Category modified");
      this.dialogRef.close();
    })
  }

}

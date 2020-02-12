import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { MessageDisplayerService } from 'src/app/services/message-displayer.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingComponent } from 'src/app/loading/loading.component';
import { CountriesService } from 'src/app/services/countries.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-table-action-new',
  templateUrl: './table-action-new.component.html',
  styleUrls: ['./table-action-new.component.scss']
})
export class TableActionNewComponent implements OnInit {

  constructor(private locationsService: LocationsService, private countriesService: CountriesService,private messageDisplayer: MessageDisplayerService, private dialog:MatDialog,
    private dialogRef:MatDialogRef<TableActionNewComponent>) { }

 countries;
 streetAdress;
 postalCode;
 city;
 stateProvince;
 selectedCountryId;

 ngOnInit() {
   this.countriesService.getAll().subscribe(res => {
     console.log(res);
     this.countries = res;
   });
 }

 submit() {
   const loadingRef = this.dialog.open(LoadingComponent);
   console.log(this.selectedCountryId);
   this.locationsService.add({StreetAddress: this.streetAdress,PostalCode: this.postalCode,City: this.city,
     StateProvince: this.stateProvince, CountryId: this.selectedCountryId}).subscribe(res => {
     this.messageDisplayer.displayMessage("Location added");
     loadingRef.close();
     this.dialogRef.close();
   })
 }

}

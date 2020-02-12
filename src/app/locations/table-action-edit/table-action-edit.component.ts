import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { MessageDisplayerService } from 'src/app/services/message-displayer.service';
import { LoadingComponent } from 'src/app/loading/loading.component';
import { CountriesService } from 'src/app/services/countries.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-table-action-edit',
  templateUrl: './table-action-edit.component.html',
  styleUrls: ['./table-action-edit.component.scss']
})
export class TableActionEditComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private countriesService: CountriesService,
   private messageDisplayer: MessageDisplayerService, private dialog: MatDialog,
    private dialogRef:MatDialogRef<TableActionEditComponent>, private locationsService: LocationsService) { }

    countries;
    streetAddress;
    postalCode;
    city;
    stateProvince;
    selectedCountryId;
   
    ngOnInit() {
      const dialogRef = this.dialog.open(LoadingComponent);
      this.countriesService.getAll().subscribe(res => {
        console.log(res);
        this.countries = res;
      });
    this.locationsService.getById(this.data.id).subscribe(res => {
      console.log(res);
      this.streetAddress = res.streetAddress;
      this.postalCode = res.postalCode;
      this.city = res.city;
      this.stateProvince = res.stateProvince;
      this.selectedCountryId = res.countryId;
      dialogRef.close();
    })
  }

  submit() {
    const loadingRef = this.dialog.open(LoadingComponent);
    this.locationsService.update(this.data.id,{StreetAddress: this.streetAddress,PostalCode: this.postalCode,City: this.city,
      StateProvince: this.stateProvince, CountryId: this.selectedCountryId}).subscribe(res => {
      console.log(res);
      loadingRef.close();
      this.messageDisplayer.displayMessage("Location modified");
      this.dialogRef.close();
    })
  }

}

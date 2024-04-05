import { Component, Inject, inject } from '@angular/core';
import { product } from '../Models/product';
import { MatDialog, MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-selected-product-modal',
  templateUrl: './selected-product-modal.component.html',
  styleUrls: ['./selected-product-modal.component.css']
})
export class SelectedProductModalComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{ selectedProducts: product[]}) {}

}


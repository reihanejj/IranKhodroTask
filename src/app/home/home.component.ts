import { Component, TemplateRef, ViewChild } from '@angular/core';
import { product } from '../Models/product';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  public products: product[];
  public modalStateIsAdd: boolean;
  public selectItem: product;

  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  constructor(public dialog: MatDialog) {

    this.modalStateIsAdd = true;
    this.selectItem = { name: "", model: "", price: 0, electric: false };
    this.products = [
      { name: "Tesla", model: "Model Y", price: 64950, electric: true },
      { name: "Ford", model: "F-Series", price: 33850, electric: false },
      { name: "Toyota", model: "Corolla", price: 29600, electric: false },
      { name: "Mercedes", model: "EQA", price: 48890, electric: true },
      { name: "Fiat", model: "500", price: 15774, electric: false },
      { name: "Nissan", model: "Juke", price: 20675, electric: false },
      { name: "Vauxhall", model: "Corsa", price: 18460, electric: false },
      { name: "Volvo", model: "EX30", price: 33795, electric: true },
      { name: "Mercedes", model: "Maybach", price: 175720, electric: false },
      { name: "Vauxhall", model: "Astra", price: 25795, electric: false },
      { name: "Fiat", model: "Panda", price: 13724, electric: false },
      { name: "Jaguar", model: "I-PACE", price: 69425, electric: true },
    ];

  }

  public openModal(item?: product) {

    if (item != null) {
      this.selectItem = item;
    }
    const dialogRef = this.dialog.open(this.modalTemplate, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The Dialog Was Closed');
    });
  }

  public closeModal(): void {

    this.selectItem = { name: "", model: "", price: 0, electric: false };

    this.dialog.closeAll();
  }

  public OpenAddModal() {
    this.modalStateIsAdd = true;
    this.selectItem = { name: "", model: "", price: 0, electric: false };
    this.openModal();
  }

  public Add() {
    this.products.push(new product(
      this.selectItem.name,
      this.selectItem.model,
      this.selectItem.price,
      this.selectItem.electric
    ));

    this.closeModal();
  }

  public Delete(index: number) {
    this.products.splice(index, 1);
  }

  public Edit(item: product) {
    this.modalStateIsAdd = false;
    this.openModal(item);
  }
}











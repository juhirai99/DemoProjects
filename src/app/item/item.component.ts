import { Component, OnInit } from '@angular/core';
import { ItemClass } from 'app/shared/model/item-class';
import { ItemsService } from 'app/shared/service/items.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items :ItemClass[];
  activeItem = 'All';
  filteredItem : ItemClass[];

  constructor(private itemservice : ItemsService) { }

  ngOnInit() {
    this.getAllItems()
  }

  //get all the items 
  getAllItems(){
    this.itemservice.getEmployees().subscribe( response  => {
      this.items = response
      this.filteredItem = this.items
   });
    }
  
    //check active tab
    isActive(menuItem :string) {
      return this.activeItem === menuItem
    };

    /*set active tab*/
    setActive(menuItem : string) {
      this.activeItem = menuItem
      this.getFilteredItem(this.activeItem)
    };

    /*
     * get filtered items 
     */
    getFilteredItem(activeItem){
      if( activeItem == 'All') {
        this.filteredItem = this.items
      }  
      if( activeItem == 'Recomended'){
        this.filteredItem =  this.items.filter(function(item){
          return item.sugesstion =='recomended'
        })
      }
      if( activeItem == 'Popular') {
        this.filteredItem = this.items.filter(item=>item.sugesstion =='popular')
      }
     }
}
  


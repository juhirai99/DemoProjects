import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ItemsService } from './shared/service/items.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ItemComponent } from './item/item.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,
    SearchbarComponent,
    NavigationComponent,
    ItemComponent,
    SubscribeComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

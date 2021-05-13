import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersManagementComponent } from './pages/banners-management/banners-management.component';
import { EditBannerComponent } from './components/edit-banner/edit-banner.component';
import { BannerItemComponent } from './components/banner-item/banner-item.component';
import { BannersListComponent } from './components/banners-list/banners-list.component';
import { PredefinedCategoriesSettingsComponent } from './components/predefined-categories-settings/predefined-categories-settings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BannersHeaderComponent} from "./components/banners-header/banners-header.component";
import {CategoryItemComponent} from "./components/category-item/category-item.component";
import {ModuleModule} from "../../module.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [BannersManagementComponent, EditBannerComponent, BannerItemComponent, BannersListComponent, PredefinedCategoriesSettingsComponent, BannersHeaderComponent, CategoryItemComponent],
  exports: [
      BannerItemComponent,
      BannersListComponent,
      EditBannerComponent,
      BannersManagementComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ModuleModule,
        FontAwesomeModule
    ]
})
export class AdminBannersModule { }
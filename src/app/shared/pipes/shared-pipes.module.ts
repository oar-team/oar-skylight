import { FileSizePipe } from './file-size.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FileSizePipe]
})
export class SharedPipesModule { }

import { KeysPipe } from './keys-pipe';
import { FileSizePipe } from './file-size.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [KeysPipe],
    exports: [KeysPipe]
})
export class SharedPipesModule {

  static forRoot() {
    return {
      ngModule: SharedPipesModule,
      providers: [],
    };
  }
}

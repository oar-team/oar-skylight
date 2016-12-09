import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MessagesModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MessagesModule],
    declarations: [LoginComponent],
    exports: [LoginComponent, ReactiveFormsModule, FormsModule]
})

export class LoginModule { }

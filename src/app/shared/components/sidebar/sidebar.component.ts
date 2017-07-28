import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './../../models/user';
import { AuthenticationService } from './../../services/auth/authentification.service';
import { Component } from '@angular/core';
import { FmComponent } from '../../../file-manager/fm/fm.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';
    user: User;
    constructor(private auth: AuthenticationService, private modalService: NgbModal) {
        this.auth.getUserObservable().subscribe(
            (user) => this.user = user
        );
    }


    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    openExplorer() {
        console.log('openExplorer')
        const modalRef = this.modalService.open(FmComponent, {size: 'lg'});
        modalRef.result.then()
        .catch(err => console.log(err));
    }
}

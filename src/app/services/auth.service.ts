import { Injectable } from "@angular/core";
import { IUserDetails } from "../model/user-details.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    token: string = ''; 
    userDetails: any;

    isAuthorized() {
        const token = this.token || sessionStorage.getItem('token');
        if(token) {
            return token
        }
        return ''
    }

    setUserDetails(userDetails: IUserDetails) {
        if (userDetails) {
            this.userDetails = userDetails;
            sessionStorage.setItem('token', userDetails.idToken);
            sessionStorage.setItem('userDetails', JSON.stringify(userDetails))
        }
    }

    getDataFromSessionStorage(key: string) {
        const data = sessionStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null
    }

    getUserDetails() {
        return this.userDetails || this.getDataFromSessionStorage('userDetails')
    }
}
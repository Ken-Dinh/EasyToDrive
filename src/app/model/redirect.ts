import { Router } from "@angular/router";
import { AuthguardValidationService } from "../service/authguard-validation.service";

var token: any = localStorage.getItem("token");

export function redirect(authguardValidationService: AuthguardValidationService, route: Router): void {
    if (token) {
        navitateTo(token, authguardValidationService, route);
    }
}

export function navitateTo(token: any, authguardValidationService: AuthguardValidationService, route: Router): void {
    authguardValidationService.postValidateToken({token: token}).subscribe((response: any) => {
        if (!response.role) {
            localStorage.removeItem("token");
            return;
        }

        route.navigate([response.role + "-dashboard"]);
    })
}

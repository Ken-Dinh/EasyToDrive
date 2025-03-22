import { Router } from "@angular/router";
import { AuthguardValidationService } from "../service/authguard-validation.service";
import { AuthService } from "../service/auth.service";

var token: any = localStorage.getItem("token");

export function redirect(authguardValidationService: AuthguardValidationService, route: Router, authService: AuthService): void {
    const token = authService.getToken();

    if (token) {
        navitateTo(token, authguardValidationService, route, authService);
    }
}

export function navitateTo(token: any, authguardValidationService: AuthguardValidationService, route: Router, authService: AuthService): void {
    authguardValidationService.postValidateToken({token: token}).subscribe((response: any) => {
        if (!response.role) {
            authService.clearToken();
            return;
        }

        route.navigate([response.role + "-dashboard"]);
    })
}

System.register(['@angular/core', '@angular/router', './api/session.service', "./api/auth.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, session_service_1, auth_service_1;
    var AuthGuard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AuthGuard = (function () {
                function AuthGuard(sessionService, authService, router) {
                    this.sessionService = sessionService;
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    var token = this.sessionService.token;
                    if (token && token !== '') {
                        return true;
                    }
                    else {
                        this.router.navigateByUrl('/login');
                    }
                    return false;
                };
                AuthGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [session_service_1.SessionService, auth_service_1.AuthService, router_1.Router])
                ], AuthGuard);
                return AuthGuard;
            }());
            exports_1("AuthGuard", AuthGuard);
        }
    }
});
//# sourceMappingURL=auth.guard.js.map
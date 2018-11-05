/// <reference >
export namespace IConfigFE {
    export interface Config {
        services: Services;
    }

    export interface Services {
        [key:string]: Service;
    }

    export interface Service {
        main: ServiceMain;
        types: ServiceTypes;
    }

    export interface ServiceMain {
        path: string;
        template: string;
    }

    export interface ServiceTypes {
        [key:string]: ServiceType;
    }

    export interface ServiceType {
        path: string;
        template: string;
    }
}

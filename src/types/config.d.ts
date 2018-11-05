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
        categories: ServiceCategories;
    }

    export interface ServiceMain {
        path: string;
        template: string;
    }

    export interface ServiceCategories {
        [key:string]: ServiceCategory;
    }

    export interface ServiceCategory {
        path: string;
        template: string;
    }
}

/// <reference >
export namespace IConfigFE {
    export interface Config {
        services: Services;
    }

    export interface Services {
        [key:string]: Service;
    }

    export interface Service {
        extension: string;
        main: ServiceItem[];
        categories: ServiceCategories;
    }

    export interface ServiceCategories {
        [key:string]: ServiceItem;
    }

    export interface ServiceItem {
        path: string;
        template: string;
    }
}

import {RouteProps} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import React from "react";
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRouts, string> = {
    [AppRouts.MAIN]: '/',
    [AppRouts.ABOUT]: '/about',
    [AppRouts.NOT_FOUND]: '*'
}

export const routeConfig:Record<AppRouts, RouteProps>={
    [AppRouts.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    },
    [AppRouts.ABOUT]:{
        path:RoutePath.about,
        element:<AboutPage/>
    },
    [AppRouts.NOT_FOUND]:{
        path:RoutePath.not_found,
        element:<NotFoundPage/>
    }
}
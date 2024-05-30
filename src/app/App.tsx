import React, {Suspense, useEffect, useState} from 'react';
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/Sidebar";
import {Modal} from "shared/ui/Modal/Modal";
import {Button} from "shared/ui/Button/Button";


const App = () => {

    const {theme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar/>

                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;

import React, {Suspense, useEffect} from 'react';
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/Sidebar";
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";


const App = () => {

    const {theme} = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
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

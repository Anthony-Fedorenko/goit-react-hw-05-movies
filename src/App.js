import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar/AppBar';
import './App.css';


const HomeView = lazy(() => import('./views/HomeView/HomeView' /* webpackChunkName: "HomeView"*/),);
const MoviesView = lazy(() => import('./views/MoviesView/MoviesView' /* webpackChunkName: "MoviesView"*/),);
const MovieView = lazy(() => import('./views/MovieView/MovieView' /* webpackChunkName: "MovieView"*/),);


export default function App() {
    return (
        <>
            <AppBar />

            <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}>
                <Switch>
                    <Route path="/" exact>
                        <HomeView />
                    </Route>

                    <Route path="/movies" exact>
                        <MoviesView />
                    </Route>

                    <Route path="/movies/:movieId">
                        <MovieView />
                    </Route>

                    {/*<Route>*/}
                    {/*    <NotFoundView />*/}
                    {/*</Route>*/}

                </Switch>
            </Suspense>
        </>
    );
}
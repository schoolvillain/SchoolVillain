import * as React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Index from "../pages/index/Index";
import Login from "../pages/auth/Login";
import Join from "../pages/auth/Join";
import Write from "../pages/board/Write";
import Edit from "../pages/board/Edit";
import Detail from "../pages/board/Detail";
import Mypage from "../pages/mypage/Mypage";
import NotFound from "../pages/error/NotFound";
import Header from "../constants/base/Header";
import Apply from "../pages/banner/Apply";
import ScrollToTop from "./ScrollToTop";

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header/>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/login" render={props => (
                    sessionStorage.getItem('logged') ? <Redirect to="/"/> : <Login {...props} />
                )}/>
                <Route exact path="/join/:id" render={props => (
                    sessionStorage.getItem('logged') ? <Redirect to="/"/> : <Join {...props} />
                )}/>
                <Route exact path="/mypage/:name" render={props => (
                    sessionStorage.getItem('logged') ? <Mypage {...props} /> : <Redirect to="/login"/>
                )}/>
                <Route exact path="/write" component={Write}/>
                <Route exact path="/edit/:id" component={Edit}/>

                <Route exact path="/detail/:id" component={Detail}/>
                <Route exact path="/banner/apply" component={Apply}/>

                <Route path="" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Root;
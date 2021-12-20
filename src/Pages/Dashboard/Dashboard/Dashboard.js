import React from 'react';
import Appointments from './Appointments/Appointments';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRouth from '../../Login/AdminRouth/AdminRouth';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth()
    return (
        <>
            <div>
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Link to='/appointment'><button className='btn'>Appointment</button></Link>
                    <br />
                    <Link to={`${url}`}><button className='btn'>Appointment</button></Link>
                    <br />
                    {
                        admin && <div>
                            <Link to={`${url}/makeAdmin`}><button className='btn'>Make Admin</button></Link>
                            <br />
                            <Link to={`${url}/addService`}><button className='btn'>Add Service</button></Link>
                        </div>
                    }
                </div>
            </div>
            <Switch>
                <Route exact path={path}>
                    <Appointments></Appointments>
                </Route>
                <AdminRouth path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRouth>
            </Switch>
        </>
    );
};

export default Dashboard;
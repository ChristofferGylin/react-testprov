import { Link, Outlet } from "react-router-dom";

const Root = () => {

    console.log('render root');

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Outlet />
        </div>
    )

}

export default Root;
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className="navbar shadow-md bg-base-100 md:px-16">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl">Virtual QUIZ</a>
                </div>
                <div className="flex-none text-lg gap-6 font-semibold text-blue-500">
                    <Link to='/'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blogs'>Blog</Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar  block md:hidden">
                            <div className="w-10 rounded-full">
                                <img alt='' src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Topics</Link></li>
                            <li><Link to='/statistics'>Statistics</Link></li>
                            <li><Link to='/blogs'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
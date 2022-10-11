import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='mb-20'>
            <div className="navbar bg-base-100 lg:px-28 shadow-lg fixed top-0 z-50">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl">Virtual QUIZ</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div className='hidden md:block'>
                            <ul className='flex text-lg font-semibold gap-7 '>
                                <li><Link to='/'>Topics</Link></li>
                                <li><Link to='/statistics'>Statistics</Link></li>
                                <li><Link to='/blog'>blog</Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle block md:hidden">
                            <div className=' flex justify-center '>
                                {/* <FaBars className='text-xl mt-3'></FaBars> */}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Topics</Link></li>
                            <li><Link to='/statistics'>Statistics</Link></li>
                            <li><Link to='/blog'>blog</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
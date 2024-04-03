import React from 'react'
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { UseSelector, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

const Header = () => {
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    //logout handler
    const handleLogout = () => {
        localStorage.clear();
        alert("Logout Successfully");
        navigate('/Login');
    }



    return (
        <div >
            <nav className='navbar '>
                <div className='containerfluid'>
                    <div className='navbar-brand h1' ><BiDonateBlood color='red' />
                        Blood Bank App
                    </div>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-link">
                            <p className="nav-item mx-3">
                                <BiUserCircle /> Welcome {user?.name || user?.hospitalName || user?.organisationName}{" "}
                                &nbsp;
                                <span class="badge text-bg-secondary">{user?.role}</span>
                            </p>
                        </li>
                        <li className="nav-item ">
                            <button className="btn btn-danger"> onClick={handleLogout}
                                Logout
                            </button>
                        </li>

                    </ul>



                </div>
            </nav>

        </div>
    )
}

export default Header
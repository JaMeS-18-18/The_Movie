import React from 'react';
import Static from './Static';
import Toggle from './Toggle';

const Header = () => {
    return (
        <div>
            <div className="opac">
                <div className="header ">
                    <div className="header_opac text-start p-5">
                        <h1 className=' text-white mt-5'>Welcome.</h1>
                        <p className='fs-4 fw-bold text-white mb-5'>Millions of movies, TV shows and people to discover. Explore now.</p>
                        <label className='form-control' htmlFor="">
                            <input className=' search fw-bold fs-5' type="search" placeholder='search' />
                            <button className='btn btn-primary btn_search'>Search</button>
                        </label>
                    </div>
                </div>
            </div>
            <Toggle/>
            <Static/>
        </div>
        
    );
}

export default Header;

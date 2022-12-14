import React from 'react';
import { useSelector } from 'react-redux'

const SeeFavourite = () => {
    const state = useSelector(state => state.favourite)
    return (
        <div className='container-fluid row'>
            <h4 className='text-start'>My Favourite</h4>
            {
                (state.length > 0) && state.map((item, index) => {
                    return (
                        <div className=''>
                            
                            <div className="col-12 my-2">
                                <div className="cardd d-flex  align-items-center shadow">
                                    <img className=' imgages rounded' src={`https://image.tmdb.org/t/p/w500/` + item.poster_path} alt="" />
                                    <div className='mx-1s'>
                                        <h3>{item.name}</h3>
                                        <p>{item.first_air_date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SeeFavourite;

import React from 'react';

const About = (props) => {
    console.log(props);

    return (
        <div>
            <img src={props.poster_path} alt="" />
        </div>
    );
}

export default About;

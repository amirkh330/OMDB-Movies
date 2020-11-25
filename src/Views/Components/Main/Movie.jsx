import React from "react";

const Movie = ({ m }) => {
    const defaultImage =
        "https://images-na.ssl-images-amazon.com/images/I/714hR8KCqaL._SY355_.jpg";
    const poster = m.Poster === "N/A" ? defaultImage : m.Poster;

    return (
        <>
            <div className="movie ">
                <p className="title">{m.Title}</p>
                <img src={poster} alt="" />
                <h5>{m.Year}</h5>
            </div>
        </>
    );
};

export default Movie;

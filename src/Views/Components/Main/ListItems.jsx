import React from "react";
import Movie from "./Movie";
import NotFound from "./../../Pages/NotFound";

const ListItems = ({ movies }) => {
    return (
        <>
            <div className="movies">
                {movies === undefined ? (
                    <NotFound />
                ) : (
                    movies.map((m) => <Movie m={m} key={Math.random()} />)
                )}
            </div>
        </>
    );
};

export default ListItems;

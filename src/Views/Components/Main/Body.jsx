import React, { useState } from "react";
import Header from "./Header";
import ListItems from "./ListItems";

const Body = ({ input, search, setInput, setSearch, movies }) => {
    return (
        <>
            <div className="main">
                <Header
                    input={input}
                    setInput={setInput}
                    search={search}
                    setSearch={setSearch}
                />
                <ListItems movies={movies} />
            </div>
        </>
    );
};

export default Body;

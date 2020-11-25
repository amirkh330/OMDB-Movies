import React, { useEffect, useState } from "react";
import axios from "axios";
import Body from "./Body";
import { Spinner } from "react-bootstrap";

const Main = () => {
    const [search, setSearch] = useState("man");
    const [input, setInput] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const get = async () => {
            setLoading(true);

            try {
                const requrest = await axios.get(
                    ` http://www.omdbapi.com/?apikey=70cc0487&s=${search}&`
                );
                setMovies(requrest.data.Search);
                setLoading(false);              
            } catch (e) {}
        };
        get();
    }, [search]);

    return (
        <>
            {loading === true ? (
                <div className="spiner">
                    <Spinner animation="border" />
                </div>
            ) : (
            <Body
                input={input}
                search={search}
                movies={movies}
                setSearch={setSearch}
                setInput={setInput}
            />
             )} 
        </>
    );
};

export default Main;

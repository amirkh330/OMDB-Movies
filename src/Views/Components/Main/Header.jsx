import React from "react";

const Header = ({setSearch,input,setInput}) => {
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const handleSearch=()=>{
        setSearch(input);
    }

        return (
        <>
            <div id="header" className="row">
                <div id="title" className="col-lg-3 col-md-4 col-sm-3">
                    Amir Movies Search ;)
                </div>
                <div className="col input-form">
                    <input onChange={handleChange} className="input" type="text"/>
                    <button onClick={handleSearch} className="btn btn-warning">Search</button>
                </div>
            </div>
        </>
    );
};

export default Header;
///ishala oke
import React from "react";
import CardList from "../CardList/CardList";

const CatalogList = () => {
    return (
        <div>
            <h1 className="mt-10 mb-10 text-center title_text pl-16 sm:pl-0 mx-auto text-4xl lg:text-5xl font-semibold">Cata<span className="magic font-extrabold">log</span></h1>
            <CardList />
        </div>
    )
}

export default CatalogList;
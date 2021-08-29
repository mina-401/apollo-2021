import React from "react";
import { useQuery,gql } from "@apollo/client";

const GET_MOVIES=gql`
    {
        movies{
            id
            title
        }
    }
`
export default () => {
    const {loading,data}=useQuery(GET_MOVIES);
    console.log(loading);
    return <h1>Home</h1>;
}
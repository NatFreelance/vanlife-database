import React from "react"
import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    if (error instanceof Response && error.status === 302) return null;

    return (
       <>
        <h1>Error: {error.message}</h1>
        <pre>{error.status} - {error.statusText}</pre>
        </>
    )
}
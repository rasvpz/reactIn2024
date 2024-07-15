import { useRouteError } from "react-router-dom"
const Error = () => {
    const err = useRouteError()
    console.log('error:', err)
    return (
        <>
        <h1>Error 404 not found</h1>
        <p>{err.status}: {err.error.message}</p>
        </>
    )
}
export default Error
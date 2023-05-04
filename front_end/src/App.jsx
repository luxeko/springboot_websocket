import './App.css'
import {Route, Routes} from "react-router-dom";
import RenderRouter from "./routers/renderRouter.jsx";
import {listRouter} from "./routers/listRouter.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={`/`}>
                    {RenderRouter(listRouter)}
                </Route>
            </Routes>
        </>
    )
}

export default App

import React, {Suspense} from 'react';
import PrivateRouter from "./privateRouter.jsx";
import {Route} from "react-router-dom";

const RenderRouter = (routers) => {
    return (
        routers.map(({page: Page, path, isPublic, ...rest}) => {
            return (
                <Route element={
                    !isPublic ?
                        <PrivateRouter>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Page/>
                            </Suspense>
                        </PrivateRouter> :
                        <Suspense fallback={<div>Loading...</div>}>
                            <Page/>
                        </Suspense>}
                       path={path}
                       key={path}
                       {...rest}>
                </Route>
            )
        })
    );
};

export default RenderRouter;
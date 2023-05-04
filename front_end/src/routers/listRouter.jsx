import {lazy} from "react";

const BusTable = lazy(() => import("../pages/BusTable.jsx"))

const BusForm = lazy(() => import("../pages/BusForm.jsx"))

export const listRouter = [
    {
        path: "",
        page: BusTable,
        index: true,
        isPublic: true
    },
    {
        path: "/create",
        page: BusForm,
        index: false,
        isPublic: true
    },
    {
        path: "/edit",
        page: BusForm,
        index: false,
        isPublic: true
    }
]
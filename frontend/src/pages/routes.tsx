import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "./welcome";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Welcome />
        }
    ])
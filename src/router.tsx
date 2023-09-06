import { Navigate, createHashRouter as createMyRouter } from "react-router-dom";
import { LessonLayout } from "./layouts/LessonLayout";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { LESSONS } from "./pages/lessons";

export enum QueryParamKey {
    EULA_DIALOG = "eulaDg",
    CHANGELOG_DIALOG = "clgDg",
    SETTINGS_DRAWER = "stgDr",
}

export function createRouter() {
    return createMyRouter([
        {
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "lessons",
                    element: <LessonLayout />,
                    children: LESSONS.map(lesson => ({
                        path: lesson.slug,
                        element: lesson.page,
                    })),
                },
            ],
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ]);
}

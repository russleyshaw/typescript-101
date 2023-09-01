import { createHashRouter as createMyRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { Lesson1Page } from "./pages/lessons/Lesson1Page";
import { LessonLayout } from "./layouts/LessonLayout";

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
                    children: [
                        {
                            path: "1",
                            element: <Lesson1Page />,
                        },
                    ],
                },
            ],
        },
    ]);
}

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");
const { default: Nav } = require("../Nav/Nav");

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>
    }
])

export default router;
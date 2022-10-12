import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>,
            },
            {
                path:'/topics',
                loader:()=>fetch(' https://openapi.programming-hero.com/api/quiz'),
                element:<Topics></Topics>,
            },
            
            {
                path:'/statistics',
                loader:async ()=> {
                   return fetch(' https://openapi.programming-hero.com/api/quiz')
                },
                element:<Statistics></Statistics>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            },
            {
                path:'/quiz/:quizId',
                loader: async ({params}) =>{
                   return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
                },
                element:<Quiz></Quiz>,
            }
        ]
    }
])

export default router;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './page/main';
import PostNote from './page/PostNote';
import Layout from './components/layout/Layout';
import PostList from './page/PostList';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: '/post',
                element: <PostNote />,
            },
            {
                path: '/list',
                element: <PostList />,
            },
            {
                path: '/allList',
                element: <PostList />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;

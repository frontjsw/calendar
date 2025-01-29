import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './page/main';
import Layout from './components/layout/Layout';
import PostCreate from './page/PostCreate';
import MyPage from './page/MyPage';
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
                element: <PostCreate />,
            },
            {
                path: '/list',
                element: <PostList />,
            },
            {
                path: '/mypage',
                element: <MyPage />,
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

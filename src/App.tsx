import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DailyLook from './pages/DailyLook';
import MyPage from './pages/MyPage';
import CoordinationRoom from './pages/CoordinationRoom';
import ResellMarket from './pages/ResellMarket';
import NewMarket from './pages/NewMarket';
import Layout from './layouts/Layout';
import Community from './pages/Community';
import NoTabLayout from './layouts/NoTabLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <DailyLook />,
      },
      {
        path: '/new-market',
        element: <NewMarket />,
      },
      {
        path: '/resell-market',
        element: <ResellMarket />,
      },
      {
        path: '/coordinaton-room',
        element: <CoordinationRoom />,
      },
      {
        path: '/community',
        element: <Community />,
      },
    ],
  },
  {
    path: '/',
    element: <NoTabLayout />,
    children: [
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/dailylook-detail',
        element: <MyPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
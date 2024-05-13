import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../page/home/Home";
import Mainlayout from "../layout/Mainlayout";
import Registration from "../page/registration/Registration";
import Login from "../page/login/Login";
import AddVolunteerPost from "../page/addvolunteerpost/AddVolunteerPost";
import VolunteersPost from "../page/volunteersPost/VolunteersPost";
import VolunteerDetails from "../page/volunteerDetails/VolunteerDetails";
import MyVolunteerPost from "../page/myvolunteerPost/MyVolunteerPost";
import UpdatePost from "../page/updatepost/UpdatePost";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../component/sharecomponet/ErrorPage";
import MyVolunteerRequestPost from "../page/MyVolunteerRequestPost/MyVolunteerRequestPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/volunteersPostHome')
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/addvolunteerpost',
        element: <PrivateRoute><AddVolunteerPost /></PrivateRoute>
      },
      {
        path: '/volunteerPostDetails/:id',
        element: <PrivateRoute>
          <VolunteerDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/volunteersDetails/${params.id}`)
      },
      {
        path: '/volunteersPost',
        element: <VolunteersPost />
      },
      {
        path: 'myvolunteerpost',
        element: <PrivateRoute>
          <MyVolunteerPost />
        </PrivateRoute>
      },
      {
        path: 'updatepost/:id',
        element: <PrivateRoute>
          <UpdatePost />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/volunteersDetails/${params.id}`)
      },
      {
        path:'/my-volunteer-request-post',
        element: <MyVolunteerRequestPost />
      }
    ]
  },
]);

export default router;
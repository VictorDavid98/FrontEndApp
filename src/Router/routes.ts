import CreatePoll from "../Pages/CreatePoll";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import Unauthorized from "../Pages/UnauthorizedPage";
import ReplyPoll from "../Pages/ReplyPoll";
import Results from "../Pages/Results";
import User from "../Pages/User";
import AdminPage from "../Pages/Administrador/InicioAdmin";
import VerUsuariosAdmin from "../Pages/Administrador/VerUsuariosAdmin";
import { Route } from "../types";





const routes: Route[] = [

   
    {
        path: "/",
        component: LandingPage,
        routeType: "GUEST"
    },
    {
        path: "/login",
        component: Login,
        routeType: "GUEST"
    },
    {
        path: "/register",
        component: Register,
        routeType: "GUEST"
    },
    {
        path: "/unauthorized",
        component: Unauthorized,
        routeType: "PRIVATE"
    },
    {
        path: "/user",
        component: User,
        routeType: "PRIVATE",
        allowedRoles: ["ROLE_USER"]
      
    },
    {
        path: "/admin",
        component: AdminPage,
        routeType: "PRIVATE",
        allowedRoles: ["ROLE_ADMIN"]
    },
    {
        path: "/verusuariosadmin",
        component: VerUsuariosAdmin,
        routeType: "PRIVATE",
       
    },
    {
        path: "/createpoll",
        component: CreatePoll,
        routeType: "PRIVATE",
        
    },
    {
        path: "/replypoll/:id",
        component: ReplyPoll,
        routeType: "PUBLIC"
    },
    {
        path: "/results/:id",
        component: Results,
        routeType: "PRIVATE",
        
    },
    {
        path: "*",
        component: NotFound,
        routeType: "PUBLIC"
    }
    
];

export default routes;

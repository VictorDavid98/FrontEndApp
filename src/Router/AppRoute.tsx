import { Route, Redirect, RouteProps, RouteComponentProps } from "react-router";
import { useAuthState } from "../context/authContext";
import { RouteType } from "../types";

interface AppRouteProps extends RouteProps {
  component: any;
  routeType: RouteType;
  allowedRoles?: string[]; // Roles permitidos para la ruta
}

const AppRoute = (props: AppRouteProps) => {
  const {
    component: Component,
    path,
    routeType,
    allowedRoles,
    ...rest
  } = props;

  const user = useAuthState(); // Asegúrate de que user.role sea un string

  const renderComponent = (routeProps: RouteComponentProps) => {
    switch (routeType) {
      case "PRIVATE":
        if (user.isAuthenticated) {
          // Si se especifican roles permitidos, verificar si el rol del usuario está permitido
          if (allowedRoles && user.role && !allowedRoles.includes(user.role)) {
            return <Redirect to="/unauthorized" />;
          }

          return <Component {...routeProps} />;
        } else {
          return <Redirect to="/login" />;
        }

      case "GUEST":
        if (!user.isAuthenticated) {
          return <Component {...routeProps} />;
        } else {
          return <Redirect to="/user" />;
        }

      case "PUBLIC":
        return <Component {...routeProps} />;

      default:
        return <Redirect to="/" />;
    }
  };

  return (
    <Route
      {...rest}
      path={path}
      render={(routeProps) => renderComponent(routeProps)}
    />
  );
};

export default AppRoute;

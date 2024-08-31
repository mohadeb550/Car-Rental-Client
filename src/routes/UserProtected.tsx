
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { jwtDecode } from "jwt-decode";
import { logout } from "../redux/features/authentication/authSlice";
import { ReactNode } from "react";
import { TJwtDecoded } from "./AdminProtected";


export default function UserProtected({children} : { children : ReactNode}) {

  const token  = useAppSelector(state => state.auth.token);
    const dispatch = useAppDispatch();
    

  if(!token){
    return <Navigate to={'/login'}/>
  }

    // decode the jwt token 
    const decoded : TJwtDecoded = jwtDecode(token);
 
    if(decoded?.role === 'user'){
      return children;
      
    }else{
      dispatch(logout());
      <Navigate to={'/login'} />
      return;
    }}

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { ReactNode } from "react";


export default function LoginProtected({children} : { children : ReactNode}) {

  const token  = useAppSelector(state => state.auth.token);

  if(!token){
    return <Navigate to={'/login'}/>
  }

 return children;
}
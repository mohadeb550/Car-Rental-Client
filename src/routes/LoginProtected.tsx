
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";


export default function LoginProtected({children}) {

  const token  = useAppSelector(state => state.auth.token);

  if(!token){
    return <Navigate to={'/login'}/>
  }

 return children;
}
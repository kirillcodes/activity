import { useSelector } from "react-redux";

export const useAuth = () => {
  const { id, token, email } = useSelector((state) => state.user);

  return {
    isAuth: !!token,
    id,
    token,
    email,
  };
};

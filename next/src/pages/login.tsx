import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance } from "keycloak-js";
import { useEffect } from "react";


const LoginPage = () => {
  const {initialized, keycloak} = useKeycloak<KeycloakInstance>();
  
  const { login = () => {}, authenticated } = keycloak || {};

  useEffect(() => {
    if (!initialized) {
      return
    }
    if (!authenticated) {
      login({
        redirectUri: 'http://localhost:3007/private'
      })
    }
  }, [login, authenticated, initialized])

  return null
};

export default LoginPage;

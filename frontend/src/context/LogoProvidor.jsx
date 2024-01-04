import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LogoContext = createContext();

const LogoProvider = ({ children }) => {
  const [logoVeri, setLogoVeri] = useState("");
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const logoId = "6595d88d98c860533b2c4301";
  const setLogo = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/logo/${logoId}`);

      if (response.ok) {
        const data = await response.json();
        setLogoVeri(data.img);
      }
    } catch (error) {
      console.log("Silme hatası:", error);
    }
  };
  setLogo();
  return (
    <LogoContext.Provider
      value={{
        setLogoVeri,
        logoVeri,
      }}
    >
      {children}
    </LogoContext.Provider>
  );
};

export default LogoProvider;

LogoProvider.propTypes = {
  children: PropTypes.node,
};

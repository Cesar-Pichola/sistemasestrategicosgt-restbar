import "./style/login.css";
import logo from "../../../src/assets/img/logo-sistema.png";
import { CiUser, CiLock } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

import { InputText } from "../../components/input/input";
function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content-father">
        <div className="content-logo-login"></div>
        <img src={logo} alt="Logo" width={230} />
        <div className="content-login">
          <div className="">
            <p className="label-access">ACCESO AL SISTEMA</p>
            <p className="label-information">
              Ingrese sus credenciales para acceder a su cuenta
            </p>
          </div>

          <div>
            <div>
              <InputText Icon={CiUser} placeholder={"Usuario"} type={"text"} />
            </div>
            <InputText
              Icon={CiLock}
              placeholder={"Contraseña"}
              type={"password"}
            />
          </div>
          <button
            onClick={() => {
              navigate("/restauran/restauran");
            }}
            className="content-button"
          >
            Iniciar sesion
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

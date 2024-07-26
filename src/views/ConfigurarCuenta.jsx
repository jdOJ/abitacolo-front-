import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";

const ConfigurarCuenta = () => {
  const { actions } = useContext(Context);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    address: "",
    nationality: "",
    birth_date: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    setPasswordMismatch(
      formData.password !== confirmPassword && confirmPassword !== ""
    );
  }, [formData.password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      return;
    }
    const filledFormData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );
    actions.editUser(filledFormData);
  };

  return (
    <div className="px-20 py-5 bg-abitacoloGray">
      <p className="text-2xl py-5">Configurar cuenta:</p>
      <form onSubmit={handleSubmit}>
        <fieldset className="">
          <legend>Información personal</legend>
          <div className="p-10">
            <label className="p-5 text-lg font-bold" htmlFor="nombre">
              Nombre:
            </label>
            <input
              className="p-2 m-5 rounded-md"
              type="text"
              id="nombre"
              name="name"
              placeholder="Ingrese su nombre"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label className="mx-5 text-lg font-bold" htmlFor="contraseña">
              Nueva contraseña:
            </label>
            <input
              className="p-2 rounded-md"
              type="password"
              name="password"
              id="contraseña"
              placeholder="Ingrese su contraseña"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
            />
            <label
              className="mx-5 text-lg font-bold"
              htmlFor="confirmarContraseña"
            >
              Confirmar contraseña:
            </label>
            <input
              className="p-2 rounded-md"
              type="password"
              name="confirmPassword"
              id="confirmarContraseña"
              placeholder="Ingrese su contraseña"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {passwordMismatch && (
              <p className="text-red-500 font-bold mt-4">
                Las contraseñas no coinciden.
              </p>
            )}{" "}
          </div>
          <div className="p-10">
            <label className="mx-5 text-lg font-bold" htmlFor="email">
              Email:
            </label>
            <input
              className="p-2 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label className="mx-5 text-lg font-bold" htmlFor="direccion">
              Dirección:
            </label>
            <input
              className="p-2 rounded-md"
              type="text"
              placeholder="Ingrese su dirección"
              name="address"
              id="direccion"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="p-10">
            <label className="mx-5 text-lg font-bold" htmlFor="nacionalidad">
              Nacionalidad:
            </label>
            <input
              className="p-2 rounded-md"
              type="text"
              name="nationality"
              id="nacionalidad"
              placeholder="Ingrese su nacionalidad"
              autoComplete="country-name"
              value={formData.nationality}
              onChange={handleChange}
            />

            <label
              className="mx-5 text-lg font-bold"
              htmlFor="fecha_nacimiento"
            >
              Fecha de nacimiento:
            </label>
            <input
              className="p-2 rounded-md"
              type="date"
              id="fecha_nacimiento"
              name="birth_date"
              autoComplete="bday"
              value={formData.birth_date}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <button
          className="bg-abitacoloGreen hover:ring-2 ring-green-900 px-3 py-2 rounded-md"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ConfigurarCuenta;

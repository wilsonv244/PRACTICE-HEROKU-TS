import React, { useState } from "react";
import { persona } from "../Interface/Interface";
const Usuario = () => {
  const [login, setLogin] = useState<persona>({ id: "", nombre: "" });
  const [listaLogin, setListaLogin] = useState<persona[]>([{id:"", nombre:""}])
  const mostrarLogin = (e:any) => {
    console.log(e)
    setLogin({
      id: e.target.value,
      nombre: "Wilson Vargas",
    });
  };
  const printDatos = (e:any)=>{
    console.log(e)
    let id:number  = 0;
    let nombre:string  = "";
    if(e.target.name ==="numero"){
        id = e.target.value
    }else 
        if(e.target.name ==="nombre"){
        nombre = e.target.value
    }
    console.log(id)
    console.log(nombre)
  }
  return (
    <div className="mt-5">
        <h3>Usuario a Enviar</h3>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          ID
        </span>
        <input
          type="text"
          className="form-control w-10"
          placeholder="Escriba un numero"
          name="numero"
          onChange={printDatos}
          />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          NOMBRE
        </span>
        <input
          type="text"
          className="form-control w-10"
          onChange={printDatos}
          placeholder="Escriba un numero"
          name="nombre"
        />
      </div>
      <button
        className="btn btn-outline-primary mt-2 ml-5"
        onClick={mostrarLogin}
      >
        Enviar Usuario
      </button>
    </div>
  );
};

export default Usuario;

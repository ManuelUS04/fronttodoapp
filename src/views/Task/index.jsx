import React, { useState, useEffect  } from "react";
import { BiRename } from "react-icons/bi";
import storage from "../../Storage/storage";
import Swal from "sweetalert2";

const Form = () => {
    const [dataList, setDataList] = useState([]);
  const [formulario, setFormulario] = useState({
    title: "",
    description: "",
    completed: "",
  });
  
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post('/task-create', formulario)
    .then(async result => {
        getDataList();
        Swal.fire(result.data.message, '', 'success');
    }).catch(async error => {
        console.log('error', error)
    });
  };

  const getDataList = async(e) => {
    await axios.post('/task-list', formulario)
    .then(async result => {
        console.log('resultDataForm', result)
        setDataList(result.data.tasks);
    }).catch(async error => {
        console.log('error', error)
    });
  }

  useEffect(() => {
    console.log('storahe',storage.get("authUser").id)
    getDataList();
  }, []);
  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <div className="row">

          <div className="col-12 col-md-12">
            <div className="mb-3">
              <label className="form-label">Titulo</label>
              <div className="input-group">
                <span className="input-group-text">
                  <BiRename />
                </span>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={formulario.dni}
                  onChange={(e) =>
                    setFormulario({ ...formulario, title: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12">
            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <div className="input-group">
                <span className="input-group-text">
                  <BiRename />
                </span>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={formulario.name}
                  onChange={(e) =>
                    setFormulario({ ...formulario, description: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="mb-3">
              <label className="form-label">Completado</label>
              <div className="input-group">
                <span className="input-group-text">
                  <BiRename />
                </span>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={formulario.lastName}
                  onChange={(e) =>
                    setFormulario({ ...formulario, completed: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 d-flex justify-content-center">
            <button className="btn btn-primary me-2" type="submit">
              Guardar
            </button>
            <button className="btn btn-danger ms-2" type="reset">
              Cancelar
            </button>
          </div>
        </div>
      </form>

      <div>
      <table className="table mt-2">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Completado</th>
            </tr>
        </thead>
        <tbody>
            {dataList.map((item, index) => (
                <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.completed}</td>
                </tr>
            ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;

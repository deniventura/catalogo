import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const NuevosItem = () => {
  //validacion y leer los datos del formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      marca: "",
      precio: "",
      cantidad: "",
      cajasdisponibles: "",
      descripcion: "",
      imagen: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Los productos deben tener al menos 3 caracteres")
        .required("El nombre es obligatorio"),
      marca: Yup.string()
        .min(2, "La marca debe tener al menos 2 caracteres")
        .required("La Marca es obligatorio"),
      precio: Yup.number()
        .min(1, "Debes agregar el Precio")
        .required("El precio es obligatorio"),
      cantidad: Yup.number()
        .min(1, "Debes agregar la cantidad")
        .required("La cantidad es obligatoria"),
      cajasdisponibles: Yup.number()
        .min(0, "Indique la disponibilidad del producto")
        .required("La disponibilidad es obligatoria"),
      descripcion: Yup.string()
        .min(8, "Agrega la descripci{on del producto")
        .required("Favor ingrese la descripcion del productos"),
    }),
    onSubmit: (datos) => {
      console.log(datos);
    },
  });

  return (
    <>
      <h1 className="text-3xl font-light mb-4 text-center">Nuevos Item</h1>
      <div className="justify-center flex mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre:
              </label>
              <input
                className="shadow appearance-none 
              border rounded w-full py-2 px-3
               text-gray-700 leading-tight
               focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nuevo Producto"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.nombre && formik.errors.nombre ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 textred-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Precio"
              >
                Marca:
              </label>
              <input
                className="shadow appearance-none 
              border rounded w-full py-2 px-3
               text-gray-700 leading-tight
               focus:outline-none focus:shadow-outline"
                id="marca"
                type="text"
                placeholder="Marca"
                value={formik.values.marca}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.marca && formik.errors.marca ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 textred-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.marca}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Precio"
              >
                Precio:
              </label>
              <input
                className="shadow appearance-none 
              border rounded w-full py-2 px-3
               text-gray-700 leading-tight
               focus:outline-none focus:shadow-outline"
                id="precio"
                type="decimal"
                min="0"
                placeholder="Precio Producto"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.precio && formik.errors.precio ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 textred-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Precio"
              >
                Cantidad:
              </label>
              <input
                className="shadow appearance-none 
              border rounded w-full py-2 px-3
               text-gray-700 leading-tight
               focus:outline-none focus:shadow-outline"
                id="cantidad"
                type="number"
                placeholder="Cantidad disponible"
                value={formik.values.cantidad}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.cantidad && formik.errors.cantidad ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 textred-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.cantidad}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Precio"
              >
                Cajas disponibles:
              </label>
              <input
                className="shadow appearance-none 
              border rounded w-full py-2 px-3
               text-gray-700 leading-tight
               focus:outline-none focus:shadow-outline"
                id="cajasdisponibles"
                type="number"
                placeholder="Cantidad disponible"
                value={formik.values.cajasdisponibles}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.cajasdisponibles &&
            formik.errors.cajasdisponibles ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 textred-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.cajasdisponibles}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Precio"
              >
                Descripción:
              </label>
              <textarea
                className="shadow appearance-none 
              border rounded w-full py-2 px-3
               text-gray-700 leading-tight
               focus:outline-none focus:shadow-outline h-40"
                id="descripcion"
                type="text"
                placeholder="Descripción"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.descripcion && formik.errors.descripcion ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 textred-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.descripcion}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Imagen"
              >
                Imagen:
              </label>
              <input
                className="shadow appearance-none 
              border rounded w-full py-2 px-3
               text-gray-700 leading-tight
               focus:outline-none focus:shadow-outline"
                id="Imagen"
                type="file"
                value={formik.values.imagen}
                onChange={formik.handleChange}
              />
            </div>

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900
             w-full mt-5 p-2 text-white uppercase font-bold"
              value="Agregar Producto"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevosItem;

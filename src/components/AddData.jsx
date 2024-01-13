// src/AddData.js
import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { IoMdPersonAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function AddData({ currentItem, setCurrentItem }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    whatsapp: "",
    hotel: "",
    tour: "",
    fechaViaje: "",
    precio: "",
    notas: "",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (currentItem) {
      setFormData({ ...currentItem });
    } else {
      setFormData({
        nombre: "",
        apellidos: "",
        whatsapp: "",
        hotel: "",
        tour: "",
        fechaViaje: "",
        precio: "",
        notas: "",
      });
    }
  }, [currentItem]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación para los campos
    if (
      !formData.nombre.trim() ||
      !formData.apellidos.trim() ||
      !formData.whatsapp.trim() ||
      !formData.hotel.trim() ||
      !formData.tour.trim() ||
      !formData.fechaViaje.trim() ||
      !formData.precio.trim()
    ) {
      setError(true);
      return;
    }

    if (currentItem) {
      // Actualizar ítem existente
      const itemDocRef = doc(db, "items", currentItem.id);
      try {
        await updateDoc(itemDocRef, { ...formData });
      } catch (error) {
        console.error("Error al actualizar el documento:", error);
      }
    } else {
      // Agregar nuevo ítem
      try {
        await addDoc(collection(db, "items"), { ...formData });
      } catch (error) {
        console.error("Error al añadir el documento:", error);
      }
    }

    setFormData({
      nombre: "",
      apellidos: "",
      whatsapp: "",
      hotel: "",
      tour: "",
      fechaViaje: "",
      precio: "",
      notas: "",
    });
    setCurrentItem(null);
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 items-start border p-10 rounded-lg"
    >
      {error && (
        <div className="bg-red-100 text-red-500 border border-red-500 p-3 lg:col-span-3 text-center font-bold">
          Ingresa todos los campos mi king
        </div>
      )}
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleInputChange}
        placeholder="Nombre"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="apellidos"
        value={formData.apellidos}
        onChange={handleInputChange}
        placeholder="Apellidos"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleInputChange}
        placeholder="WhatsApp"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="hotel"
        value={formData.hotel}
        onChange={handleInputChange}
        placeholder="Hotel"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="tour"
        value={formData.tour}
        onChange={handleInputChange}
        placeholder="Tour"
        className="border p-2 rounded"
      />
      <input
        type="date"
        name="fechaViaje"
        value={formData.fechaViaje}
        onChange={handleInputChange}
        placeholder="Fecha de Viaje"
        className="border p-2 rounded"
      />
      <input
        type="number"
        name="precio"
        value={formData.precio}
        onChange={handleInputChange}
        placeholder="Precio"
        className="border p-2 rounded"
      />
      <textarea
        type="text"
        name="notas"
        value={formData.notas}
        onChange={handleInputChange}
        placeholder="Notas del Cliente"
        cols="30"
        rows="1"
        className="lg:col-span-2  border p-2"
      />
      <button
        type="submit"
        className="bg-black hover:bg-neutral-800 transition-all duration-100 text-white py-2 rounded lg:col-span-3"
      >
        {currentItem ? (
          <div className="flex justify-center gap-2 items-center">
            {" "}
            <MdEdit />
            Guardar Cambios
          </div>
        ) : (
          <div className="flex justify-center gap-2 items-center">
            <IoMdPersonAdd />
            Agregar
          </div>
        )}
      </button>
      {currentItem && (
        <button
          className="bg-neutral-100 py-2 w-full border lg:col-span-3 hover:bg-slate-200 transition-all duration-100"
          onClick={() => setCurrentItem(null)}
        >
          Cancelar Edición
        </button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default AddData;

// src/ShowData.js
import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ShowData({ setCurrentItem }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "items"), (snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsubscribe();
  }, []);

  const deleteItem = async (id) => {
    const itemDocRef = doc(db, "items", id);
    try {
      await deleteDoc(itemDocRef);
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
    }
  };

  const selectForEdit = (item) => {
    setCurrentItem(item);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {items.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="border-collapse table-auto w-full text-sm ">
            <thead className="bg-slate-50">
              <tr>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Nombre
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Apellidos
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Whatsapp
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Hotel
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Tour
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Fecha de Viaje
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Precio
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Notas del Cliente
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
              {items.map((item) => (
                <tr>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {item.nombre}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {item.apellidos}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {item.whatsapp}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {item.hotel}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {item.tour}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {item.fechaViaje}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {item.precio}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {item.notas}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    <div className="flex gap-3">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 transition-all duration-100 text-white py-2 px-5 rounded flex gap-2 items-center"
                        onClick={() => selectForEdit(item)}
                      >
                        <MdEdit />
                        Editar
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 transition-all duration-100 text-white py-2 px-5 rounded flex gap-2 items-center"
                        onClick={() => deleteItem(item.id)}
                      >
                        <MdDelete /> Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Aun no tienes Clientes Ingresa almenos UNO</div>
      )}
    </div>
  );
}

export default ShowData;

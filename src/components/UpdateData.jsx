// src/UpdateData.js
import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const UpdateData = ({ id }) => {
  const [nuevoNombre, setNuevoNombre] = useState('');

  const handleUpdate = async () => {
    const itemDocRef = doc(db, 'items', id);
    try {
      await updateDoc(itemDocRef, { nombre: nuevoNombre });
      setNuevoNombre('');
    } catch (error) {
      console.error("Error al actualizar el documento: ", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={nuevoNombre} 
        onChange={(e) => setNuevoNombre(e.target.value)} 
      />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
};

export default UpdateData;

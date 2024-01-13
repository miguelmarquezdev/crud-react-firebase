// src/DeleteData.js
import React from 'react';
import { db } from './firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';

const DeleteData = ({ id }) => {
  const handleDelete = async () => {
    const itemDocRef = doc(db, 'items', id);
    try {
      await deleteDoc(itemDocRef);
    } catch (error) {
      console.error("Error al eliminar el documento: ", error);
    }
  };

  return (
    <button onClick={handleDelete}>Eliminar</button>
  );
};

export default DeleteData;

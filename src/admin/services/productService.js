import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const productsRef = collection(db, "products");

// Get Products

export const getProducts = async () => {
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
};

// Add Product

export const addProduct = async (product) => {
  await addDoc(productsRef, {
    ...product,
    createdAt: serverTimestamp(),
  });
};

// Update Product

export const updateProduct = async (id, product) => {
  await updateDoc(doc(db, "products", id), product);
};

// Delete Product

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
};
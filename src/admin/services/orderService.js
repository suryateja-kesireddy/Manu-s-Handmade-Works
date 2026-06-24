import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

// Save Order

export const saveOrder = async (orderData) => {
  const docRef = await addDoc(
    collection(db, "orders"),
    {
      ...orderData,
      paymentStatus: "Pending",
      orderStatus: "Pending",
      createdAt: serverTimestamp(),
    }
  );

  return docRef.id;
};

// Get All Orders

export const getOrders = async () => {
  const snapshot = await getDocs(
    collection(db, "orders")
  );

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
};

// Update Order Status

export const updateOrderStatus = async (
  id,
  status
) => {
  const orderRef = doc(db, "orders", id);

  await updateDoc(orderRef, {
    orderStatus: status,
  });
};

// Update Payment Status

export const updatePaymentStatus = async (
  id,
  status
) => {
  const orderRef = doc(db, "orders", id);

  await updateDoc(orderRef, {
    paymentStatus: status,
  });
};
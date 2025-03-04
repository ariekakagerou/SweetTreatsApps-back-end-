import express from "express";
import db from "../config/config.js"; // Pastikan ini mengimpor db yang benar
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"; // Impor fungsi yang diperlukan

const router = express.Router();

// Create Payment
router.post("/", async(req, res) => {
    try {
        const payment = req.body;
        const docRef = await addDoc(collection(db, "payments"), payment);
        res.status(201).send({ id: docRef.id, ...payment });
    } catch (error) {
        console.error("Error adding payment:", error);
        res.status(400).send(error);
    }
});

// Read Payments
router.get("/", async(req, res) => {
    try {
        const snapshot = await getDocs(collection(db, "payments"));
        const payments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(payments);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update Payment
router.put("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const paymentRef = doc(db, "payments", id);
        await updateDoc(paymentRef, req.body);
        res.status(200).send({ id, ...req.body });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete Payment
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const paymentRef = doc(db, "payments", id);
        await deleteDoc(paymentRef);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router; // Ekspor router
import express from "express";
import db from "../config/config.js"; // Pastikan ini mengimpor db yang benar
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"; // Impor fungsi yang diperlukan

const router = express.Router();

// Create Item
router.post("/", async(req, res) => {
    try {
        const item = req.body;
        const docRef = await addDoc(collection(db, "inventory"), item);
        res.status(201).send({ id: docRef.id, ...item });
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(400).send(error);
    }
});

// Read Items
router.get("/", async(req, res) => {
    try {
        const snapshot = await getDocs(collection(db, "inventory"));
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(items);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update Item
router.put("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const itemRef = doc(db, "inventory", id);
        await updateDoc(itemRef, req.body);
        res.status(200).send({ id, ...req.body });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete Item
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const itemRef = doc(db, "inventory", id);
        await deleteDoc(itemRef);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router; // Ekspor router
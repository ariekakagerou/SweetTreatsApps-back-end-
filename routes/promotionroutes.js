import express from "express";
import db from "../config/config.js"; // Pastikan ini mengimpor db yang benar
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"; // Impor fungsi yang diperlukan

const router = express.Router();

// Create Promotion
router.post("/", async(req, res) => {
    try {
        const promotion = req.body;
        const docRef = await addDoc(collection(db, "promotions"), promotion);
        res.status(201).send({ id: docRef.id, ...promotion });
    } catch (error) {
        console.error("Error adding promotion:", error);
        res.status(400).send(error);
    }
});

// Read Promotions
router.get("/", async(req, res) => {
    try {
        const snapshot = await getDocs(collection(db, "promotions"));
        const promotions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(promotions);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update Promotion
router.put("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const promotionRef = doc(db, "promotions", id);
        await updateDoc(promotionRef, req.body);
        res.status(200).send({ id, ...req.body });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete Promotion
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const promotionRef = doc(db, "promotions", id);
        await deleteDoc(promotionRef);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router; // Ekspor router
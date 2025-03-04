import express from "express";
import config from '../config/config.js'; // Pastikan jalur relatifnya benar
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"; // Impor fungsi yang diperlukan

const router = express.Router();

// Create Product
router.post("/", async(req, res) => {
    try {
        const product = req.body;
        const docRef = await addDoc(collection(config, "products"), product);
        res.status(201).send({ id: docRef.id, ...product });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(400).send(error);
    }
});

// Read Products
router.get("/", async(req, res) => {
    try {
        const snapshot = await getDocs(collection(config, "products"));
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update Product
router.put("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const productRef = doc(config, "products", id);
        await updateDoc(productRef, req.body);
        res.status(200).send({ id, ...req.body });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete Product
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const productRef = doc(config, "products", id);
        await deleteDoc(productRef);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router; // Ekspor router
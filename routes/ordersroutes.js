const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/ordersController');
const { db } = require('../config/firebase');
const { collection, getDocs, addDoc } = require('firebase/firestore');

// Get All Orders
router.get('/get', async(req, res) => {
    try {
        const ordersCollection = collection(db, 'orders');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(ordersList);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add Order
router.post('/post', async(req, res) => {
    try {
        const newOrder = req.body;
        const docRef = await addDoc(collection(db, 'orders'), newOrder);
        res.status(201).send({ id: docRef.id, ...newOrder });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
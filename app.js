import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userroutes.js';
import productRoutes from './routes/productroutes.js';
import paymentRoutes from './routes/paymentsroutes.js';
import inventoryRoutes from './routes/inventoryroutes.js';
import promotionRoutes from './routes/promotionroutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rute
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/promotions', promotionRoutes);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
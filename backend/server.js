import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import radiantRoutes from './routes/radiantRoutes.js';
import vendorRoutes from "./routes/vendorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import inverterRoutes from './routes/inverterRoutes.js';
import solarInverterRoutes from './routes/solarInverterRoutes.js';
import collectionRoutes from './routes/collectionRoutes.js';
import batteryRoutes from './routes/batteryRoutes.js';
import catinverterRoutes from './routes/catinverterRoutes.js';
import moduleRoutes from './routes/moduleRoutes.js';
import projectRoutes from './routes/projectRoutes.js';






// ✅ Load .env variables
dotenv.config();

// ✅ Optional: fallback in case .env doesn't load
if (!process.env.JWT_SECRET) {
  console.warn("⚠️ Warning: JWT_SECRET not set in .env. Using fallback secret.");
  process.env.JWT_SECRET = 'fallbacksecretkey';
}

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb://localhost:27017/productDB')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// ✅ Root test route
app.get('/', (req, res) => {
  res.send('Server is running fine!');
});

// ✅ API routes
app.use('/api/radiant', radiantRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/inverter', inverterRoutes);
app.use('/api/solarinverter', solarInverterRoutes);
app.use('/api/collection', collectionRoutes);
app.use('/api/battery', batteryRoutes);
app.use('/api/catinverter', catinverterRoutes);
app.use('/api/module', moduleRoutes);
app.use('/api/projects', projectRoutes);






// ✅ Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

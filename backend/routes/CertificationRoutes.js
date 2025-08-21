import express from 'express';
import {
  createCertification,
  getCertifications,
  getCertificationById,
  updateCertification,
  deleteCertification,
} from '../controllers/certificationController.js';

const router = express.Router();

router.post('/', createCertification);         // Create new
router.get('/', getCertifications);            // Get all
router.get('/:id', getCertificationById);      // Get by ID
router.put('/:id', updateCertification);       // Update
router.delete('/:id', deleteCertification);    // Delete

export default router;

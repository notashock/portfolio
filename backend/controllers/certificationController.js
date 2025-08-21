import Certification from "../models/certificationModel.js";

// @desc    Get all certifications
// @route   GET /api/certifications
// @access  Public (or Private if you want admin-only)
export const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find();
    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single certification by ID
// @route   GET /api/certifications/:id
// @access  Public
export const getCertificationById = async (req, res) => {
  try {
    const cert = await Certification.findById(req.params.id);
    if (!cert) return res.status(404).json({ message: "Certification not found" });
    res.status(200).json(cert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new certification
// @route   POST /api/certifications
// @access  Private (Admin)
export const createCertification = async (req, res) => {
  try {
    const { title, issuer, date, link } = req.body;
    const newCert = new Certification({ title, issuer, date, link });
    await newCert.save();
    res.status(201).json(newCert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a certification
// @route   PUT /api/certifications/:id
// @access  Private (Admin)
export const updateCertification = async (req, res) => {
  try {
    const cert = await Certification.findById(req.params.id);
    if (!cert) return res.status(404).json({ message: "Certification not found" });

    cert.title = req.body.title || cert.title;
    cert.issuer = req.body.issuer || cert.issuer;
    cert.date = req.body.date || cert.date;
    cert.link = req.body.link || cert.link;

    const updatedCert = await cert.save();
    res.status(200).json(updatedCert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a certification
// @route   DELETE /api/certifications/:id
// @access  Private (Admin)
export const deleteCertification = async (req, res) => {
  try {
    const cert = await Certification.findById(req.params.id);
    if (!cert) return res.status(404).json({ message: "Certification not found" });

    await cert.deleteOne();
    res.status(200).json({ message: "Certification removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import * as service from "../services/adoption.service.js";

export const getAllAdoptions = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

export const getAdoptionById = async (req, res) => {
  const adoption = await service.getById(req.params.id);
  if (!adoption) return res.status(404).json({ error: "Not found" });
  res.json(adoption);
};

export const createAdoption = async (req, res) => {
  const newAdoption = await service.create(req.body);
  res.status(201).json(newAdoption);
};

export const deleteAdoption = async (req, res) => {
  const deleted = await service.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Deleted" });
};
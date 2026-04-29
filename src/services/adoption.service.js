let adoptions = [];

export const getAll = async () => adoptions;

export const getById = async (id) =>
  adoptions.find(a => a.id === id);

export const create = async (data) => {
  const newItem = { id: Date.now().toString(), ...data };
  adoptions.push(newItem);
  return newItem;
};

export const remove = async (id) => {
  const index = adoptions.findIndex(a => a.id === id);
  if (index === -1) return false;
  adoptions.splice(index, 1);
  return true;
};
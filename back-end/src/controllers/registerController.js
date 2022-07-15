const registerService = require('../services/registerService');

const registerUser = async (req, res) => {
  const payload = req.body;
  try {
    const userCreated = await registerService.registerUser(payload);
    if (!userCreated) return res.status(409).json({ message: 'Invalid email or password' });
    return res.status(201).json(userCreated);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  registerUser,
};

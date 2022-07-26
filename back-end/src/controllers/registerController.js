const registerService = require('../services/registerService');

const registerUser = async (req, res) => {
  const payload = req.body;
  try {
    const userCreated = await registerService.registerUser(payload);
    if (userCreated.status) {
      return res.status(userCreated.status).json({ message: userCreated.message });
    }
    return res.status(201).json(userCreated);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  registerUser,
};

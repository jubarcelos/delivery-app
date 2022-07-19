const loginService = require('../services/loginService');

const login = async (req, res, _next) => {
  try {
    const result = await loginService.login(req.body);
    if (result === false) {
      return res.status(404).json({ message: 'Not found' });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send({ error: `Erro: ${error.message}` });
  }
};

module.exports = { login };

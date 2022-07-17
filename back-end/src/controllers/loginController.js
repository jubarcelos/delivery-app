const loginService = require('../services/loginService');

const login = async (req, res, _next) => {
  try {
    const result = await loginService.login(req.body);
    console.log(result);
    if (result.err) {
      return res.status(400).json(result);
    }
    return res.json(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

module.exports = { login };
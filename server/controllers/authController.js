export function getRegisterPage(req, res) {
  res.render("common/auth/register");
};

export function getLoginPage(req, res) {
  res.render("common/auth/login");
};
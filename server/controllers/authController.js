exports.getRegisterPage = function (req, res) {
  res.render("common/auth/register");
};

exports.getLoginPage = function (req, res) {
  res.render("common/auth/login");
};

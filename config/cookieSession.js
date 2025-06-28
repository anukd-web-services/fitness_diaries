const cookieSession = require("cookie-session");

const sessionConfig = cookieSession({
  name: "session",
  keys: [process.env.SESSION_SECRET || "thisshouldbeabettersecret"],
  maxAge: 1000 * 60 * 60 * 24, // 24 hours
});

module.exports = sessionConfig;

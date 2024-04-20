const express = require('express');
const server = express();
const port = 8000;
const cors = require('cors');
const passport = require('passport');
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const jwt = require('jsonwebtoken');
server.use(passport.initialize());
const { Strategy, ExtractJwt } = require('passport-jwt');
const { checkUser } = require('./data');

const passportJwt = (key) => {
  passport.use(
    new Strategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: key,
      },
      async (payload, done) => {
        try {
          const user = checkUser(payload.username);
          if (!user) {
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = checkUser(username, password);

  if (!user) {
    res.status(400).send({
      message: 'Kata sandi tidak valid',
      status: 400
    });
    return;
  }
  if (user === undefined) {
    res.status(400).send({
      message: 'Login gagal, user tidak ditemukan',
      status: 400
    });
    return;
  }

  const token = jwt.sign({
    username: user.username
  }, user.key, {
    expiresIn: '1h'
  });

  passportJwt(user.key);
  res.send({
    message: 'Login berhasil',
    status: 200,
    token: token
  });
});

const auth = passport.authenticate('jwt', { session: false });
server.get('/profile', auth, (req, res) => {
  const user = req.user;
  res.send({
    message: 'Profile',
    user
  });
});

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

const dataUsers = [
  {
    id: '12cwqdq-2cw233-2c2c2c',
    nama: 'Andi Agung',
    email: 'andi_agung@mail.com',
    username: "085171079687",
    password: 'salamakinah',
    key: 'hanyaAirMata'
  },
  {
    id: '12cw232qdq-2cw233-2232c2c',
    nama: 'Budi Santoso',
    email: 'budi@gmail.com',
    username: "085151515151",
    password: 'jowoking',
    key: 'jowoking'
  }
]

const checkUser = (username, password) => {
  const user = dataUsers.find(user => user.username === username);
  if (user) {
    if (user.password === password) {
      return user;
    }
  }
  return false;
}

module.exports = {
  dataUsers,
  checkUser
}


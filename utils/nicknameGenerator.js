const nicknames = [
  '바바',
  '바이리',
  '바비',
  '하늘',
  '몽이',
  '루루',
  '뽀송이',
  '치치',
  '쪼꼬미',
];

function getRandomNickname() {
  const randomIndex = Math.floor(Math.random() * nicknames.length);
  return nicknames[randomIndex];
}

module.exports = getRandomNickname;

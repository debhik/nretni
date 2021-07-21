const K_SIZE = 30;
const pin_main={
  position: 'relative',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'red',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
}
const pins1 = {
  ...pin_main,
  backgroundColor: 'red',


};
const pins2 = {
  ...pin_main,
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  backgroundColor: 'white',

};
const pins3 = {
  ...pin_main,
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates

  backgroundColor: 'yellow',

};

const pinsHover1 = {
  ...pins1,
  border: '5px solid #3f51b5',
  color: '#f44336'
};
const pinsHover2 = {
  ...pins2,
  border: '5px solid #3f51b5',
  color: '#f44336'
};
const pinsHover3 = {
  ...pins3,
  border: '5px solid #3f51b5',
  color: '#f44336'
};

export {pins1, pinsHover1, pins2, pinsHover2, pins3, pinsHover3, K_SIZE};

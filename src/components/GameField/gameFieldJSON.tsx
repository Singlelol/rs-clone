const gameField = [
  {
    id: 1,
    left: 'N',
    top: 'N',
  },
  {
    id: 2,
    top: 'N',
  },
  {
    id: 3,
    top: 'N',
  },
  {
    id: 4,
    top: 'N',
  },
  {
    id: 5,
    top: 'N',
  },
  {
    id: 6,
    top: 'N',
  },
  {
    id: 7,
    top: 'N',
  },
  {
    id: 8,
    top: 'N',
  },
  {
    id: 9,
    top: 'N',
  },
  {
    id: 10,
    top: 'N',
  },
  {
    id: 11,
    top: 'N',
  },
  {
    id: 12,
    top: 'N',
    right: 'N',
    finish: 'Y',
  },
  {
    id: 13,
    left: 'N',
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
  {
    id: 18,
  },
  {
    id: 19,
  },
  {
    id: 20,
  },
  {
    id: 21,
    finish: 'Y',
  },
  {
    id: 22,
    finish: 'Y',
  },
  {
    id: 23,
    finish: 'Y',
  },
  {
    id: 24,
    right: 'N',
    finish: 'Y',
  },
  {
    id: 25,
    left: 'N',
  },
  {
    id: 26,
  },
  {
    id: 27,
    bottom: 'N',
  },
  {
    id: 28,
    bottom: 'N',
  },
  {
    id: 29,
    bottom: 'N',
  },
  {
    id: 30,
  },
  {
    id: 31,
    bottom: 'N',
  },
  {
    id: 32,
    bottom: 'N',
  },
  {
    id: 33,
    bottom: 'N',
  },
  {
    id: 34,
    bottom: 'N',
  },
  {
    id: 35,
    bottom: 'N',
  },
  {
    id: 36,
    right: 'N',
  },
  {
    id: 37,
    left: 'N',
  },
  {
    id: 38,
    right: 'N',
  },
  {
    id: 39,
    left: 'N',
    top: 'N',
  },
  {
    id: 40,
    right: 'N',
    top: 'N',
  },
  {
    id: 41,
    left: 'N',
    top: 'N',
  },
  {
    id: 42,
  },
  {
    id: 43,
    right: 'N',
    top: 'N',
  },
  {
    id: 44,
    left: 'N',
    top: 'N',
  },
  {
    id: 45,
    top: 'N',
  },
  {
    id: 46,
    top: 'N',
  },
  {
    id: 47,
    right: 'N',
    top: 'N',
  },
  {
    id: 48,
    right: 'N',
    left: 'N',
  },
  {
    id: 49,
    left: 'N',
  },
  {
    id: 50,
  },
  {
    id: 51,
  },
  {
    id: 52,
    right: 'N',
  },
  {
    id: 53,
    left: 'N',
  },
  {
    id: 54,
  },
  {
    id: 55,
  },
  {
    id: 56,
  },
  {
    id: 57,
  },
  {
    id: 58,
  },
  {
    id: 59,
  },
  {
    id: 60,
    right: 'N',
  },
  {
    id: 61,
    left: 'N',
  },
  {
    id: 62,
    right: 'N',
  },
  {
    id: 63,
    right: 'N',
    bottom: 'N',
  },
  {
    id: 64,
    bottom: 'N',
  },
  {
    id: 65,
  },
  {
    id: 66,
    bottom: 'N',
  },
  {
    id: 67,
    bottom: 'N',
    right: 'N',
  },
  {
    id: 68,
    bottom: 'N',
    left: 'N',
  },
  {
    id: 69,
    bottom: 'N',
  },
  {
    id: 70,
  },
  {
    id: 71,
    bottom: 'N',
    right: 'N',
  },
  {
    id: 72,
    left: 'N',
    right: 'N',
  },
  {
    id: 73,
    left: 'N',
  },
  {
    id: 74,
    right: 'N',
  },
  {
    id: 75,
    left: 'N',
    top: 'N',
  },
  {
    id: 76,
    top: 'N',
  },
  {
    id: 77,
  },
  {
    id: 78,
    top: 'N',
  },
  {
    id: 79,
    right: 'N',
    top: 'N',
  },
  {
    id: 80,
    left: 'N',
    top: 'N',
  },
  {
    id: 81,
    top: 'N',
  },
  {
    id: 82,
  },
  {
    id: 83,
    right: 'N',
    top: 'N',
  },
  {
    id: 84,
    right: 'N',
    left: 'N',
  },
  {
    id: 85,
    left: 'N',
  },
  {
    id: 86,
  },
  {
    id: 87,
  },
  {
    id: 88,
  },
  {
    id: 89,
  },
  {
    id: 90,
  },
  {
    id: 91,
  },
  {
    id: 92,
  },
  {
    id: 93,
  },
  {
    id: 94,
  },
  {
    id: 95,
  },
  {
    id: 96,
    right: 'N',
  },
  {
    id: 97,
    left: 'N',
  },
  {
    id: 98,
    right: 'N',
  },
  {
    id: 99,
    left: 'N',
  },
  {
    id: 100,
  },
  {
    id: 101,
  },
  {
    id: 102,
  },
  {
    id: 103,
    right: 'N',
  },
  {
    id: 104,
    left: 'N',
  },
  {
    id: 105,
  },
  {
    id: 106,
  },
  {
    id: 107,
    right: 'N',
  },
  {
    id: 108,
    right: 'N',
    left: 'N',
  },
  {
    id: 109,
    left: 'N',
    start: 'Y',
  },
  {
    id: 110,
    right: 'N',
  },
  {
    id: 111,
    left: 'N',
    bottom: 'N',
  },
  {
    id: 112,
    bottom: 'N',
  },
  {
    id: 113,
  },
  {
    id: 114,
  },
  {
    id: 115,
    right: 'N',
    bottom: 'N',
  },
  {
    id: 116,
    left: 'N',
    bottom: 'N',
  },
  {
    id: 117,
  },
  {
    id: 118,
    bottom: 'N',
  },
  {
    id: 119,
    right: 'N',
    bottom: 'N',
  },
  {
    id: 120,
    right: 'N',
    left: 'N',
  },
  {
    id: 121,
    left: 'N',
    start: 'Y',
  },
  {
    id: 122,
    start: 'Y',
  },
  {
    id: 123,
    top: 'N',
  },
  {
    id: 124,
    top: 'N',
  },
  {
    id: 125,
  },
  {
    id: 126,
  },
  {
    id: 127,
    top: 'N',
  },
  {
    id: 128,
    top: 'N',
  },
  {
    id: 129,
  },
  {
    id: 130,
    top: 'N',
  },
  {
    id: 131,
    top: 'N',
  },
  {
    id: 132,
    right: 'N',
  },
  {
    id: 133,
    top: 'N',
    left: 'N',
    start: 'Y',
  },
  {
    id: 134,
    top: 'N',
    start: 'Y',
  },
  {
    id: 135,
    top: 'N',
  },
  {
    id: 136,
    top: 'N',
  },
  {
    id: 137,
    top: 'N',
  },
  {
    id: 138,
    top: 'N',
  },
  {
    id: 139,
    top: 'N',
  },
  {
    id: 140,
    top: 'N',
  },
  {
    id: 141,
    top: 'N',
  },
  {
    id: 142,
    top: 'N',
  },
  {
    id: 143,
    top: 'N',
  },
  {
    id: 144,
    top: 'N',
    right: 'N',
  },
];

export default gameField;

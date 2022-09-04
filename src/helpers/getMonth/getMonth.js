function getMounth(params) {
  let mounth;
  switch (params) {
    case '0':
      mounth = 'Січень';
      break;

    case '1':
      mounth = 'Лютий';
      break;

    case '2':
      mounth = 'Березень';
      break;

    case '3':
      mounth = 'Квітень ';
      break;

    case '4':
      mounth = 'Травень';
      break;

    case '5':
      mounth = 'Червень';
      break;

    case '6':
      mounth = 'Липень';
      break;

    case '7':
      mounth = 'Серпень';
      break;

    case '8':
      mounth = 'Вересень';
      break;

    case '9':
      mounth = 'Жовтень';
      break;

    case '10':
      mounth = 'Листопад';
      break;

    case '11':
      mounth = 'Грудень';
      break;

    default:
      mounth = 'Не вырний мiсяць';
  }
  return mounth;
}

export default getMounth;

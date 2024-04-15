function check() {
  let inpute = document.getElementById('date');
  if (inpute.value == '') {
    document.getElementById('error').innerHTML =
      'Пожалуйста, введите дату рождения<br>';
  } else {
    const currentDate = new Date();
    const birthday = new Date(inpute.value);
    const difference = Math.ceil(
      (birthday - currentDate) / (1000 * 60 * 60 * 24)
    );
    let daysWord;
    switch (difference % 100) {
      case 11:
      case 12:
      case 13:
      case 14:
        daysWord = 'дней';
        break;
      default:
        switch (difference % 10) {
          case 1:
            daysWord = 'день';
            break;
          case 2:
          case 3:
          case 4:
            daysWord = 'дня';
            break;
          default:
            daysWord = 'дней';
            break;
        }
    }
    document.getElementById('error').classList.remove('red');
    document.getElementById(
      'error'
    ).innerHTML = `До вашего дня рождения осталось ${difference} ${daysWord}`;
  }
}

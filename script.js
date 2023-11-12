const form = document.getElementById('registrationForm');
const cancelButton = document.getElementById('cancelButton');
const submitButton = document.getElementById('submitButton');

cancelButton.addEventListener('click', function(event) {
    // Очистка всех полей формы
    form.reset();

    // Очистка радиокнопок
    const genderRadios = form.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => radio.checked = false);

    // Отмена действия по умолчанию (предотвращение отправки формы)
    event.preventDefault();
});

submitButton.addEventListener('click', function(event) {
    // Отмена действия по умолчанию (предотвращение отправки формы)
    event.preventDefault();

    // Сбор данных со всех полей, кроме password и confirm-password
    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const age = form.elements.age.value;
    const email = form.elements.email.value;
    const gender = form.querySelector('input[name="gender"]:checked').value;

    // Создание объекта с помощью конструктора (класса)
    class UserInfo {
        constructor(firstName, lastName, age, email, gender) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
            this.gender = gender;
        }
    }

    // Создание экземпляра объекта UserInfo
    const user = new UserInfo(firstName, lastName, age, email, gender);

    // Сохранение объекта в localStorage с ключом "lastName"
    localStorage.setItem('lastName', JSON.stringify(user));

    // Очистка формы
    form.reset();
});

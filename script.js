let link = document.querySelectorAll('.link')
console.log(link)
let push = document.querySelector('.push')
console.log(push)
let a = document.querySelectorAll('a');
console.log(a)
let formName = document.querySelector('#form-name');
console.log(formName);
let formSurname = document.querySelector('#form-surname');
console.log(formSurname);
let formEmail = document.querySelector('#form-email');
console.log(formEmail);
let buttonReg = document.querySelector('#button-reg');
console.log(buttonReg);
let list = document.querySelectorAll('.list')
console.log(list);
let usersFormInfo = {};
console.log(usersFormInfo)
let catalog = [];
console.log(catalog)
let newLink = [];
let user = {
    name: 'Елена;',
    surname: 'Усова;',
    email: 'lika-moon@mail.ru'
};
let img = [{
    url: "./img/кактус.jpeg",
    alt: 'img'
},
{
    url: "./img/котик.jpeg",
    alt: 'img'
},
{
    url: "./img/цветочки.jpeg",
    alt: 'img'
}]


// 1.	Подсветка активного пункта меню:
// У вас есть навигационное меню с несколькими пунктами (<a>). Добавьте логику на JavaScript,
//  чтобы при клике на пункт меню он подсвечивался, меняя свойство className.

for (let i = 0; i < link.length; i++) {
    console.log(link.length);
    link[i].addEventListener('click', function () {
        link[i].classList.contains("link")
        link[i].classList.add("new-class")
    })
};

// 2.	Автоматическое исправление внешних ссылок:
// На вашем сайте есть внешние и внутренние ссылки. Используйте JavaScript, чтобы все внешние
//cсылки (начинающиеся с "http") открывались в новом окне (target="_blank").

function findAllLink(a, str) {
    //вытаскиваем все элементы которые содержат http
    for (let i = 0; i < a.length; i++) {
        if (a[i].href.includes(str)) {
            newLink.push(a[i])
        }
    }
    //проверяем наличте атрибута target и присваеваем ему значение
    //и перепроверяем присвоилось ли оно
    for (let i = 0; i < newLink.length; i++) {
        console.log(newLink[i].hasAttribute('target'))
        console.log(newLink[i].setAttribute('target', '_blank'))
        console.log(newLink[i].getAttribute('target'))
    }
}
findAllLink(a, "http")
console.log(newLink)

// 3.	Заполнение формы данными пользователя:
// Есть форма с полями "Имя", "Фамилия" и "Email". Напишите функцию, которая заполняет эти поля
// данными пользователя из объекта.

function filling(user) {
    // console.log(user)
    let userName = user.name
    let userSurname = user.surname
    let userEmail = user.email
    console.log(userName)
    if (user) {
        document.querySelector('.user-name').textContent = userName;
        document.querySelector('.user-surname').textContent = userSurname;
        document.querySelector('.user-email').textContent = userEmail;
    }
}
filling(user);

// 4.	Валидация формы на клиенте:
// У вас есть форма регистрации с полями и кнопкой отправки. Поля должны иметь атрибуты required.
//  Проверьте перед отправкой, что все поля заполнены, иначе выведите предупреждение.

function formReg(name, surname, email, btn) {
    let usersName = name.value
    usersFormInfo.name = usersName
    // console.log(usersFormInfo);
    // console.log(usersName);

    let usersSurname = surname.value
    usersFormInfo.surname = usersSurname
    // console.log(usersFormInfo);
    // console.log(usersSurname);

    let usersEmail = email.value
    usersFormInfo.email = usersEmail
    // console.log(usersFormInfo);
    // console.log(usersEmail);

    btn.addEventListener('click', function () {
        if (!name.value || !surname.value || !email.value) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
    })
}
formReg(formName, formSurname, formEmail, buttonReg);

// 5.	Динамическое создание списка с картинками:
// Используя массив объектов с данными картинок (например, URL и описание), создайте динамически
// список картинок с атрибутами src и alt.

let btnImg = document.querySelector('.btn-img');
console.log(btnImg)

function creatingList(img, btnImg,) {

    let lists = document.querySelector('.todo-list');

    img.map((value) => {
        //создали элемент картинка
        let itemImg = document.createElement('img');
        //присвоили название и ссылки из нашеих обектов
        itemImg.src = value.url;
        itemImg.alt = value.alt;
        //добавили на страницу
        lists.prepend(itemImg)
        //добавили стить 
        itemImg.classList.add('img-style')
        //сделали кнопку переключения стилей
        btnImg.addEventListener('click', function () {
            lists.classList.toggle('image')
            // console.log(lists)
        })
    })
}
creatingList(img, btnImg,)

// 6.	 Установка и получение атрибута
// Создайте HTML-страницу с кнопкой <button> и при помощи JavaScript задайте этой кнопке атрибут
// id со значением "myButton". После этого, используя JavaScript, получите и выведите в консоль
// значение атрибута id этой кнопки.
let btn = document.querySelector('.btn')
console.log(btn);

btn.addEventListener('click', function () {
    btn.hasAttribute('id');
    btn.setAttribute('id', 'myButton');
    btn.hasAttribute('id');
    console.log(btn.getAttribute('id'));
})

// 7.	 Изменение стилей элемента
// Добавьте на страницу элемент <div> без стилей. С помощью JavaScript, установите для этого
//  элемента стиль так, чтобы он имел красный цвет фона, черный цвет текста и ширину 200px.
//   Все стили должны быть установлены через атрибут style с использованием JavaScript.

let divNewClass = document.querySelector('.style');
console.log(divNewClass);
let btnStyle = document.querySelector('.button-style');
console.log(btnStyle);

btnStyle.addEventListener('click', function () {
    divNewClass.setAttribute('class', 'new-style');
    console.log(divNewClass.getAttribute('class'));
})

// 8.	 Работа с классами элемента
// Пусть на вашей странице есть список <ul> с несколькими элементами <li>. Ваша задача — написать
//  функцию на JavaScript, которая будет добавлять класс "highlight" к элементу списка, когда
//  пользователь наводит на него курсор, и удалять этот класс, когда курсор уходит с элемента.
//  Для этого используйте свойства classList.add() и classList.remove().

for (let i = 0; i < list.length; i++) {
    console.log(list.length);
    list[i].addEventListener('mouseover', function () {
        list[i].classList.contains("list")
        list[i].classList.add("highlight")
    })
    list[i].addEventListener('mouseout', function () {
        list[i].classList.contains("list")
        list[i].classList.remove("highlight")
    })
};


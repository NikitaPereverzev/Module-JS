const spectacleTxt = `
person1. (восхищенно). Ого! Папаня уже и лестницу при?ладил!;
person2. (довольно). Вот ты, мать, всю душу мне проела! Почему поздно приходишь да почему! А приличное жилье найти разве ж просто?! Уж где я только не был! И в администрации президента, и в правительстве! Весь депутатский корпус обошел! И могу теперь смело заявить, лучше генеральских ушей на свете нет! А из них самые шикарные - Сергей Иваныча! Простор - раз! Хоть на велосипеде катайся!;
person1. Папаня! Ты не забыл про велик? Ведь обещал!;
person2. Погоди! Не перебивай! Только с мысли сбил! О чем я сейчас говорил?;
person1. Простор - раз!;
person2. Какой еще такой велик я тебе обещал?!;
person1. (отходя, обиженно). Слово, папаня, надо держать! Сам говорил!;
person2. Вот я тебе сейчас леща дам, узнаешь, какое слово надо держать!;
person3. Зря ты все это отец затеял! У Иван Иваныча хоть и теснота была, зато привыкли. И хозяйство, и оптовый под боком!;
person2. Ну, завела! О чем я говорил?;
person1. Простор - раз!;
person2. Правильно, сынок! А главное - наковаленка с молоточком в идеальном состоянии. Хоть сейчас к работе приступай! Ты только подумай, каков мужик! Столько лет, а инструмент сумел так сохранить! Вот это я понимаю! Старая гвардия! Борозды не портит! (Задумчиво.) Но и глубоко не па?шет... Черт, опять нить потерял!.. Да, и ворсистость весьма умеренная, А у Иван Иваныча летом хоть топор вешай!;
person1. Верно, папаня! И видок из окна, что надо! Мужик классный на лошади! Наверно, конкистадор! Мы в музее были, там точно такой был. Только малость поменьше. А велик, папаня, ты все же обещал!;
person2. Нет, ты меня сегодня доведешь со своим великом! Я тебя предупреждаю! (Смотрит на статую.) Квастадор? Раньше я бы сразу угадал кто! Ильич или, на худой конец, товарищ Сталин! А теперь вполне может быть, что и квастадор! Похоже на матадор... Явно, что-то испанское. Так что вполне может быть!;
person1. (хитро). А может и Юрий Долгорукий!;
person2. (миролюбиво). А может и Долгорукий.;
person1. В общем, ты, папаня, не знаешь!;
person2. (угрожающе). Та-ак, ну все! Лопнуло мое терпение! Я тебя предупреждал!;
person3. Папка, сынок, все знает! Не приставай к нему. Видишь, он и так на взводе!;
person2. Первый paз сказала что-то умное!;
person3. А кто они такие, Санечка, квистадоры-то эти?;
person1. Испанские завоеватели, мамуля! Америку покоряли!;
person3. Ну, вот видишь, сынок! Правильно те?бе отец ответил.;
person2. Ладно, проехали. Образование сейчас - все! Без него беги в магазин за метлой да валенками. Перед молодежью сейчас, какие возможности! Эх, мне бы такие в свое время! Я бы... Ну да ладно, я не жалуюсь! Человек с головой да руками никогда не пропадет! Так, заговорились. Обустраиваться надо! Ты, Санька, первым делом веревки натяни! У матери, небось, стирки полно!;
person3. Может, не надо сразу-то Сергей Иваныча дразнить? С веревками можно и погодить. У меня и белья-то немного стирать.;
person2. Нечего годить! А пеленки, а туе-мое! Пусть знает! Делай, сынок, что я говорю.;
person1. Есть, товарищ начальник! Это я мигом. Молоточком тюк-тюк и готово!;`



/* let changesRules = function(){
    let actors = ['Anton', 'Anna', 'Vlad'];
    if(spectacleTxt.includes('person1')){
        newRole = spectacleTxt.split('person1').join('Anton');
    }
*/
    /*
    let actor = '';
    for(let i; i < actors.length; i++){
        if(actors[i] == name){
            actor = name
        } return actor.toUpperCase();
    }
}
*/

let re = /person\d/gi;
let str = spectacleTxt;

let arr = ['Anton', 'Anna', 'Vlad'];
    //return String(arr);
let actors = arr[Math.floor(Math.random()*arr.length)];
    //console.log(actors);
 
let newstr = str.replace(re, actors);
    
console.log(newstr); 

//let newText = spectacleTxt.split('person').join('Actor');
//console.log(newText);

### Определения

Система скилловая, параметрическая. Прокачка за опыт.

Вступление
-------

Зачем всё это?

Супер-пупер риалистичная система? Нет! Не претендую ни на реалистичность,
ни на супер-пупер. Я просто реализовал две старых идеи:

1. навыки по схеме как в 4-х героях (basic - advanced - expert - master -
grandmaster)
2. как в TES - вычисление основных значений параметров на основе навыков.

Второй подход полноценно реализовать получилось только для конверсии
персонжей из старых версий E.R.L.S. - при отсутствии ограничивающего фактора
велика вероятность появления манчкинов со "всеми параметрами по-максимуму".

Система разрабатывалась "от навыков" и предполагалось вычислять основные параметры на основе *накиданных* навыков. Не все игроки восприняли такую идею здраво и *накидывались* "по-старинке", сначала параметры, потом навыки.

Так как уровень прокачки навыка тесно связан с величиной параметра (а навык требует какого-то минимального значения параметра), можно накидываться с двух сторон:
1. Сначала параметры, потом навыки - "метод по-старинке"
2. Сначала навыки, потом параметры - "новый метод".

В принципе, разницы нет и мы рассмотрим оба варианта. Но сначала рассмотрим - какие же есть параметры и что есть "навыки".

Механика разрешения конфликтов
------------------------------

Используется один шестигранный кубик, броски делаются против  _сложности_. Элементарная задача имеет сложность `2`, среднестатистическая – `4 - 5`.

Формула успешного броска такова:
`к6 + бонус навыка >= сложности`

Таким образом, с навыком `basic` (бонус `+1`) среднестатистическая задача решается с шансом `50%`.
Если навыка нет, персонаж получает штраф `-5` и бонус от половины  параметра:
`к6 + (парам/2) - 5 >= сложность`

К броску навыка и сложности добавляются ситуационные бонуса и штрафы. Как правило, вещи дают бонуса, ситуация увеличивает сложность. Нарастающий штраф при множественных провалах не используется (избегаем «спирали смерти»), штрафы за раны опциональны.
Параметры
---------

### Основные параметры

-	**ОФП** -- общая физическая подготовка. Влияет на выносливость, ЕЗ, физический урон (в ближнем бою).
-	**ЛОВКОСТЬ** -- на самом деле правильно писать "Нервы" или "Neuro". Этот параметр отвечает за эффективность работы нервной и мышечной системы. Влияет на ЕД (единицы действий).
-	**РАЗУМ** -- отвечает за ментальную сферу персонажа, в том числе должен отвечать и за магию.
-	**ДУХ** -- отвечает за духовную сферу (и псионику)

Взрослым персонажам дается `29` очков параметров - расставляй как хочешь, главное помни, что параметр `1-3` у взрослого человека означает соответствующую группу инвалидности.
У подростков и детей параметры пропорционально ниже и поинтов дается меньше, а именно: `4+возраст`.

Таким образом, средний параметр равен `7`.
### Уточняющие параметры

Основных параметров всего 4 и каждый разделяется на два уточняющих.

-	**ОФП**
	-	**сила** -- уточняет аспект физической сила. Развитость мускулов, мощь удара, грузоподъемность. Влияет на урон в ближнем бою;
	-	**здоровье** -- уточняет аспект здоровья. Развитость всего организма,  способность переносить непогоду или длительные нагрузки. Влияет на выносливость и ЕЗ;
-	**ЛОВКОСТЬ**
	-	**подвижность** -- уточняет аспект подвижности. Развитость нервной системы, управляющей мышцами. Влияет на ЕД;
	-	**меткость** -- уточняет аспект меткости. Влияет на эффективность попадания в бою, кроме того это способность оценивать ситуацию и управлять своими действиями эффективней;
-	**РАЗУМ**
	-	**интеллект** -- способность решать логические и комбинаторные задачи, способность к анализу;
	-	**память** -- способность запоминать и удерживать в память большое число факторов при анализе; @todo: влияет на количество открытых *novice-навыков*.
-	**ДУХ**
	-	**воля** -- внутренняя сила духа, способность противостоять невзгодам и неудачам;
	-	**интуиция** -- открытость для мира (не уязвимость, а именно открытость). Кроме бросков "на интуицию" влияет на скорость восстановления ментальной (псионической) энергии. Ну... должна влиять.

Как правило, **уточняющий** параметр находится в пределах `-1..+2`, при этом сумма уточняющих параметров одной группы не должна превышать `+1`.

Параметры - по сути скорость прокачки навыков или порог их максимальной прокачки.
### Пассивный бонус

Пассивный бонус равен: `параметр / 2` (с округлением).

Если мы используем отсутствующий навык, этот бонус добавляется к броску эффективности. При этом накладывается и штраф за отсутствие навыка, равный `-5`.
@todo: баланс (парам/2 и -5 ИЛИ парам/3 и -4)?

### Производные параметры

@todo: стамина, хп, экшен поинты, стан DR

Навыки
------

_Навык -- это деятельность, сформированная путем повторения и доведения до автоматизма. Всякий новый способ действия, протекая первоначально как некоторое самостоятельное, развёрнутое и сознательное, затем в результате многократных повторений может осуществляться уже в качестве автоматически выполняемого компонента деятельности._

### Уровни навыков

Навыки прокачиваются от Novice до Legendary и дают прогрессирующий бонус.

| Уровень прокачки 	| Бонус к броску 	|
|------------------	|----------------	|
| No skill         	| -5             	|
| Novice           	| 0              	|
| Basic            	| +1             	|
| Advanced         	| +2             	|
| Expert           	| +3             	|
| Master           	| +5             	|
| Grandmaster      	| +8             	|
| Legendary        	| +13            	|

Гигантский бонус от `Legendary` навыка компенсируется тем, что _прокачаться_ до этого уровня нельзя. Надо иметь навык на уровне `grandmaster` и действительно войти в легенды!

На старте игрок может взять до дюжины навыков:

| Уровень прокачки: | Master | Expert | Advanced | Basic | Novice |
|-------------------|:------:|:------:|:--------:|:-----:|:------:|
| Навыков           |    1   |    2   |     4    |   5   |    *   |

[*] Опционально: (память/2)


В большинстве случаев при начальной накидке раскладка навыков именно такая, но мастер конечно же может изменить числа по своему усмотрению. У подростков навыки _прокачаны_ пропорционально меньше - так, к примеру, у них редко бывает больше одного **эксперта**.

### Параметры и навыки

Но не всё так просто! Сам параметр ограничивает навык сверху:

| Уровень прокачки 	| Требования к параметру 	|
|------------------	|------------------------	|
| Novice           	| 1..2                   	|
| Basic            	| 3..4                   	|
| Advanced         	| 5..6                   	|
| Expert           	| 7..8                   	|
| Master           	| 9..11                  	|
| Grandmaster      	| 12+                    	|
| Legendary        	|                        	|

#### Пример персонажа

| | |
|----------|---|
| ОФП      	| 9 	|
| Ловкость 	| 3 	|
| Разум    	| 5 	|
| Воля     	| 7 	|

Ограничения на начальные значения навыков таковы:<br>

|          	| можно взять только навык, зависящий от: 	|
|----------	|-----------------------------------------	|
| Master   	| ОФП                                     	|
| Expert   	| ОФП, Воля                               	|
| Advanced 	| ОФП, Воля, Разум                        	|
| Basic    	| Навык, зависящий от любого параметра    	|

### Novice-навыки

Навыки новичка. Эти навыки не имеют бонусов, но не дают и штрафов. Считается, что получить навык на novice можно только с учителем.
Опциональное правило: количество `novice`-навыков равно половине значения памяти.
Зачем нужны novice-навыки? С их помощью я сокращал разрыв между игроками, уже отыгравшими несколько сессий и только что пришедшими. @todo: переформулировать

### Сводная таблица


| Уровень прокачки | Бонус к броску | Требования к параметру | Пассивный бонус от параметра |
|------------------|----------------|------------------------|------------------------------|
| No skill | -5 |  |  |
| Novice | 0 | 1..2 | 0 |
| Basic | +1 | 3..4 | 2 |
| Advanced | +2 | 5..6 | 3 |
| Expert | +3 | 7..8 | 4 |
| Master | +5 | 9+ | 5 |
| Grandmaster | +8 | 12+ | 6 |
| Legendary | +13 | любой | * |


## Накидка
- Оценочное количество параметров: 4+возраст. После 25-27 лет параметры перестают расти автоматически (+1 к параметру в год), требуются специальные тренировки (+2 за 3 года, но не более +12).
- Подростки редко когда имеют больше 1 эксперта – для достижения этого уровня требуются профессиональные занятия.

# Хиты и ранения (опциональное правило)

|   Ранения   | Порог урона |
|:-----------:|:-----------:|
| Легкие      | до 0,2 * ХП |
| Средние     | до 0,4 * ХП |
| Тяжелые     | до 0,6 * ХП |
| Критические | до 0,8 * ХП |
| Смерть      |   -ОПФ ХП   |

Вычислять в уме эти значения нет необходимости, при заполнении листа пересонажа в excel эти значения вычисляются автоматически.

Эта табличка опциональна и в сеттингах "Информопрорыв" и "ЛенУГРО1924" не используется (хотя пороговые значения ранений и вычисляются).

@todo: Штрафы от ранений на действия.

## Опыт

За каждую сессию персонаж всегда получает одну экспинку в навыки и одну экспинку в параметры. При этом мастер оставляет за собой право наградить игрока по своему усмотрению (дополнительно) - за интересные решения, элегантные действия или просто так, за красивые глаза.

Куда и как можно потратить **экспинки**?

Для прокачки **параметра** с `N` до `N+1` требуется `N+1` опыта в параметрах.

Опыт в навыках тратится так:

| исходный    | результирующий | опыт |
|-------------|-------------|---------|
| открыть     | Novice      | 1       |
| Novice      | Basic       | 1       |
| Basic       | Advanced    | 2       |
| Advanced    | Expert      | 3       |
| Expert      | Master      | 5       |
| Master      | Grandmaster | 8       |
| Grandmaster | Legendary   | 13      |

С учителем получение novice-навыка бесплатное, а вот самообучение стоит 1 опыта. 

Обучение же навыку делается так:

    к6 + бонус интеллекта -3 VS сложность 

@todo: Сложность определяется... сложностью навыка? Редкостью? 
## Снова о механике разрешения конфликтов

Теперь, вооружившись знаниями о параметрах и навыках, посмотрим на механику еще раз.

...

При решении задачи без навыка бонус к броску равен:

Аррис: `- 3 +  параметр/2 `

### Типичные применения параметров:

- ОФП -- ??
- Ловкость -- поиск предметов
- Разум -- ??
- Воля -- ??


## Навыки: подробнее (даются для сеттинга "Информопрорыв")

Оружие:

| Тип                                   | Рукопашное | Баллистическое | Гаусс    | Лазер    | Плазма |
|---------------------------------------|------------|----------------|----------|----------|--------|
| Легкое                                | Ловкость   | Ловкость       | Ловкость | Ловкость |       |
| Среднее                               | Ловкость   | Ловкость       | Ловкость | ОФП      |       |
| Тяжелое                               | ОФП        | ОФП            | ОФП      | Разум    | ОФП    |
| Стационарное (станковое, турели, ЭМД) |           | ОФП            | ОФП      | Разум    | ОФП    |
| Корабельное (орудийные системы)       |           | Разум          | Разум    | Разум    | Разум  |

- **Снайпер**: Использование снайперского комплекса требует навыка «Снайпер» (разум). Различные системы снайперского огня требуют различного навыка. Стрельба по-прежнему ведется по ведущему параметру, но работа с целью идет по навыку «снайпер».   - Исключение – навык **«Sharpshooter»** (ловкость), позволяет делать снайперские выстрелы с луком.
- **БТП**: Боевые тактические процессоры дают бонус к навыку и могут убирать штрафы на условия видимости, темноту или тектонические помехи.

Транспортные средства:

| Тип                                | Наземная                         | Морская                               | Атмосферная                                     | Космическая |
|------------------------------------|----------------------------------|---------------------------------------|-------------------------------------------------|-------------|
| **Легкая**                         | Ловкость (мото, авто)            | ОФП (весельные лодки,  байдарки, итп) | Ловкость (флайдеры),  ОФП (парашют, дельтаплан) | Разум       |
| **Средняя**                        | Ловкость (автобусы,  автомобили) | Ловкость (катера, малые  корабли)     | Разум (самолеты, флаеры)                        | Разум       |
| **Тяжелая**                        | ОФП (грузовики, танки)           | Разум (корабли, навигация)            | Разум (шаттлы, пилотирование)                   | Разум       |
| ЭМД/ЭМК                            | ОФП                              | -                                     | -                                               | -           |
| **Меха** (если сеттинг  позволяет) | ОФП                              | -                                     | минимум: Разум или ОФП                          | Разум?      |
| Персональные                       | Ловкость (ролики, скейт)         | Ловкость (скутер)                     | Воля (ковер-самолет и т.п.)                     |             | Воля (драконы)


ЭМД(К) разных моделей повышают низкий ОФП до определенной величины. Но если ОФП больше – он не меняется. Т.е. [1..7] ОФП повышается до `8`, но `10` ОФП не меняется.
`max( max (свой ; доспеха ) ; min( свой; доспеха ))`

Навык на доспехи компенсирует штраф на ловкость, но не выше своей эффективности (если только на легендарном уровне)

К примеру, fullplate дает `-5` ловкость. При этом только на МАСТЕРЕ потери ловкости компенсированы полностью.

Остается под вопросом – требует ли «ремонт» дополнительных навыков для починки чего-то в специфической области. Неоднозначность рассчета. Без ремонта можно ремонтировать, например механику: (-2 + бонус механики/оружейника) итп


#### Навыки **ОФП**

- Бодибилдинг
- Атлетика
- ЭМД/ЭМК
- Бег
- Верховая езда
- Выживание
- Массаж
- Плавание
- Стойкость (метаболитическая) (к ядам, химии, алкоголю)

#### Навыки Ловкости
- Воровские навыки (фэнтези)
	- Взлом, скрытность, бесшумное передвижение, карманная кража, маскировка, гримировка, ловушки
- Акробатика
- Охота, выслеживание
- Айкидо и подобные боевые стили

#### Навыки Воли
- Навыки влияния
	- Блеф, харизма, дипломатия, актерское мастерство, допрос, лидерство
- Торговля
- Ориентирование вслепую
- Дрессировка (в том числе и животных)
- Естественные языки

#### Навыки неопределенные
- ?

********
_Улучшения организма_
********
# Особые возможности навыков

Бодибилдинг: Дает +хп = эффективности;

# Паранормальные способности

Ветви способностей всего три - по осям _векторого базиса_.

## Одаренность

Дает сверх (10 * бонус одаренности) ХП и регенерацию (бонус) хп в минуту.

## Магия

## Псионические силы

Биометаболика дает хп = 2*эфф. (дает так же +1*эфф АП, либо наоборот +2*эфф АП, +1*эфф ХП)
Биоэнергетика: +эфф ХП

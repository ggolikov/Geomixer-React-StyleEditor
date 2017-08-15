### Архитектура компонентов styleEditor

#### Условия
1. Стили имеют смысл для векторных слоев


#### Стили слоя

##### 1. Верхний уровень - стилевые фильтры:

Номер | Наименование | Тип | Описание | Значение по умолчанию
----- | ------------ | --- | -------- | ---------------------
1 | `MinZoom` | `Uint` | мин. zoom | `1`
2 | `MaxZoom` | `Uint` | макс.zoom | `21`
3 | `Filter` | `SQL string`  |  SQL выражение стиля | ''
4 | `Balloon` | `String` |  Шаблон балуна (поля атрибутов объектов заключаются в квадратные скобки) | ''
5 | `DisableBalloonOnMouseMove` | `Boolean`  |  отключение балунов по наведению | `true`  
6 | `DisableBalloonOnClick` | `Boolean`  |  отключение балунов при `click`| `false`  
7 | `RenderStyle` | `Style object`   |  стиль (тип данных `Style`) |  
8 | `HoverStyle` | `Style object`    |  hover стиль (тип данных `Style`) |

##### 2. Второй уровень - `Style object` (объект стиля):

Номер | Наименование | Тип | Серверный стиль | Описание | Значение по умолчанию
----- | ------------ | --- | --------------- | -------- | ------------
| | | иконки | |
1 | `iconUrl` | `String` | `marker.image` | URL иконки маркера |
2 | `iconAngle`  | `Float` | `marker.angle` | угол поворота маркера | 0
3 | `iconSize` | `UInt/Expression` | `marker.size` | размер иконки |  
4 | `iconScale` | `Float`  | `marker.scale` | масштабирование маркера | 1
5 | `iconMinScale` | `Float` | `marker.minScale` | минимальный scale | 0.01
6 | `iconMaxScale` | `Float` | `marker.maxScale` | максимальный scale  | 1000
7 | `iconCircle` | `Boolean` | `marker.circle` | отображение круга | `false`
8 | `iconCenter` | `Boolean` | `marker.center` | флаг центрирования маркера | true
9 | `iconAnchor` | [`UInt`, `UInt`] | `marker.dx`, `marker.dy` | смещение X,Y |
10 | `iconColor`   | `UInt` | `marker.color` | замена цвета `0xff00ff` на color в маркере | `0xff00ff`
| | | обводка | |
11 | `stroke` | `Boolean` | наличие `outline` | признак отрисовки границы объекта |
12 | `color` |  `UInt/Expression` | `outline.color` | цвет границы объекта | 0
13 | `weight` | `UInt` | `outline.thickness` | ширина линии границ объекта | 0
14 | `opacity` | `Float`| `outline.opacity` (от 0 до 100) | opacity линии границ объекта (от 0.0 до 1.0 по умолчанию) | 1
15 | `dashArray` | `String` | `outline.dashes` | описание пунктирной линии [dash pattern](https://developer.mozilla.org/en/SVG/Attribute/stroke-dasharray) | null
| | | заливка | |
16 | `fillColor` | `UInt/Expression` | `fill.color` | цвет заполнения | 0
17 | `fillOpacity` | `Float` | `fill.opacity` (от 0 до 100) | opacity заполнения объекта (от 0.0 до 1.0 | 1
18 | `fillIconUrl` | `String` | `fill.image` | URL BitMap которое берется в качестве подложки заполнения | ''
| | | паттерн заливки | `fill.pattern` |
19 | `fillPattern.colors` | `UInt`[] | | массив цветов в формате UInt/Expression | []
20 | `fillPattern.style` | `String` |  | могут быть заданны строки (`horizontal`, `vertical`, `diagonal`, diagonal2, circle, cross) | `horizontal`
21 | `fillPattern.width` | `UInt` | | ширина каждого цвета в пикселах | 8
22 | `fillPattern.step` | `UInt` | | отступ в пикселах после каждого цвета (для circle от края) |
| | | радиальный градиент заливки | fill.radialGradient |
23 | `fillRadialGradient.x1` | `UInt/Expression` |  | сдвиг по оси X центра первой окружности | 0
24 | `fillRadialGradient.y1` | `UInt/Expression` |  | сдвиг по оси Y центра первой окружности | 0
25 | `fillRadialGradient.r1` | `UInt/Expression` |  | радиус первой окружности | 0
26 | `fillRadialGradient.x2` | `UInt/Expression` |  | сдвиг по оси X центра второй окружности | 0
27 | `fillRadialGradient.y2` | `UInt/Expression` |  | сдвиг по оси Y центра второй окружности | 0
28 | `fillRadialGradient.r2` | `UInt/Expression` |  | радиус второй окружности | 0
29 | `fillRadialGradient.colorStop` | `[[position, color, opacity]...]` | | массив стоп цветов объекта градиента (position — положение цвета в градиенте. Значение должно быть в диапазоне 0.0 (начало) до 1.0 (конец), color — код цвета или формула, opacity — прозрачность, addColorStop = `[[0, 0xFF0000,0.5], [1, 0xFFFFFF,1]]` |
| | | линейный градиент заливки | fill.radialGradient |
30 | `fillLinearGradient.x1` | `UInt/Expression` |  | сдвиг по оси X начальной точки | 0
31 | `fillLinearGradient.y1` | `UInt/Expression` |  | сдвиг по оси Y начальной точки | 0
32 | `fillLinearGradient.x2` | `UInt/Expression` |  | сдвиг по оси X конечной точки | 0
33 | `fillLinearGradient.y2` | `UInt/Expression` |  | сдвиг по оси Y конечной точки | 0
34 | `fillLinearGradient.colorStop` | `[[position, color, opacity]...]` | | массив стоп цветов объекта градиента (position — положение цвета в градиенте. Значение должно быть в диапазоне 0.0 (начало) до 1.0 (конец), color — код цвета или формула, opacity — прозрачность,  addColorStop = `[[0, 0xFF0000,100], [1, 0xFFFFFF,100]]` |
| | | подпись | |
35 | `labelTemplate` | `String` | | Шаблон текста метки, поля заключаются в квадратные скобки | ''
36 | `labelField` | `String` | `label.field` | текст метки брать из атрибута объекта | ''
37 | `labelColor` | `UInt` | `label.color` | цвет текстовой метки | 0
38 | `labelHaloColor` | `UInt` | `label.haloColor` | цвет Glow вокруг метки | -1
39 | `labelFontSize` | `UInt` | `label.size` | FontSize метки  | 0
40 | `labelSpacing` | `UInt` | `label.spacing` | растояние между символами | 0
41 | `labelAlign` | `String` |  | выравнивание могут быть заданы строки (`left`, `right`, `center`) - только для точечных объектов) | `left`
42 | `labelAnchor` | [`UInt`, `UInt`] | зависит от `label.dx`, `label.dy`, `label.align` | смещение `label` X,Y -  - только для точечных объектов |

#### Иерархия компонентов

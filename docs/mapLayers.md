`mapLayers` - это immidietly invoked function, которая транслирует в глобальную область несколько переменных:

Переменная | Описание
-- | --
`window.mapLayers` |
`window._abstractTree` |
`window.layersTree` |
`window._layersTree` |
`window._queryMapLayers` |

#### 1) AbstractTree
Вначале создается абстрактный класс `AbstractTree`. Его экземпляры не имеют свойств, а его методы тут же записываются в прототип

Метод экземпляра `AbstractTree`| Параметр | Описание
-- | -- | --
`makeSwapChild` |  | Создает элемент `div` - разделитль между слоями в дереве
`getChildsUl` | node | Возвращает элемент `ul` с потомками node
`toggle` | box | Скрывает или разворачивает потомков при клике на box
`addNode` | node, newNodeCanvas | Добавляет node на newNodeCanvas
`delNode` | node, newNodeCanvas | Удаляет node из newNodeCanvas

Далее создается экземляр `_abstractTree` и добавляется в глобальную область видимости.

#### 2) layersTree

Основным элементом модуля является конструктор `layersTree`. Он отвечает за конкретную отрисовку каждого из 3 деревьев (слева, в поиске и при рендере списка карт/слоев). На вход конструктор получает объект `renderParams` (аналог `options`). Кроме того, дерево генерирует определенные события.

Свойство `renderParams` | Описание
-- | --
`showVisibilityCheckbox` {Bool} | показывать или нет checkbox видимости
`allowActive` {Bool} | возможен ли в дереве активный элемент
`allowDblClick` {Bool} | переходить ли по двойному клику к видимому экстенту слоя/группы
`showStyle` {Bool} | показывать ли иконку стилей
`visibilityFunc` {function(layerProps, isVisible)} | ф-ция, которая будет выполнена при изменении видимости слоя. По умолчанию устанавливает видимость соответствующего слоя в API

Событие дерева слоев | Описание
-- | --
layerVisibilityChange | при изменении видимости слоя (параметр - элемент дерева с изменившимся слоем)
addTreeElem | добавили новый элемент дерева (параметр - новый элемент)
activeNodeChange | изменили активную ноду дерева (парамер - div активной ноды)

Конструктор создает экземпляры деревьев, которые умеют отрисовывать себя в DOM и обрабатывать различные анипуляции со слоями.

Свойство экземпляра `layersTree` | Описание
-- | --
`_renderParams` | расширяет входные renderParams
`type` | тип узла
`content` | содержимое узла
`condition` | состояние узла (visible, expanded)
`mapStyles` | Object
`groupLoadingFuncs` | Array
`_treeCanvas` | контейнер отрисованного дерева слоёв
`_layerViewHooks` | Array


Метод экземпляра `AbstractTree`| Параметр | Описание
-- | -- | --
`addLayerViewHook` | hook |
`_applyLayerViewHooks` | div, layerProps |
`drawTree` | tree, layerManagerFlag | layerManagerFlag = 0 для дерева слева, 1 для списка слоев, 2 для списка карт
`getChildsList` | elem, parentParams, layerManagerFlag, parentVisibility | Возвращает `li` - элемент для элемента дерева `elem`
`addLoadingFunc` | parentCanvas, elem, parentParams, layerManagerFlag | Добавляет выполнение функций по клику на ноду
`runLoadingFuncs` |  | Выполняет функции из хэша `groupLoadingFuncs`
`addExpandedEvents` | parent | Сворачивает или разворачивает ноду по клику
`drawNode` | elem, parentParams, layerManagerFlag, parentVisibility | Рисует ноду и слои в ней
`setActive` | span | Устанавливает активную ноду дерева
`getActive` |  | Возвращает активную ноду дерева
`getMinLayerZoom` | layer | Возвращает минимальный зум слоя
`layerZoomToExtent` | bounds, minZoom | Приближает к бибоксу слоя и его минимальному зуму
`drawLayer` | elem, parentParams, layerManagerFlag, parentVisibility | Отрисовка слоя и задание ему функций клика
`drawGroupLayer` | elem, parentParams, layerManagerFlag, parentVisibility | Отрисовка группового слоя и задание ему функций клика
`drawHeaderGroupLayer` | elem, parentParams, layerManagerFlag | Отрисовка векрхнего группового слоя
`removeGroup` | div | Удаление группового слоя (создает ui-меню с вопросами)
`findUITreeElem` | elem | По элементу дерева слоёв ищет соответствующий элемент в DOM представлении
`getLayerVisibility` | box | Возвращает видимость слоя
`updateVisibilityUI` | elem | Устанавливает галочку в checkbox и нужный стиль DOM ноде дерева в зависимости от видимости ничего не трогает вне ноды и в самом дереве
`dummyNode` | node | пустая нода дерева (с текстом из `node`)
`updateZIndexes` |  | проходится по всем слоям дерева и устанавливает им z-индексы в соответствии с их порядком в дереве
`moveHandler` | spanSource, divDestination | Перемещает узел внутри дерева
`swapHandler` | spanSource, divDestination |
`copyHandler` | gmxProperties, divDestination, swapFlag, addToMap | Копирует узел из одного дерева в другое
`addLayerToTree` | layerName | обертка для `copyHandler`, не работает для мультислоёв
`addLayersToMap` | elem | Добавляет слои на карту (если их нет в `nsGmx.gmxMap.layers`)
`getParentParams` | li | Возвращает `properties` родительской ноды
`updateListType` | li, skipVisible | Обновляет тип списка (checkbox или radio)
`removeTreeElem` | div | Удаляет элемент из дерева
`addTreeElem` | div, index, elemProperties | Добавляет элемент в дерево
`findTreeElem` | div | ищет `div`-элемент в дереве

Далее инстанциируется экземпляр `layersTree` - `_layersTree`, это дерево основной карты.
И коструктор, и экземпляр пробрасываются в глобальную область видимости:

```javascript
window.layersTree = layersTree;
window._layersTree = _layersTree;
```

#### 2) queryMapLayers

`queryMapLayers` - это конструктор-виджет в левой панели для отображения основного дерева.
Экземляр `queryMapLayers` наследуется от `leftMenu` для отображения в левой панели.

Свойство экземпляра `queryMapLayers` | Описание
-- | --
`buildedTree` | расширяет входные renderParams
`builded` | тип узла
`buttonsCanvas` | содержимое узла
`loadDeferred` | состояние узла (visible, expanded)


Метод экземпляра `queryMapLayers`| Параметр | Описание | Зависимости
-- | -- | --
`addLayers` | data, condition, mapStyles, LayersTreePermalinkParams | Добавляет слои из сырого дерева в виджет. Именно это и происходит в `starter.js` | `starter.js`
`applyState` | condition, mapLayersParam, div | Применяет видимость в дереву | `queryTabs.js`
`equalStyles` | style1, style2 | Сравнивает два стиля между собой |
`getContainerBefore` |  | Возвращает контейнер в левой панели, идущий перед деревом слоев | `starter.js`
`getContainerAfter` |  | Возвращает контейнер в левой панели, идущий после дерева слоев | `starter.js`
`load` | data | Отрисовывает дерево в виджете |
`applyOpacityToRasterLayers` | opacity, parent | Применяет прозрачность к растровым слоям | `starter.js`
`rasterLayersSlider` | parent | Добавляет слайдер прозрачности растрового слоя
`currentMapRights` |  | Возвращает права на карту | `contextMenuController.js`, `kmlParser.js`, `menu.js`, `queryTabs.js`, `starter.js`
`layerRights` | name | Возвращает права на слой с идентификатором `name`
`addUserActions` |  | Добавляет пользователю с разрешенным уровнем доступа функционал drag'n'drop
`removeUserActions` |  | Удаляет функционал drag'n'drop
`addDraggable` | parent | Добавляет элемент drag
`removeDraggable` | parent | Добавляет элемент drag
`_droppableHandler` | ev, ui |
`addDroppable` | parent |
`removeDroppable` | parent |
`_swapHandler` | ev, ui | Статический метод
`addSwappable` | parent |
`removeSwappable` | parent |
`asyncCreateLayer` | promise, title | Добавляет слой в дерево при его создании
`asyncUpdateLayer` | promise, properties, recreateLayer | Обновляет слой в дереве при его изменении
`asyncCopyLayer` | promise, title | Копирует слой в дереве
`removeLayer` | name | Удаляет слой с карты
`getLayers` |  | Обертка для `createLayersManager`
`createLayersManager` |  | Отображает список слоёв (например, для загрузки из карты)
`getMaps` |  | Отображает список слоёв
`createMapDialog` | title, buttonName, func, addLink | Отображает диалог создания карты
`createMap` | name | Отправляет запрос на создание карты
`saveMap` |  | Сохраняет карту, использует функцию `saveMapInternal`, инкапсулированную в IIFE
`saveMapAs` | name | Сохраняет карту с именем name

В итоге инстанциируется объект `window._queryMapLayers` - виджет дерева слоев в левом меню.

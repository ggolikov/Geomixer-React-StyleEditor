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
`getChildsList` | elem, parentParams, layerManagerFlag, parentVisibility |
`addLoadingFunc` | parentCanvas, elem, parentParams, layerManagerFlag |
`runLoadingFuncs` |  |
`addExpandedEvents` | parent |
`drawNode` | elem, parentParams, layerManagerFlag, parentVisibility |
`setActive` | span |
`getActive` |  |
`getMinLayerZoom` | layer |
`layerZoomToExtent` | bounds, minZoom |
`` |  |
`` |  |
`` |  |
`` |  |
`` |  |
`` |  |
`` |  |
`` |  |
`` |  |
`` |  |
`` |  |
`` |  |


"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Массив товаров
var my_catalog = [{
    id: 1,
    name: "Sony Xperia Z3",
    price: 899,
    specs: {
        "Manufacturer": "Sony",
        "Storage": 16,
        "OS": "Android",
        "Camera": 15
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem pOSuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/sony-xperia-z3.jpg",
        "large": "assets/images/sony-xperia-z3-large.jpg"
    }
}, {
    id: 2,
    name: "Iphone 6",
    price: 899,
    specs: {
        "Manufacturer": "Apple",
        "Storage": 16,
        "OS": "iOS",
        "Camera": 8
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem pOSuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/iphone6.jpg",
        "large": "assets/images/iphone6-large.jpg"
    }
}, {
    id: 3,
    name: "HTC One M8",
    price: 899,
    specs: {
        "Manufacturer": "HTC",
        "Storage": 32,
        "OS": "Android",
        "Camera": 5
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem pOSuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/htc-one.jpg",
        "large": "assets/images/htc-one-large.jpg"
    }
}, {
    id: 4,
    name: "Galaxy Alpha",
    price: 899,
    specs: {
        "Manufacturer": "Samsung",
        "Storage": 32,
        "OS": "Android",
        "Camera": 12
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem pOSuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/galaxy-alpha.jpg",
        "large": "assets/images/galaxy-alpha-large.jpg"
    }
}, {
    id: 5,
    name: "Nokia Lumia",
    price: 450,
    specs: {
        "Manufacturer": "Nokia",
        "Storage": 16,
        "OS": "Windows",
        "Camera": 5
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem pOSuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/nokia-lumia.jpg",
        "large": "assets/images/nokia-lumia-large.jpg"
    }
}, {
    id: 6,
    name: "Zte Nubia",
    price: 399,
    specs: {
        "Manufacturer": "ZTE",
        "Storage": 32,
        "OS": "Android",
        "Camera": 12
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem pOSuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/zte-nubia.jpg",
        "large": "assets/images/zte-nubia-large.jpg"
    }
}, {
    id: 7,
    name: "Samsung Galaxy S5",
    price: 399,
    specs: {
        "Manufacturer": "Samsung",
        "Storage": 16,
        "OS": "Android",
        "Camera": 15
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem pOSuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/galaxy-s5.jpg",
        "large": "assets/images/galaxy-s5-large.jpg"
    }
}, {
    id: 8,
    name: "Iphone 5S",
    price: 399,
    specs: {
        "Manufacturer": "Apple",
        "Storage": 16,
        "OS": "iOS",
        "Camera": 8
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem pOSuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/iphone5s.jpg",
        "large": "assets/images/iphone5s-large.jpg"
    }
}];

var Myspecs = {
    constructor: function constructor(name) {
        var _this = this;

        _.forEach(name, function (val) {
            _this[val] = [];
        });
        return this;
    },
    clear: function clear() {
        var _this2 = this;

        _.forEach(Object.keys(this), function (val) {
            _this2[val] = [];
        });
    }
};
var filterSpecs = [];
my_catalog.map(function (item, index) {
    filterSpecs.push(Object.keys(item.specs));
});
filterSpecs = _.flattenDeep(filterSpecs);
filterSpecs = unique(filterSpecs);

var filterVar = Object.create(Myspecs).constructor(filterSpecs);
var filterParametr = Object.create(Myspecs).constructor(filterSpecs);
var filterEnable = Object.create(Myspecs).constructor(filterSpecs);
my_catalog.map(function (item, index) {
    _.forEach(Object.keys(item.specs), function (e, i) {
        if (!_.includes(filterVar[e], item.specs[e])) {
            filterVar[e].push(item.specs[e]);
        }
    });
});

//Массив выбранных чекбоксов

var FilterVal = function (_React$Component) {
    _inherits(FilterVal, _React$Component);

    function FilterVal() {
        _classCallCheck(this, FilterVal);

        return _possibleConstructorReturn(this, (FilterVal.__proto__ || Object.getPrototypeOf(FilterVal)).apply(this, arguments));
    }

    _createClass(FilterVal, [{
        key: "render",
        value: function render() {
            var filterValItem = this.props.filterValItem;
            var name = this.props.name;
            var changeHandler = this.props.onChange;
            var checkFlag = this.props.checkFlag;
            var disableFlag = this.props.dFlag;
            return React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "checkbox",
                    value: filterValItem,
                    name: name,
                    disabled: disableFlag,
                    checked: checkFlag,
                    onChange: changeHandler
                }),
                filterValItem
            );
        }
    }]);

    return FilterVal;
}(React.Component);

var Filter = function (_React$Component2) {
    _inherits(Filter, _React$Component2);

    function Filter(props) {
        _classCallCheck(this, Filter);

        var _this4 = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

        _this4.state = { stateFlag: null };
        _this4._clickHandlerFilter = _this4._clickHandlerFilter.bind(_this4);
        return _this4;
    }

    _createClass(Filter, [{
        key: "_clickHandlerFilter",
        value: function _clickHandlerFilter(e) {
            e.target.disabled = true;
            this.setState({ stateFlag: false });
        }
    }, {
        key: "render",
        value: function render() {
            var filterValTmpl = [];
            var filterValItem = this.props.filterValItem;
            var filterPar = this.props.filterParametr;
            var changeHadler = this.props.onChange;
            var stateFlag = this.state.stateFlag;
            var dFlag = this.props.dFlag;
            var filterValue = this.props.filterValue;
            _.forEach(filterValItem, function (item, index) {
                filterValTmpl.push(React.createElement(FilterVal, {
                    key: index,
                    name: filterValue,
                    onChange: changeHadler,
                    dFlag: stateFlag != undefined ? stateFlag : !_.includes(dFlag, item),
                    checkFlag: _.includes(filterPar, String(item)),
                    filterValItem: item
                }));
            });
            return React.createElement(
                "div",
                { className: "filter-criteria" },
                React.createElement(
                    "span",
                    null,
                    filterValue,
                    ":"
                ),
                filterValTmpl
            );
        }
    }]);

    return Filter;
}(React.Component);
//Шаблон элемента в каталоге


var Article = function (_React$Component3) {
    _inherits(Article, _React$Component3);

    function Article() {
        _classCallCheck(this, Article);

        return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
    }

    _createClass(Article, [{
        key: "render",
        value: function render() {
            var phone = this.props.catalog;
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "product-photo" },
                    React.createElement("img", { src: phone.image.small, height: "130", alt: phone.name })
                ),
                React.createElement(
                    "h2",
                    null,
                    React.createElement(
                        "a",
                        { href: "" },
                        phone.name
                    )
                ),
                React.createElement(
                    "ul",
                    { className: "product-description" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "Manufacturer: "
                        ),
                        phone.specs.manufacturer
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "Storage: "
                        ),
                        phone.specs.Storage,
                        " GB"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "OS: "
                        ),
                        phone.specs.OS
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "Camera: "
                        ),
                        phone.specs.Camera,
                        " Mpx"
                    )
                ),
                React.createElement(
                    "button",
                    null,
                    "Buy now"
                ),
                React.createElement(
                    "p",
                    { className: "product-price" },
                    phone.price,
                    "$"
                )
            );
        }
    }]);

    return Article;
}(React.Component);
//Главный элемент (Страница каталога)


var Product = function (_React$Component4) {
    _inherits(Product, _React$Component4);

    function Product(props) {
        _classCallCheck(this, Product);

        var _this6 = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));

        var catalog = _this6.props.catalog;

        _this6.state = { filterParametr: filterParametr };
        _this6._clickHandler = _this6._clickHandler.bind(_this6);
        _this6._changeHandler = _this6._changeHandler.bind(_this6);
        return _this6;
    }

    _createClass(Product, [{
        key: "_clickHandler",
        value: function _clickHandler() {
            this.setState(function () {
                this.state.filterParametr.clear();
            });
        }
    }, {
        key: "_changeHandler",
        value: function _changeHandler(e) {
            var _this7 = this;

            var value = e.target.value;
            var select = e.target.checked;
            var target = e.target.name;
            this.setState(function () {
                if (select == true) {
                    _this7.state.filterParametr[target].push(value);
                } else {
                    var index = _this7.state.filterParametr[target].indexOf(value);
                    _this7.state.filterParametr[target].splice(index, 1);
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var catalog = this.props.catalog;
            var filterParametr = this.state.filterParametr;
            var changeHadler = this._changeHandler;
            var disabledFlag = [];
            var catalogeTemplate = void 0,
                filterTemplate = [];
            filterEnable.clear();
            if (catalog.length > 0) {
                catalogeTemplate = catalog.map(function (item, index) {
                    var flag = false;
                    _.forEach(Object.keys(filterParametr), function (e, key) {
                        var fb = item.specs[e];
                        var fc = filterParametr;
                        if (!_.includes(fc[e], String(fb)) && filterParametr[e] != 0) {
                            flag = false;
                            return false;
                        };
                        if (!_.includes(filterEnable[e], fb)) {
                            filterEnable[e].push(fb);
                        }
                        flag = true;
                    });
                    if (flag) {
                        return React.createElement(Article, { key: index, catalog: item });
                    }
                });
            } else {
                catalogeTemplate = React.createElement(
                    "p",
                    null,
                    "\u041D\u0435\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435"
                );
            }
            if (Object.keys(filterVar).length > 0) {
                _.forEach(Object.keys(filterVar), function (item, index) {
                    filterTemplate.push(React.createElement(Filter, { dFlag: filterEnable[item], onChange: changeHadler, key: index, filterValItem: filterVar[item], filterValue: item, filterParametr: filterParametr[item] }));
                });
            } else {
                filterTemplate = React.createElement(
                    "p",
                    null,
                    "\u041D\u0435\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0432 \u0444\u0438\u043B\u044C\u0442\u0440\u0435"
                );
            }
            return React.createElement(
                "div",
                { className: "all-products page visible" },
                React.createElement(
                    "div",
                    { className: "filters" },
                    React.createElement(
                        "div",
                        { className: "form" },
                        filterTemplate,
                        React.createElement(
                            "button",
                            { onClick: this._clickHandler },
                            "Clear"
                        )
                    )
                ),
                React.createElement(
                    "ul",
                    { className: "products-list" },
                    catalogeTemplate,
                    React.createElement(
                        "strong",
                        { className: 'news__count ' + (catalog.length > 0 ? '' : 'none') },
                        "\u0412\u0441\u0435\u0433\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u0439: ",
                        catalog.length
                    )
                )
            );
        }
    }]);

    return Product;
}(React.Component);

var App = function (_React$Component5) {
    _inherits(App, _React$Component5);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(Product, { catalog: my_catalog });
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }
    return Object.keys(obj); // или собрать ключи перебором для IE8-
}
// //Массив критерий фильтра
// var filter_Specs = [
//     {
//         Manufacturer: [
//             "Apple",
//             "Samsung",
//             "HTC",
//             "Nokia",
//             "ZTE",
//             "Sony"
//         ]
//     },
//     {
//         Storage: [
//             16,
//             32
//         ]
//     },
//     {
//         OS: [
//             'Android',
//             'iOS',
//             'Windows'
//         ]
//     },
//     {
//         Camera: [
//             5,
//             8,
//             12
//         ]
//     }
// ];
// //Массив товаров
// var my_catalog = [
//     {
//         id: 1,
//         name: "Sony Xperia Z3",
//         price: 899,
//         specs: {
//             "manufacturer": "Sony",
//             "storage": 16,
//             "os": "Android",
//             "camera": 15
//         },
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//         rating: 4,
//         image: {
//             "small": "assets/images/sony-xperia-z3.jpg",
//             "large": "assets/images/sony-xperia-z3-large.jpg"
//         }
//     },
//     {
//         id: 2,
//         name: "Iphone 6",
//         price: 899,
//         specs: {
//             "manufacturer": "Apple",
//             "storage": 16,
//             "os": "iOS",
//             "camera": 8
//         },
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//         rating: 4,
//         image: {
//             "small": "assets/images/iphone6.jpg",
//             "large": "assets/images/iphone6-large.jpg"
//         }
//     },
//     {
//         id: 3,
//         name: "HTC One M8",
//         price: 899,
//         specs: {
//             "manufacturer": "HTC",
//             "storage": 32,
//             "os": "Android",
//             "camera": 5
//         },
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//         rating: 4,
//         image: {
//             "small": "assets/images/htc-one.jpg",
//             "large": "assets/images/htc-one-large.jpg"
//         }
//     },
//     {
//         id: 4,
//         name: "Galaxy Alpha",
//         price: 899,
//         specs: {
//             "manufacturer": "Samsung",
//             "storage": 32,
//             "os": "Android",
//             "camera": 12
//         },
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//         rating: 4,
//         image: {
//             "small": "assets/images/galaxy-alpha.jpg",
//             "large": "assets/images/galaxy-alpha-large.jpg"
//         }
//     },
//     {
//         id: 5,
//         name: "Nokia Lumia",
//         price: 450,
//         specs: {
//             "manufacturer": "Nokia",
//             "storage": 16,
//             "os": "Windows",
//             "camera": 5
//         },
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//         rating: 4,
//         image: {
//             "small": "assets/images/nokia-lumia.jpg",
//             "large": "assets/images/nokia-lumia-large.jpg"
//         }
//     },
//     {
//         id: 6,
//         name: "Zte Nubia",
//         price: 399,
//         specs: {
//             "manufacturer": "ZTE",
//             "storage": 32,
//             "os": "Android",
//             "camera": 12
//         },
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//         rating: 4,
//         image: {
//             "small": "assets/images/zte-nubia.jpg",
//             "large": "assets/images/zte-nubia-large.jpg"
//         }
//     },
//     {
//         id: 7,
//         name: "Samsung Galaxy S5",
//         price: 399,
//         specs: {
//             "manufacturer": "Samsung",
//             "storage": 16,
//             "os": "Android",
//             "camera": 15
//         },
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//         rating: 4,
//         image: {
//             "small": "assets/images/galaxy-s5.jpg",
//             "large": "assets/images/galaxy-s5-large.jpg"
//         }
//     },
//     {
//         id: 8,
//         name: "Iphone 5S",
//         price: 399,
//         specs: {
//             "manufacturer": "Apple",
//             "storage": 16,
//             "os": "iOS",
//             "camera": 8
//         },
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//         rating: 4,
//         image: {
//             "small": "assets/images/iphone5s.jpg",
//             "large": "assets/images/iphone5s-large.jpg"
//         }
//     }
// ];
// //Массив выбранных чекбоксов
// var FilterVal = React.createClass({
//     getInitialState: function() {
//         return {
//             filterflag: false
//         };
//     },
//     changeHandlerToggle: function(e) {
//         this.props.changeHandler(e);
//     },
//     render: function() {
//         var filterValItem = this.props.filterValItem;
//         var filterPar = this.props.filterPar;
//         var name = this.props.name;
//         var filterflag = this.state.filterflag;
//
//         if (filterPar == filterValItem) {
//             filterflag = !filterflag;
//         }
//
//         return (
//             <label>
//                 <input
//                     type="checkbox"
//                     value={filterValItem}
//                     name={name}
//                     checked = {filterflag}
//                     onChange={this.changeHandlerToggle}
//                 />
//                 {filterValItem}
//             </label>
//         );
//     }
// });
// //Фильт
// var Filter = React.createClass({
//     render: function() {
//         var filterValTmpl = [];
//         var filterValItem = this.props.filterValItem;
//         var filterPar = this.props.filterParametr;
//         var filterValue = this.props.filterValue;
//
//         filterValItem.forEach(function(item,index,filterValItem){
//             filterValTmpl.push(<FilterVal
//                 key = {index}
//                 name = {filterValue}
//                 filterValItem = {item}
//                 filterPar = {filterPar}
//             />)
//         });
//
//         return (
//             <div className='filter-criteria'>
//                 <span>{filterValue}:</span>
//                 {filterValTmpl}
//             </div>
//         );
//     }
// });
// var man = [];
// //Шаблон элемента в каталоге
// var Article = React.createClass({
//     render: function() {
//         var phone = this.props.catalog;
//         return (
//             <li>
//                 <a href="#" className="product-photo"><img src={phone.image.small} height="130" alt={phone.name}/></a>
//                 <h2><a href="">{phone.name}</a></h2>
//                 <ul className="product-description">
//                     <li><span>Manufacturer: </span>{phone.specs.manufacturer}</li>
//                     <li><span>Storage: </span>{phone.specs.storage} GB</li>
//                     <li><span>OS: </span>{phone.specs.os}</li>
//                     <li><span>Camera: </span>{phone.specs.camera} Mpx</li>
//                 </ul>
//                 <button>Buy now</button>
//                 <p className='product-price'>{phone.price}$</p>
//             </li>
//         );
//     }
// });
// //Главный элемент (Страница каталога)
// var Product = React.createClass({
//     getInitialState: function() {
//         return {
//             filterParametr : {
//                 Manufacturer : ['Apple'],
//                 Storage : [],
//                 OS : ['iOS'],
//                 Camera : []
//             }
//         }
//     },
//     clickHandler: function(e) {
//         this.setState({
//             filterParametr : {
//                 Manufacturer : [],
//                 Storage : [],
//                 OS : [],
//                 Camera : []
//             }});
//     },
//     onChangeHandler: function (target, value) {
//         console.log(target, value)
//     },
//     render: function() {
//         var catalog = this.props.catalog;
//         var filterSpecs = this.props.filterSpecs;
//         var filterParametr = this.state.filterParametr;
//         var catalogeTemplate, filterTemplate;
//         if (catalog.length > 0) {
//             catalogeTemplate = catalog.map(function(item, index){
//                 return (
//                     <Article key = {index} catalog = {item} />
//                 );
//             })
//         } else {
//             catalogeTemplate = <p>Нет позиций в каталоге</p>
//         }
//         if (filterSpecs.length > 0) {
//             filterTemplate = filterSpecs.map(function(item, index){
//                 var filterItem = item;
//                 var fix = Object.keys(filterItem);
//                 var myArr = filterItem[fix];
//                 return (
//                     // changeHandler={onChangeHandler}
//                     <Filter key = {index} filterValItem = {myArr} filterValue = {fix} filterParametr = {filterParametr[fix]}/>
//                 );
//             })
//         } else {
//             filterTemplate = <p>Нет позиций в фильтре</p>
//         }
//         return (
//
//             <div className="all-products page visible">
//                 <div className="filters">
//                     <div className="form">
//                         {filterTemplate}
//                         <Button name={"Show"} />
//                         <button onClick={this.clickHandler}>Clear</button>
//                     </div>
//                 </div>
//
//                 <ul className="products-list">
//                     {catalogeTemplate}
//                     <strong className={'news__count ' + (catalog.length > 0 ? '':'none')}>
//                         Всего позиций: {catalog.length}
//                     </strong>
//                 </ul>
//             </div>
//         );
//     }
// });
//
// //Событие при клике на кнопки фильтра
//
// var Button = React.createClass({
//
//     render: function() {
//         var selected = this.props.isSelected;
//         return (
//             <button>
//                 {this.props.name}
//             </button>
//         );
//     }
// });
//
// var App = React.createClass({
//     render: function() {
//         return (
//             <Product catalog={my_catalog} filterSpecs={filter_Specs} />
//         );
//     }
// });
//
// ReactDOM.render(
//     <App  />,
//     document.getElementById('root')
// );
"use strict";
//# sourceMappingURL=app.js.map

//Массив товаров
const my_catalog = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
];

const Myspecs = {
    constructor(name) {
        _.forEach(name, (val) => {
            this[val] = []
        });
        return this;
    },
    clear() {
        _.forEach(Object.keys(this), (val) => {
            this[val] = [];
        })
    }
};
let filterSpecs = [];
my_catalog.map(function(item, index) {
    filterSpecs.push(Object.keys(item.specs));
});
filterSpecs = _.flattenDeep(filterSpecs);
filterSpecs = unique(filterSpecs);

let filterVar = Object.create(Myspecs).constructor(filterSpecs);
let filterParametr = Object.create(Myspecs).constructor(filterSpecs);
let filterEnable = Object.create(Myspecs).constructor(filterSpecs);
my_catalog.map(function(item, index) {
    _.forEach(Object.keys(item.specs), (e, i) => {
        if (!_.includes(filterVar[e], item.specs[e])) {
            filterVar[e].push(item.specs[e])
        }
    })
});


//Массив выбранных чекбоксов
class FilterVal extends React.Component {
    render () {
        var filterValItem = this.props.filterValItem;
        var name = this.props.name;
        var changeHandler = this.props.onChange;
        var checkFlag = this.props.checkFlag;
        var disableFlag = this.props.dFlag;
        return (
            <label>
                <input
                    type="checkbox"
                    value={filterValItem}
                    name={name}
                    disabled={disableFlag}
                    checked={checkFlag}
                    onChange={changeHandler}
                />
                {filterValItem}
            </label>
        )
    }
}
class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {stateFlag : null};
        this. _clickHandlerFilter = this. _clickHandlerFilter.bind(this);
    }
    _clickHandlerFilter(e) {
        e.target.disabled = true;
        this.setState({stateFlag : false})
    }
    render () {
        var filterValTmpl = [];
        var filterValItem = this.props.filterValItem;
        var filterPar = this.props.filterParametr;
        var changeHadler = this.props.onChange;
        let stateFlag = this.state.stateFlag;
        let dFlag = this.props.dFlag;
        var filterValue = this.props.filterValue;
        _.forEach(filterValItem,function(item,index){
            filterValTmpl.push(<FilterVal
                key = {index}
                name = {filterValue}
                onChange = {changeHadler}
                dFlag = {stateFlag != undefined ? stateFlag : !(_.includes(dFlag, item))}
                checkFlag = {_.includes(filterPar, String(item))}
                filterValItem = {item}
            />)
        });
        return (
            <div className='filter-criteria'>
                <span>{filterValue}:</span>
                {filterValTmpl}
                {/*<button onClick={this._clickHandlerFilter}>Выбрать несколько</button>*/}
            </div>
        )
    }
}
//Шаблон элемента в каталоге
class Article extends React.Component {
    render () {
        var phone = this.props.catalog;
        return (
            <li>
                <a href="#" className="product-photo"><img src={phone.image.small} height="130" alt={phone.name}/></a>
                <h2><a href="">{phone.name}</a></h2>
                <ul className="product-description">
                    <li><span>Manufacturer: </span>{phone.specs.manufacturer}</li>
                    <li><span>Storage: </span>{phone.specs.Storage} GB</li>
                    <li><span>OS: </span>{phone.specs.OS}</li>
                    <li><span>Camera: </span>{phone.specs.Camera} Mpx</li>
                </ul>
                <button>Buy now</button>
                <p className='product-price'>{phone.price}$</p>
            </li>
        );
    }
}
//Главный элемент (Страница каталога)
class Product extends React.Component {
    constructor(props) {
        super(props);

        let catalog = this.props.catalog;

        this.state = {filterParametr};
        this. _clickHandler = this. _clickHandler.bind(this);
        this. _changeHandler = this. _changeHandler.bind(this);
    }
    _clickHandler() {
        this.setState(function(){
            this.state.filterParametr.clear()
        })
    }
    _changeHandler (e) {
        let value = e.target.value;
        let select = e.target.checked;
        let target = e.target.name;
        this.setState(() => {
            if (select == true) {
                this.state.filterParametr[target].push(value)
            } else {
                let index = this.state.filterParametr[target].indexOf(value);
                this.state.filterParametr[target].splice(index,1)
            }
        });
    }
    render () {
        let catalog = this.props.catalog;
        let filterParametr = this.state.filterParametr;
        let changeHadler = this._changeHandler;
        let disabledFlag = [];
        let catalogeTemplate, filterTemplate = [];
        filterEnable.clear();
        if (catalog.length > 0) {
            catalogeTemplate = catalog.map(function(item, index){
                let flag = false;
                _.forEach(Object.keys(filterParametr), (e, key) => {
                    let fb = item.specs[e];
                    let fc = filterParametr;
                    if (!(_.includes(fc[e], String(fb))) && filterParametr[e] != 0) {
                        flag = false;
                        return false
                    };
                    if (!_.includes(filterEnable[e], fb)) {
                        filterEnable[e].push(fb)
                    }
                    flag = true
                });
                if (flag) {
                    return (
                        <Article key = {index} catalog = {item} />
                    )
                }
            })
        } else {
            catalogeTemplate = <p>Нет позиций в каталоге</p>
        }
        if (Object.keys(filterVar).length > 0) {
            _.forEach(Object.keys(filterVar), (item, index) => {
                filterTemplate.push(<Filter dFlag={filterEnable[item]} onChange={changeHadler} key = {index} filterValItem = {filterVar[item]} filterValue = {item} filterParametr = {filterParametr[item]}/>)
            });
        } else {
            filterTemplate = <p>Нет позиций в фильтре</p>
        }
        return (
            <div className="all-products page visible">
                <div className="filters">
                    <div className="form">
                        {filterTemplate}
                        <button onClick={this._clickHandler}>Clear</button>
                    </div>
                </div>

                <ul className="products-list">
                    {catalogeTemplate}
                    <strong className={'news__count ' + (catalog.length > 0 ? '':'none')}>
                        Всего позиций: {catalog.length}
                    </strong>
                </ul>
            </div>
        );
    }
}

class App extends React.Component {
    render () {
        return (
            <Product catalog={my_catalog} />
        );
    }
}


ReactDOM.render(
    <App  />,
    document.getElementById('root')
);

function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }
    return Object.keys(obj); // или собрать ключи перебором для IE8-
}
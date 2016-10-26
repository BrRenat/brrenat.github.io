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
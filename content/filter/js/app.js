
"use strict";

var my_catalog = [{
    id: 1,
    name: "Sony Xperia Z3",
    price: 899,
    specs: {
        "manufacturer": "Sony",
        "storage": 16,
        "os": "Android",
        "camera": 15
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
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
        "manufacturer": "Apple",
        "storage": 16,
        "os": "iOS",
        "camera": 8
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
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
        "manufacturer": "HTC",
        "storage": 32,
        "os": "Android",
        "camera": 5
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
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
        "manufacturer": "Samsung",
        "storage": 32,
        "os": "Android",
        "camera": 12
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
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
        "manufacturer": "Nokia",
        "storage": 16,
        "os": "Windows",
        "camera": 5
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
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
        "manufacturer": "ZTE",
        "storage": 32,
        "os": "Android",
        "camera": 12
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
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
        "manufacturer": "Samsung",
        "storage": 16,
        "os": "Android",
        "camera": 15
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
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
        "manufacturer": "Apple",
        "storage": 16,
        "os": "iOS",
        "camera": 8
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
    rating: 4,
    image: {
        "small": "assets/images/iphone5s.jpg",
        "large": "assets/images/iphone5s-large.jpg"
    }
}];

var Button = React.createClass({
    displayName: "Button",

    handleClick: function handleClick(e) {
        console.log('click');
    },

    componentDidMount: function componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', this.handleClick);
    },

    componentWillUnmount: function componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener('click', this.handleClick);
    },

    render: function render() {
        return React.createElement(
            "button",
            null,
            "Buy Now!"
        );
    }
});
//
var Article = React.createClass({
    displayName: "Article",

    render: function render() {
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
                    { href: "#" },
                    " ",
                    phone.name,
                    " "
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
                    phone.specs.storage,
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
                    phone.specs.os
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "span",
                        null,
                        "Camera: "
                    ),
                    phone.specs.camera,
                    " Mpx"
                )
            ),
            React.createElement(Button, null),
            React.createElement(
                "p",
                { className: "product-price" },
                phone.price,
                "$"
            ),
            React.createElement("div", { className: "highlight" })
        );
    }
});

var Product = React.createClass({
    displayName: "Product",

    render: function render() {
        var catalog = this.props.catalog;
        var catalogeTemplate;

        if (catalog.length > 0) {
            catalogeTemplate = catalog.map(function (item, index) {
                return React.createElement(Article, { key: index, catalog: item });
            });
        } else {
            catalogeTemplate = React.createElement(
                "p",
                null,
                "Нет позиций в каталоге"
            );
        }

        return React.createElement(
            "ul",
            { className: "products-list" },
            catalogeTemplate,
            React.createElement(
                "strong",
                { className: 'news__count ' + (catalog.length > 0 ? '' : 'none') },
                "Всего позиций: ",
                catalog.length
            )
        );
    }
});

var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement(Product, { catalog: my_catalog });
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map

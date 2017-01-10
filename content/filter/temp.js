//Шаблон элемента в каталоге
class VideoListItem extends React.Component {
    render () {
        let video = this.props.catalog;
        let searchValue = this.props.searchValue;
        
        if (!video.id.videoId) return null;
        let url = 'https://www.youtube.com/watch?v=' + video.id.videoId;
        return (
              <li className='video-list__item'>
                  <a className="video-list__link" href={url} target="_blank"><img src={video.snippet.thumbnails.default.url} /></a>
                  <a className="video-list__link" href={url} target="_blank"><span>{video.snippet.title}</span></a>
              </li>
        );
    }
}
//Главный элемент (Страница каталога)
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
          page : 1,
          value : 'Spring MVC',
          sort : false,
          searchCurrentVal : ''
        };
    }
    _clickHandlerFilter(e) {
        this.setState({page : this.state.page + e})
    }
    _clickHandlerPage(e) {
        this.setState({page : e})
    }
    _handleChange(e) {
        this.setState({value: e.target.value});
    }
    _inputHandler(e) {
        onYouTubeApiLoad(this.state.value);
        e.preventDefault();
    }
    _sortHandler(e) {
        this.setState({sort: !this.state.sort});
    }
    _searchCurrent(e) {
        this.setState({searchCurrentVal: e.target.value});
    }
    render () {
        const Catalog = this.props.catalog;
        let catalog = this.props.catalog,
            {page, searchValue, sort, searchCurrentVal} = this.state,
            videoListTemplate, 
            pagginationTemplate;
      
        // sort element by date or title
        if (sort) {
          catalog.sort( (a,b) => a.snippet.title < b.snippet.title);
          catalog.map( (item, index) => console.log(item.snippet.title));
        } else {
          catalog.sort( (a,b) => a.snippet.publishedAt < b.snippet.publishedAt);
          catalog.map( (item, index) => console.log(item.snippet.publishedAt));
        }
      
        // Search in results filter
        if (searchCurrentVal !== '') {
          let rg = new RegExp(searchCurrentVal, 'i');
          catalog = catalog.filter(val => rg.test(val.snippet.title));
        }
        let catalogLength = catalog.length;
      
        // sort by 5 item per page
        catalog = catalog.slice((page - 1) * 5, page * 5);
        if (catalogLength > 0) {
            videoListTemplate = catalog.map( (item, index) => <VideoListItem key = {index} catalog = {item} /> );
            pagginationTemplate = Catalog.map( (item, i) => {
              if ( i % 5 !== 0 ) return false;
              return (
                  <li onClick={this._clickHandlerPage.bind(this, i / 5 + 1)} 
                      className={page == i / 5 + 1 ? 'page-list__item page-list__item--active': 'page-list__item'} 
                      key = {i}>{i / 5 + 1}
                  </li>
              )
            })
        } else {
            videoListTemplate = <p>no matches</p>
        }
        return (
          <div className="container">
              <div className="top">
                <div className="top__title">Youtube search list</div>
                <form onSubmit={this._inputHandler.bind(this)} className="top__label pull-right">
                  <label className="label pull-left">
                    Search:
                    <input className="input" onChange={this._handleChange.bind(this)} type="text" value={searchValue} />
                  </label>
                  <input className="btn" type="submit" value="Submit" />
                </form>
              </div>
              <div className="top top--second">
                  <div className="top__title">
                      <label className="label">
                          Search in results:
                          <input className="input" onChange={this._searchCurrent.bind(this)} value={searchCurrentVal} type="text" />
                      </label>
                  </div>
                  <div className="top__label pull-right">
                      <span className="result">{catalogLength} results</span>
                      <button className="btn" onClick={this._sortHandler.bind(this)}>{sort ? 'Sort by date' : 'Sort by name'}</button>
                  </div>
              </div>
              <ul className="video-list">
                  {videoListTemplate}
              </ul>
              <button className="btn" disabled={page === 1} onClick={this._clickHandlerFilter.bind(this, -1)}>prev</button>
              <ul className="page-list">
                  {pagginationTemplate}
              </ul>
              <button className="btn" disabled={page > catalogLength / 5 - 1} onClick={this._clickHandlerFilter.bind(this, 1)}>next</button>
          </div>

        );
    }
}


function onYouTubeApiLoad(text = 'Spring MVC') {
    gapi.client.setApiKey('AIzaSyAcDIsD_ipHnojAvrGthtyunDoM6MLjd-g');
    searchYouTubeApi();
    function searchYouTubeApi() {
        var request = gapi.client.youtube.search.list(
          {
              part: 'snippet',
              q: text,
              type: 'video',
              maxResults: 20
          });
        request.execute(onSearchResponse);
    }
    function onSearchResponse(response) {
        var responseString = JSON.stringify(response, '', 2);
        ReactDOM.render(
          <Main catalog={response.items} />,
          document.getElementById('root')
        );
    }
}
window.onload = function(){
  gapi.load('client', gapi.client.load('youtube', 'v3', onYouTubeApiLoad));
}

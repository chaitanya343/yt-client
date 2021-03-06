import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos : [], selectedVideo : null, theme : 'LightSlateGray' };

    componentDidMount () {
        this.onTermSubmit('chilled cow');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q : term
            }
        });

        this.setState({ 
            videos : response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.theme}}>
                <div className="ui container">
                    <h1>Chai's Youtube Web client</h1>
                    Theme picker: <button className="ui teal basic button" onClick={()=>{this.setState({ theme: 'Black' })}}>Dark</button>
                    <button className="ui teal basic button" onClick={()=>{this.setState({ theme: 'FloralWhite' })}}>Light</button>
                    <button className="ui teal basic button" onClick={()=>{this.setState({ theme: 'LightSlateGray' })}}>Gray</button>
                    <SearchBar onFormSubmit={this.onTermSubmit} theme={this.state.theme}/>
                    <br />
                    <div className='ui grid'>
                        <div className='ui grid'>
                            <div className='twelve wide column'>
                                <VideoDetail video={this.state.selectedVideo} theme={this.state.theme}/>
                            </div>
                            <div className='four wide column'>
                                <VideoList 
                                    onVideoSelect={this.onVideoSelect} 
                                    videos={this.state.videos}
                                    theme={this.state.theme}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
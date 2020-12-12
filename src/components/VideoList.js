import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
    const renderedList = props.videos.map((video) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} key={video.id.videoId} video={video} />
    })

    return (
        <div style={{backgroundColor: props.theme}}>
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        </div>
    );
};

export default VideoList;
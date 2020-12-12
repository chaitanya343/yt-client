import React from 'react';

const VideoDetail = props => {
    if (!props.video){
        return <div>Loading...</div>;
    }

    const videoEmbedSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    const videoSrc = `https://www.youtube.com/watch?v=${props.video.id.videoId}`

    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoEmbedSrc} title='video player'/>
            </div>
            <div className='ui segment' style={{backgroundColor: props.theme}} >
                <h4 className='ui header'>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
                <a className="ui black basic button" href={videoSrc}>Visit this channel on youtube.com</a><br/><br/>
                <a className="ui black basic button" href={videoSrc}>Watch this video on youtube.com</a>
            </div>
        </div>
    );
};

export default VideoDetail;
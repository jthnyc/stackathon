import React from 'react';

// const APIkey = "AIzaSyCmAE5-qP5OCuD156muHHW_7w99NTNEJc0"
// const channelId = "UCx8Hvu3edWIwQhQZVvMT9aQ"
// const result = 5
// let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${APIkey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`

const VideoList = (props) => {
    console.log("PROPS in VIDEOLIST: ", props.videos)

    return (
        <div>
            <div className="video-list">
                {props.videos.map((video, id) => {
                    return (
                        <div key={id}>
                            <img alt="pics" src={video.snippet.thumbnails.default.url} width="120" height="90" />
                            <p className="video-title">{video.snippet.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VideoList
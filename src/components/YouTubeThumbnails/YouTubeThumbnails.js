import React, { useState, useEffect } from 'react';
import './YouTubeThumbnails.css';

const YouTubeThumbnails = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  // Your YouTube API Key
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY || '';

  // YOUR ACTUAL VIDEO IDs - Replace these with your real video IDs
  const myVideoIds = [
    'qMwCfDeON04',  // Replace with your first video ID
    'y5vqbvCPfqU',  // Replace with your second video ID
    'vcgf80SbVWM',  // Replace with your third video ID
    'kPKdjPfQG6A',  // Replace with your fourth video ID
    'rsVTqF5_OoI',  // Replace with your fifth video ID
    'o3Yafw9oq8k',
    'Ajv5RO1kNzY',

    // Add up to 50 videos (YouTube API limit per request)
  ];

  // Fallback data in case API fails
  const fallbackVideos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Example: Thumbnail Design Project 1',
      channelTitle: 'Client Channel Name',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      views: '1,234,567',
      publishedAt: 'Jan 15, 2023',
      channelId: 'UCxxxxxxxxxxxxxxxxxxxxxx'
    },
    // Add more examples if needed
  ];

  useEffect(() => {
    const fetchMyVideos = async () => {
      // If no API key, use fallback
      if (!API_KEY) {
        console.log('Using fallback - Add YouTube API key for real data');
        setVideos(fallbackVideos);
        setUsingFallback(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        if (myVideoIds.length === 0) {
          // If no video IDs provided, use fallback
          setVideos(fallbackVideos);
          setUsingFallback(true);
          setLoading(false);
          return;
        }

        // Fetch videos by their IDs (maximum 50 per request)
        const videoIdsString = myVideoIds.slice(0, 50).join(','); // YouTube API limit
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIdsString}&key=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error(`YouTube API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          const fetchedVideos = data.items.map(video => ({
            id: video.id,
            title: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
            thumbnail: video.snippet.thumbnails.maxres?.url || 
                      video.snippet.thumbnails.high?.url || 
                      video.snippet.thumbnails.medium?.url,
            views: parseInt(video.statistics.viewCount || 0).toLocaleString(),
            publishedAt: new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }),
            channelId: video.snippet.channelId,
            description: video.snippet.description
          }));
          
          setVideos(fetchedVideos);
          setUsingFallback(false);
        } else {
          // If no videos found, use fallback
          setVideos(fallbackVideos);
          setUsingFallback(true);
        }
        
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        setVideos(fallbackVideos);
        setUsingFallback(true);
        setLoading(false);
      }
    };

    fetchMyVideos();
  }, []);

  const displayVideos = videos.length > 0 ? videos : fallbackVideos;

  return (
    <section id="youtube-thumbnails" className="youtube-thumbnails-section">
      <div className="container">
        <div className="section-header">
          {usingFallback && (
            <div className="api-notice">
              <p>
                <i className="fas fa-info-circle"></i>
                {myVideoIds.length === 0 ? (
                  'Add your video IDs to show your actual designs.'
                ) : (
                  'Add your YouTube API key to show real data.'
                )}
                <a 
                  href="#setup-instructions" 
                  className="api-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('TO SHOW YOUR ACTUAL DESIGNS:\n\n1. Get YouTube API key\n2. Replace "YOUR_YOUTUBE_API_KEY"\n3. Replace "VIDEO_ID_X" with your actual video IDs\n4. Add videos you designed thumbnails for');
                  }}
                >
                  Setup Instructions
                </a>
              </p>
            </div>
          )}
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner">
              <i className="fas fa-spinner fa-spin"></i>
              <p>Loading your thumbnail designs...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="thumbnails-grid">
              {displayVideos.map((video, index) => (
                <div key={`${video.id}-${index}`} className="thumbnail-card">
                  
                  <div className="thumbnail-image-container">
                    <img 
                      src={video.thumbnail} 
                      alt={`Thumbnail design for: ${video.title}`}
                      className="thumbnail-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
                      }}
                    />
                    <div className="thumbnail-overlay">
                      <a 
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="play-button"
                        aria-label={`Watch video with my thumbnail design`}
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                    <div className="thumbnail-views">
                      <i className="fas fa-eye"></i> {video.views} views
                    </div>
                  </div>
                  
                  <div className="thumbnail-info">
                    <div className="channel-info">
                      <div className="channel-avatar">
                        {video.channelTitle.charAt(0).toUpperCase()}
                      </div>
                      <div className="channel-details">
                        <h3 className="channel-title">{video.channelTitle}</h3>
                        <span className="publish-date">
                          <i className="far fa-calendar"></i> {video.publishedAt}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="video-title" title={video.title}>
                      {video.title}
                    </h4>
                    
                    <div className="thumbnail-actions">
                      <a 
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <i className="fab fa-youtube"></i> View on YouTube
                      </a>
                      <a 
                        href={`https://www.youtube.com/channel/${video.channelId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <i className="fas fa-external-link-alt"></i> Channel
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <h3>{displayVideos.length}</h3>
                <p>Thumbnails Designed</p>
              </div>
              <div className="stat-item">
                <h3>
                  {displayVideos.reduce((sum, video) => {
                    const views = parseInt(video.views.replace(/,/g, '')) || 0;
                    return sum + views;
                  }, 0).toLocaleString()}
                </h3>
                <p>Total Views</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default YouTubeThumbnails;
import React, { useEffect, useState } from 'react';
import './VideoComments.css';


const VideoComments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const apiKey = 'AIzaSyDwCaQVTwJsau514qhaWTMBlZ80iQgKLtM';
        const apiUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }

        const data = await response.json();

        // Extract comments and commenter names from the response
        const commentsData = data.items.map(item => {
          const commentSnippet = item.snippet.topLevelComment.snippet;
          return {
            id: item.id,
            commenterName: commentSnippet.authorDisplayName,
            comment: commentSnippet.textDisplay,
            likeCount: item.snippet.topLevelComment.snippet.likeCount,
            publishedAt: commentSnippet.publishedAt,
            replies: item.snippet.totalReplyCount,
          };
        });

        setComments(commentsData);
        setLoading(false); // Set loading to false once comments are fetched
      } catch (error) {
        console.error('Error fetching comments:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchComments();
  }, [videoId]);

  return (
    <div className="video-comments-container">
      <h2 className="video-comments-header">Video Comments</h2>
      {loading ? (
        <div className="loading-spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ul className="comment-list">
          {comments.map(comment => (
            <li key={comment.id} className="comment-item">
              <div className="comment-header">
                <strong>{comment.commenterName}</strong>
                <span className="comment-date">{comment.publishedAt}</span>
              </div>
              <p className="comment-text">{comment.comment}</p>
              <div className="comment-footer">
                <span>{comment.likeCount} Likes</span>
                <span>{comment.replies} Replies</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VideoComments;
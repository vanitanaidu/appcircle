
export function addComment(comment, id) {

  return (dispatch) => {
    dispatch({ type: 'ADD_COMMENT' });
    return fetch(`/api/users/${id}/reviews`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ review: comment })
    })
      .then(response => response.json())
      .then(newComment => dispatch({ type: 'ADD_COMMENT', payload: newComment}));
  };
}

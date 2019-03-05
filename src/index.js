import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        blogPost="Nice post dude!"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 02:00AM"
        avatar={faker.image.avatar()}
        blogPost="Thumbs up!"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 06:00PM"
        avatar={faker.image.avatar()}
        blogPost="What's going on?"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

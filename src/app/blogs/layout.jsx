import React from 'react';

const PostLayout = ({children}) => {
    return (
        <div>
            <h2>Fixed portion of blog Layout</h2>
            <div>{children}</div>
        </div>
    );
};

export default PostLayout;
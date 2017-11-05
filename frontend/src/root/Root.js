import React from 'react';

import CategoriesList from '../category/CategoriesList';
import PostsList from '../post/PostsList';

const Root = (props) => {

    const categories = props.categories;
    const posts = props.posts;

    return (
        <div>
            <CategoriesList
                categories={categories}
            />
            <PostsList
                posts={posts}
            />
        </div>
    )
};

export default Root
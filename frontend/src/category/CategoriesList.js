import React from 'react'
import {Link} from 'react-router-dom';


const CategoriesList = ({ categories }) => {
    if (categories.length === 0) {
        return <p>No categories</p>
    }

    return (
        <div className='categories_list'>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.name}>
                        <h3 className='category_title'>
                            <Link className='category_link' to={`/category/${category.path}`}>{category.name}</Link>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CategoriesList

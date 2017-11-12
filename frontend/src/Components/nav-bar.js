import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

import CategoriesList from './categories-list';
import {fetchCategories} from "../Actions/actions";


class Root extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (

            <div className="main-navbar">
                <div className="main-navbar__section main-navbar__section_left">
                    <Link className='logo' to='/'>Readable</Link>
                    <CategoriesList
                        categories={this.props.categories}
                    />

                </div>

                <div className="main-navbar__section main-navbar__section_right">
                    <Link className='btn btn_x-large btn_navbar_new-post' to='/posts/new'>New post</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)

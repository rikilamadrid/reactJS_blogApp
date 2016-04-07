import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.post.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"post/" + post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/post/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.post.all };
}

//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({ fetchPosts }, dispatch);
//}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

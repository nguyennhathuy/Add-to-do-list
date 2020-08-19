import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ''
        };
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSearch = () => {
        this.props.onFindItems(this.state.keyWord);
    }
    render() {
        var { keyWord } = this.state;
        return (
            <div className='input-group'>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Nhập từ khóa ....'
                    name='keyWord'
                    value={keyWord}
                    onChange={this.onChange}
                />
                <span className='input-group-btn'>
                    <button
                        type="button"
                        className="btn btn-primary form-control"
                        onClick={this.onSearch}
                    >
                        <span className='fa fa-search mr-5'></span>
                        Tìm
                    </button>
                </span>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        keyword: state.findItems
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFindItems: (keyword) => {
            dispatch(actions.onFindItems(keyword));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find);
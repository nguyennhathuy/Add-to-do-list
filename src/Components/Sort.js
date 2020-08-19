import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {
    onSearch = (sort) => {
        this.props.onSortItems(sort);
    }
    render() {
        var span = <span className="glyphicon glyphicon-ok check-mark ml-5"></span>;
        return (
            <div className='dropdown'>
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id='dropdownMenu1'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='true'
                >
                    Sắp xếp
                    <span className='fa fa-caret-square-o-down ml-5'></span>
                </button>

                {/*Menu Dropdown*/}
                <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                    <li onClick={() => {
                        this.onSearch({
                            by: 'name',
                            value: 1
                        })
                    }}>
                        <span className='ml-5'>
                            <span className='fa fa-sort-alpha-asc mr-5'></span>
                            Tên A-Z
                            {this.props.sort.by === 'name' && this.props.sort.value === 1 ? span : ''}
                        </span>
                    </li>
                    <li onClick={() => {
                        this.onSearch({
                            by: 'name',
                            value: -1
                        })
                    }}>
                        <span className='ml-5'>
                            <span className='fa fa-sort-alpha-desc mr-5'></span>
                            Tên Z-A
                            {this.props.sort.by === 'name' && this.props.sort.value === -1 ? span : ''}
                        </span>
                    </li>
                    <li role='separator' className='divider'></li>
                    <li onClick={() => {
                        this.onSearch({
                            by: 'status',
                            value: 1
                        })
                    }}>
                        <span className='ml-5'>
                            Trạng thái kích hoạt
                            {this.props.sort.by === 'status' && this.props.sort.value === 1 ? span : ''}
                        </span>
                    </li>
                    <li onClick={() => {
                        this.onSearch({
                            by: 'status',
                            value: -1
                        })
                    }}>
                        <span className='ml-5'>
                            Trạng thái ẩn
                            {this.props.sort.by === 'status' && this.props.sort.value === -1 ? span : ''}
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        sort: state.sortItems
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortItems: (sort) => {
            dispatch(actions.onSortItems(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
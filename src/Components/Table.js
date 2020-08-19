import React, { Component } from 'react';
import TableItem from './TableItem';
import * as actions from './../actions/index';
import { connect } from 'react-redux';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        };
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        var filterItem = {
            name: name === 'filterName' ? value : this.state.filterName,
            value: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterItems(filterItem);
    }
    render() {
        var { items, filterItems } = this.props;
        //filter on table
        if (filterItems.name) {
            items = items.filter((item) => {
                return item.name.toLowerCase().indexOf(filterItems.name.toLowerCase()) !== -1;
            });
        }
        items = items.filter((item) => {
            if (filterItems.value === -1) {
                return item;
            } else {
                return item.status === (filterItems.value === 1 ? true : false);
            }
        });


        //Find on FindAndSort
        if (this.props.findItems) {
            items = items.filter((item) => {
                return item.name.toLowerCase().indexOf(this.props.findItems.toLowerCase()) !== -1;
            });
        }


        //Sort on FindAndSort
        if (this.props.sortItems.by === 'name') {
            items.sort((a, b) => {
                if (a.name > b.name) return this.props.sortItems.value;
                else if (a.name < b.name) return -this.props.sortItems.value;
                else return 0;
            });
        } else {
            items.sort((a, b) => {
                if (a.status > b.status) return -this.props.sortItems.value;
                else if (a.status < b.status) return this.props.sortItems.value;
                else return 0;
            })
        }


        var elmItem = items.map((item, index) => {
            return <TableItem
                key={index}
                index={index}
                item={item}
            />
        });
        var { filterName, filterStatus } = this.state;
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className='text-center'>STT</th>
                        <th className='text-center'>Tên</th>
                        <th className='text-center'>Trạng thái</th>
                        <th className='text-center'>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type='text'
                                className='form-control'
                                name='filterName'
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                className='form-control'
                                name='filterStatus'
                                value={filterStatus}
                                onChange={this.onChange}
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmItem}
                </tbody>
            </table>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        filterItems: state.filterItems,
        findItems: state.findItems,
        sortItems: state.sortItems
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterItems: (filter) => {
            dispatch(actions.onFilterItems(filter));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);
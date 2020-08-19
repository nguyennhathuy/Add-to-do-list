import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TableItem extends Component {
    updateStatus = () => {
        this.props.onUpdateStatus(this.props.item.id);
    }
    onDelete = () => {
        this.props.onDeleteItem(this.props.item.id);
        this.props.onCloseForm();
    }
    onEditItem = () => {
        this.props.onOpenForm();
        this.props.onEditItem(this.props.item);
    }
    render() {
        var {index, item} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td className='text-center'>
                    <span 
                        className={item.status === true ? 'label label-danger': 'label label-success'}
                        onClick={this.updateStatus}
                    >
                        {item.status === true ? 'Kích hoạt': 'Ẩn'}
                    </span>
                </td>
                <td className='text-center'>
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={this.onEditItem}
                    >
                        <span className='fa fa-pencil mr-5'></span>
                        Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <span className='fa fa-trash mr-5'></span>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.onUpdateStatus(id));
        },
        onDeleteItem: (id) => {
            dispatch(actions.onDeleteItem(id));
        },
        onCloseForm: () => {
            dispatch(actions.onCloseForm());
        },
        onEditItem: (item) => {
            dispatch(actions.onEditItem(item));
        },
        onOpenForm: () => {
            dispatch(actions.onOpenForm());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableItem);
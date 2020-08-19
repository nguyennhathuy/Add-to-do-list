import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        };  
    }
    componentWillMount() {
        if(this.props.itemEditing.id !== ''){
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status
            });
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            id: nextProps.itemEditing.id,
            name: nextProps.itemEditing.name,
            status: nextProps.itemEditing.status
        });
    }
    closeTaskForm = () => {
        this.props.onCloseForm();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state);
        this.onClear();
    }
    onClear = () => {
        this.setState({
            id: '',
            name: '',
            status: true
        });
        this.closeTaskForm();
    }
    render() {
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title flex-container">
                        {this.state.id === '' ? 'Thêm công việc' : 'Cập nhật công việc'}
                        <span 
                            className='fa fa-times-circle'
                            style={{cursor: 'pointer'}}
                            onClick={this.closeTaskForm}
                        >
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name='name'
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái: </label>
                            <select 
                                className='form-control'
                                name='status'
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <div className='justify-content-center'>
                            <button type="submit" className="btn btn-warning">
                                <span className='fa fa-plus mr-5'></span>
                                {this.state.id !== '' ? 'Cập nhật' : 'Thêm'}
                            </button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClear}>
                                <span className='fa fa-times mr-5'></span>
                                Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        toggleForm: state.toggleForm,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddItem: (item) => {
            dispatch(actions.addItem(item));
        },
        onCloseForm: () => {
            dispatch(actions.onCloseForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
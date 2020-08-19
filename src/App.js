import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import FindAndSort from './Components/FindAndSort';
import Table from './Components/Table';
import * as action from './actions/index';
import { connect } from 'react-redux';

class App extends Component {
    onToggleForm = () => {
        this.props.onEditItem({
            id: '',
            name: '',
            status: true
        });
        this.props.onOpenForm();
    }
    render() {
        var elmDisplayTaskForm = this.props.toggleForm === true ? <TaskForm /> : '';
        return (
            <div className='container'>
                {/*Title*/}
                <h1 className='text-center'>Quản lý công việc</h1>
                <hr />
                {/*TaskForm*/}
                <div className={this.props.toggleForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                    {elmDisplayTaskForm}
                </div>
                {/*FormControl*/}
                <div className={this.props.toggleForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.onToggleForm}
                    >
                        <span className='fa fa-plus mr-5'>
                        </span>
                        Thêm công việc
                    </button>
                    {/*Find & Sort*/}
                    <FindAndSort />
                    <div className='row mt-15'>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toggleForm: state.toggleForm
    }
}

const mapDipatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(action.onToggleForm());
        },
        onOpenForm: () => {
            dispatch(action.onOpenForm());
        },
        onEditItem: (item) => {
            dispatch(action.onEditItem(item));
        },
        onAddItem: (item) => {
            dispatch(action.addItem(item));
        }
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(App);

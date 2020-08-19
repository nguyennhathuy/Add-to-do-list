import React, { Component } from 'react';
import Find from './Find';
import Sort from './Sort';

class FindAndSort extends Component {
    render() {
        return (
            <div className='row mt-15'>
                {/*Find*/}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Find/>
                </div>


                {/*Sort*/}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Sort/>
                </div>
            </div>
        );
    }
}

export default FindAndSort;
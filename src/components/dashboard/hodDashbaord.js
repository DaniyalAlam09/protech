import React from 'react'
import './index.css'
import Filters from './filters'
import MyChart from './hodStats'
import Charts from './charts'

function HodDashboard() {

    return (
        <div className="dbContentWrap hodDasboard">
            <div className='dbConRow'>
                <div className='dbConCol col100'>
                    <Filters />
                </div>
                <div className='dbConCol col60'>
                    <div className="tableWidget">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HodDashboard
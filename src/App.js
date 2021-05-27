import React from 'react'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from "./api"

import logo from './images/image.png'

class App extends React.Component {
    state = {
        dataCovid: {},
        country: ''
    }

    async componentDidMount() {
        const dataCovid = await fetchData()

        this.setState({
            dataCovid: dataCovid
        })
    }

    _handleChangeCountry = async (country) => {
        const getData = await fetchData(country)

        this.setState({
            dataCovid: getData,
            country: country
        })
    }

    render() {
        const {dataCovid, country} = this.state

        return (
            <div className={styles.container}>
                <img src={logo} alt="Logo" className={styles.image}/>
                <Cards data={dataCovid}/>
                <CountryPicker onChangeCountry={this._handleChangeCountry}/>
                <Chart data={dataCovid} country={country}/>
            </div>
        )
    }
}

export default App
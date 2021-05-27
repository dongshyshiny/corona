import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from "@material-ui/core"

import styles from './CountryPicker.module.css'

import {countries} from "../../api"

const CountryPicker = ({onChangeCountry}) => {
    const [fetchCountries, setFetchCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchCountries(await countries())
        }

        fetchCountries()
    }, [setFetchCountries])

    return (
        <FormControl>
            <NativeSelect defaultValue='' onChange={(e) => onChangeCountry(e.target.value)}>
                <option value=''>Global</option>
                {
                    fetchCountries.map((country) => <option key={country} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
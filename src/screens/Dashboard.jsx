import React, { Component } from 'react'
import Navbartwo from "../components/Navbartwo";
import Dashpage from '../components/Dashpage'
export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navbartwo/>
                <Dashpage/>
            </div>
        )
    }
}

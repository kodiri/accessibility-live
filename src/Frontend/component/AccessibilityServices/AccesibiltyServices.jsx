import { Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

// Public

import UndergroundLink from './PublicTransport/Underground'
import OvergroundLink from './PublicTransport/Overground'
import BusLink from './PublicTransport/Bus'
import NationalLink from './PublicTransport/National'
import EurostarLink from './PublicTransport/Eurostar'
import TramlinkLink from './PublicTransport/Tramlink'
import DLRLink from './PublicTransport/DLR'
import CoachLink from './PublicTransport/Coach'
import EmiratesLink from './PublicTransport/Emirates'

// Door to Door

import CapitalLink from './DoorToDoor/Capital'
import CommunityLink from './DoorToDoor/Community'
import DialLink from './DoorToDoor/NHS'
import NHSLink from './DoorToDoor/NHS'
import RedbridgeLink from './DoorToDoor/Redbridge'
import TaxicardLink from './DoorToDoor/Taxicard'

// Personal

import CyclingLink from './PersonalTransport/Cycling'
import ScooterLink from './PersonalTransport/Scooter'
import ShopLink from './PersonalTransport/Shop'

// Concessionary

import BluebadgeLink from './ConcessionaryTransport/Bluebadge'
import FreeLink from './ConcessionaryTransport/Free'

class AccesibiltyServices extends Component {

    render() {
        return (
            <div className="Services">
                <Route exact path="/Underground" component={UndergroundLink} />
                <Route exact path="/Overground" component={OvergroundLink} />
                <Route exact path="/Bus" component={BusLink} />
                <Route exact path="/Coaches" component={CoachLink} />
                <Route exact path="/Docklands" component={DLRLink} />
                <Route exact path="/NationalRail" component={NationalLink} />
                <Route exact path="/Tramlink" component={TramlinkLink} />
                <Route exact path="/EmiratesAirLine" component={EmiratesLink} />
                <Route exact path="/Eurostar" component={EurostarLink} />

                <Route exact path="/DialARide" component={DialLink} />
                <Route exact path="/Taxicard" component={TaxicardLink} />
                <Route exact path="/CapitalCall" component={CapitalLink} />
                <Route exact path="/Nhs" component={NHSLink} />
                <Route exact path="/Community" component={CommunityLink} />
                <Route exact path="/Redbridge" component={RedbridgeLink} />

                <Route exact path="/Bluebadge" component={BluebadgeLink} />
                <Route exact path="/Freedompass" component={FreeLink} />

                <Route exact path="/Scooter" component={ScooterLink} />
                <Route exact path="/Cycling" component={CyclingLink} />
                <Route exact path="/Shopmobility" component={ShopLink} />
            </div>
        );
    }
}

export default AccesibiltyServices;
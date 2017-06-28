import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

//User written components
import {Players, calculatePlayerPositions} from './../imports/api/players';

import App from '../imports/ui/App';

Meteor.startup( () => {

    Tracker.autorun( () => {
        let players = Players.find({},{
            sort:{
                score: -1
            }
        }).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let pageTitle = 'Score Keeper App';
        ReactDom.render(<App title={pageTitle}  players={positionedPlayers}/>,document.getElementById('app'));
    });



});


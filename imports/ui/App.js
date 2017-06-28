/**
 * Created by surajvangoori1 on 6/21/17.
 */
import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component{
    render()
    {
        return(
            <div>
                <TitleBar  title={this.props.title} subtitle="Created by RastaReddy"/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer/>
                </div>
            </div>
        )
    }
};

App.propTypes={
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired
}
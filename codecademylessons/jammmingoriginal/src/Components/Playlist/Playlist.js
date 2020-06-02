import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import '../Playlist/Playlist.css';

export class Playlist extends React.Component{
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(input) {
        const name = input.target.value;
        this.props.onNameChange(name);
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTracks}
                onRemove={this.props.onRemove}
                onAdd={this.props.onAdd}
                />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
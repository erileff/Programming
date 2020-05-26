const clientID = '3fe7176682364941b1b46ea979de22a4';
const redirectURI = 'http://localhost:3000';
let accessToken;
let expiresIn;
const headers = { Authorization: `Bearer ${accessToken}`};

export const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        };
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        const spotifyURL = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientID}&redirect_uri=${redirectURI}`;
        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            expiresIn = Number(urlExpiresIn[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            window.location.href = spotifyURL;
        }
    },
    search(term) {
        accessToken = Spotify.getAccessToken();
        const searchURL = `https://api.spotify.com/v1/search?type=track&q=${term}`;
        return fetch(searchURL, {headers: headers}).then(response => response.json()).then(jsonResponse => {
            if (!jsonResponse.tracks) return [];
            return jsonResponse.tracks.items.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }
            })
        });
    },
    savePlaylist(name, trackURIs) {
        accessToken = Spotify.getAccessToken();
        if (!name || !trackURIs.length) {
            return 
        };
        const userURL = 'https://api.spotify.com/v1/me';
        let userID;
        let playlistID;
        return fetch (userURL, {headers: headers}).then(response => response.json()).then(jsonResponse => userID = jsonResponse.id).then(() => {
            const createPlaylistURL = `https://api.spotify.com/v1/users/${userID}/playlists`;
            return fetch(createPlaylistURL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({name: name})
            })
        }).then(response => response.json()).then(jsonResponse => playlistID = jsonResponse.id).then(() => {
            const addPlaylistTracksURL = `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`;
            return fetch(addPlaylistTracksURL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({uris: trackURIs})
            })
        })
    }
}
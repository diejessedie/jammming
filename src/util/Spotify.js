let accessToken;
const client_id = '066245d772114cb68fef842c09a0ec96';
const redirect_uri = 'https://jammmingproj.surge.sh';

//Create a Spotify Module
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      let expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      let accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
      window.location = accessUrl;
    }
  },

  search(searchTerm) {
    return fetch('https://cors-anywhere.herokuapp.com/' + `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
                headers: {Authorization: `Bearer ${accessToken}`}
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.tracks) {
                return jsonResponse.tracks.items.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }

                ));
            } else {
                //return empty array
                return [];
            }
        })
    },


    savePlaylist(playlistName, trackURIs) {
         if (!(playlistName && trackURIs)) {
             return;
         }

         const accessToken = this.getAccessToken();
         const headers = {
             Authorization: `Bearer ${accessToken}`
         };
         let userId;
         fetch('https://cors-anywhere.herokuapp.com/' + 'https://api.spotify.com/v1/me', {headers: headers})
             .then(response => {
                 return response.json();
             }).then(jsonResponse => {
             if (!jsonResponse.id) {
                 return;
             }

             userId = jsonResponse.id;
             fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                 method: 'POST',
                 headers: headers,
                 body: JSON.stringify({name: playlistName})
             }).then(response => {
                 return response.json();
             }).then(jsonResponse => {
                 if (!jsonResponse.id) {
                     return;
                 }

                 let playlistID = jsonResponse.id;

                 fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {
                     method: 'POST',
                     headers: headers,
                     body: JSON.stringify({uris: trackURIs})
                 });
             });

         });
     }

 };


//export Module
export default Spotify;

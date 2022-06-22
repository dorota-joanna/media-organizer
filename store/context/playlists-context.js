import { createContext, useState } from 'react';

export const PlaylistsContext = createContext({
  playlists: [],
  addPlaylist: (playlist) => {},
  removePlaylist: (id) => { }
});

const PlaylistsContextProvider = ({children}) => {
  const [playlists, setPlaylists] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      playlistName: 'Playlist 1',
      dateCreated: '15-03-23',
      description: 'blsdfjslkdfjiofosifjsiofjsddjsf hdasdfsifp  dfjaskfj jfklsjfkl',
      linkedFiles: [
        {
          name: 'file1',
          id: 'bd7111ea-c1b1-46c2-aed5-3ad53abb28ba',
          path: './1',
          fileType: 'mp3',
          comment: "here's a comment",
          image: {
            name: "image1",
            imagePath: "image path 1"
          },
          category: {
            name: 'rock'
          }
        },
        {
          name: 'file2',
          id: 'bd7222acbea-c1b1-46c2-aed5-3ad53abb28ba',
          path: './2',
          fileType: 'wav',
          comment: "here's a comment 2",
          image: {
            name: "image2",
            imagePath: "image path 2"
          },
          category: {
            name: 'classical'
          }
        },
        {
          name: 'file3',
          id: 'bd7333acbea-c1b1-46c2-aed5-3ad53abb28ba',
          path: './3',
          fileType: 'wav',
          comment: "here's a comment 3",
          image: {
            name: "image3",
            imagePath: "image path 3"
          },
          category: {
            name: 'pop'
          }
        },
      ]}, 
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad5888b28ba',
      playlistName: 'Playlist 2',
      dateCreated: '11-02-23',
      description: 'blsdfjslkdfjiofosifjsiofjsdlk kfdjksdfjksjfksjfklsjfkl',
      linkedFiles: [
          {
            name: 'file1',
            id: 'bd7111acbea-c1b1-46c2-aed5-3ad53abb28ba',
            path: './1',
            fileType: 'mp3',
            comment: "here's a comment",
            image: {
              name: "image1",
              imagePath: "image path 1"
            },
            category: {
              name: 'rock'
            }
          }
      ]}, 
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad70y3b28ba',
      playlistName: 'Playlist 3',
      dateCreated: '11-04-23',
      description: 'blsdfjslkdffdsf sdfsdf',
      linkedFiles: [
        {
          name: 'file1',
          id: 'bd7111acbea-c1b1-46c2-aed5-3ad53abb28ba',
          path: './1',
          fileType: 'mp3',
          comment: "here's a comment",
          image: {
            name: "image1",
            imagePath: "image path 1"
          },
          category: {
            name: 'rock'
          }
        }
    ]
  }
  ]);

  const addPlaylist = (playlist) => {
    setPlaylists((currentPlaylists) => [...currentPlaylists, playlist]);
  }

  const removePlaylist = (id) => {
    setPlaylists((currentPlaylists) => 
      currentPlaylists.filter((playlist) => playlist.id !== id));
  }

  const value = {
    playlists: playlists,
    addPlaylist: addPlaylist,
    removePlaylist: removePlaylist
  };

  return (<PlaylistsContext.Provider value={value} >{children}</PlaylistsContext.Provider>);
}

export default PlaylistsContextProvider;
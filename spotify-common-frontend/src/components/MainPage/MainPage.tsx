import * as React from 'react';
import Playlist from '../Playlist/PlaylistContainer';
import SharingInfoPanel from '../SharingInfoPanel/SharingInfoPanelContainer';

const MainPage = () => ( 
  <div>
    <SharingInfoPanel />
    <Playlist />
  </div>
);

export default MainPage;
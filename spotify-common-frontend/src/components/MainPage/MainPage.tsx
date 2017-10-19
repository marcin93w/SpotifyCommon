import * as React from 'react';
import Playlist from '../Playlist/PlaylistContainer';
import SharingInfoPanel from '../SharingInfoPanel/SharingInfoPanelContainer';
import SearchPanel from '../Search/SearchPanel';

const MainPage = () => ( 
  <div>
    <SharingInfoPanel />
    <SearchPanel />
    <Playlist />
  </div>
);

export default MainPage;
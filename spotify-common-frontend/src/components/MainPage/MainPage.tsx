import * as React from 'react';
import Playlist from '../Playlist/PlaylistContainer';
import SharingInfoPanel from '../SharingInfoPanel/SharingInfoPanelContainer';
import SearchPanel from '../Search/SearchPanelContainer';
import './MainPage.css';

const MainPage = () => ( 
  <div id="AppWrapper">
    <SharingInfoPanel />
    <SearchPanel />
    <Playlist />
  </div>
);

export default MainPage;
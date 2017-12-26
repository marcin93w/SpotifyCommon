import * as React from 'react';
import { Well } from 'react-bootstrap';

type SharingInfoPanelProperties = Readonly<{
  playlistId: string;
}>;

class SharingInfoPanel extends React.Component<SharingInfoPanelProperties, {}> {
  render() {
    const {playlistId} = this.props;
    const inviteLink = 'http://localhost:3000?invite=' + playlistId;
    return (
      <div className="SharingInfoPanel">
        <Well>Share this link with firends: 
          <a href={inviteLink}>{inviteLink}</a>
        </Well>
      </div>
    );
  }
}

export default SharingInfoPanel;

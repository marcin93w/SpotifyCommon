import * as React from 'react';
import { Well } from 'react-bootstrap';

type SharingInfoPanelProperties = Readonly<{
  playlistId: string;
}>;

class SharingInfoPanel extends React.Component<SharingInfoPanelProperties, {}> {
  render() {
    const {playlistId} = this.props;
    return (
      <div className="SharingInfoPanel">
        <Well>Share this link with firends: {playlistId}</Well>
      </div>
    );
  }
}

export default SharingInfoPanel;

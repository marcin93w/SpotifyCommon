import * as React from 'react';

type SharingInfoPanelProperties = Readonly<{
  playlistId: string;
}>;

class SharingInfoPanel extends React.Component<SharingInfoPanelProperties, {}> {
  render() {
    const {playlistId} = this.props;
    return (
      <div className="SharingInfoPanel">
        <p>Share this link with firends: {playlistId}</p>
      </div>
    );
  }
}

export default SharingInfoPanel;

// @flow

import React from 'react'
import { trackIds, tracks, categoryColorScale } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

export class TrackSelector extends React.Component<Props> {
  render() {
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}</style>
        <tbody>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(tracks[trackId].category)), background: categoryColorScale(tracks[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

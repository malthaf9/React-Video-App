import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
const { roomId } = useParams();

const myMeeting = async (element) => {
    const appId = 137779860;
    const serverSecret = '73898bb6a42ec02330404e88215d51bb';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Althaf",
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom(
        {
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        }
    );
};

    return (
        <div className='room-page'>
            <div ref={myMeeting} />
        </div>
    )
}

export default RoomPage;

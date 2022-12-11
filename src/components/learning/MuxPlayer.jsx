import MuxPlayer from "@mux/mux-player-react"; 

function MuxPlayerComponent(props){
    return (
      <MuxPlayer
        streamType="on-demand"
        playbackId={props.url}
        metadata={{
          video_id: "video-id-54321",
          video_title: "Test video title",
          viewer_user_id: "user-id-007",
        }}
      />
    );
}


export default MuxPlayerComponent;
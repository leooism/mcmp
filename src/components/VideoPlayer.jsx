import "./VideoPlayer.css";
import Video from "../assets/received_672696038002499.mp4";
const VideoPlayer = () => {
	return (
		<div className="VideoPlayer_Box">
			<video src={Video} autoPlay muted loop></video>
		</div>
	);
};

export default VideoPlayer;
//

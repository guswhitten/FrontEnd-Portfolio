import React, { useRef, useEffect, useState } from "react";

function Camera() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 440;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="Camera">
      <br />
      <br />
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={"result " + (hasPhoto ? "hasPhoto" : " ")}>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>CLOSE!</button>
      </div>
    </div>
  );
}
export default Camera;

// <div id='canvas' style='background-color: #0F0; margin:auto;'>
//   <div id='crop' style="background-image:url('small.jpg'); position:absolute; clip:rect(20px,300px,200px,100px); z-index: 20;"></div>
//   <div id='shaded' style="background-image:url('small.jpg'); position:absolute; opacity:0.2; filter:alpha(opacity=20); z-index: 10;"></div>
// <div id='large' style="display:none; background-image:url('large.jpg'); background-repeat:no-repeat; margin:auto;"></div>

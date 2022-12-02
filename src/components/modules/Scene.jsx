import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, Text, Html } from "@react-three/drei";
import eventBus from "../../assets/scripts/utils/eventBus";
import animateTitle from "../../assets/scripts/animations/pages/index/title";

import VideoOne from "../../assets/videos/video_one.mp4";
import VideoTwo from "../../assets/videos/video_two.mp4";
import VideoThree from "../../assets/videos/video_three.mp4";
import { Suspense } from "react";

const Tooltip = (props) => {
  const tooltip = useRef();
  const { position, text, onClick } = props;

  useEffect(() => {
    console.log(tooltip.current);
  }, []);

  const onHover = (e) => {
    eventBus.dispatch("uRoomVideo", props.video);
    gsap.fromTo(
      tooltip.current.querySelector("p"),
      {
        opacity: 0,
        translateY: 10,
      },
      { opacity: 1, translateY: 0 }
    );
  };

  const onLeave = (e) => {
    eventBus.dispatch("uRoomVideo", null);
    gsap.fromTo(
      tooltip.current.querySelector("p"),
      {
        opacity: 1,
      },
      { opacity: 0 }
    );
  };
  return (
    <>
      <Html
        as="div"
        position={position ? position : [-0.9, 0.5, 0]}
        className="do-react-tooltip"
        ref={tooltip}
      >
        {text && (
          <p
            style={{
              color: "white",
              position: "absolute",
              top: "-64px",
              left: "25px",
              transform: "translate(-50%, 0)",
              background: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "20px",
              opacity: 0,
            }}
          >
            {text}
          </p>
        )}
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.preventDefault();
            onHover(e);
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            onLeave();
          }}
          onClick={onClick}
        >
          <path
            opacity="0.5"
            d="M24 47.5C36.9787 47.5 47.5 36.9787 47.5 24C47.5 11.0213 36.9787 0.5 24 0.5C11.0213 0.5 0.5 11.0213 0.5 24C0.5 36.9787 11.0213 47.5 24 47.5Z"
            fill="black"
            stroke="white"
            strokeMiterlimit="10"
          />
          <path
            d="M39.6 24C31 23.9 23.9 31 24 39.6V39.2C23.9 30.7 17 23.9 8.5 24H8.6C17.1 23.9 23.9 17 24 8.6V8.5C24 17.1 31 24 39.6 24Z"
            fill="white"
          />
        </svg>
      </Html>
    </>
  );
};

const BlenderScene = (props) => {
  const { nodes, materials } = useGLTF("3d/models/blenderScene.glb");

  const videoScreen = React.useRef();
  const [videoOne, setVideoOne] = React.useState(() =>
    Object.assign(document.createElement("video"), {
      src: VideoOne,
      loop: true,
      muted: true,
      crossOrigin: "Anonymous",
    })
  );

  const [videoTwo, setVideoTwo] = React.useState(() =>
    Object.assign(document.createElement("video"), {
      src: VideoTwo,
      loop: true,
      muted: true,
      crossOrigin: "Anonymous",
    })
  );

  const [videoThree, setVideoThree] = React.useState(() =>
    Object.assign(document.createElement("video"), {
      src: VideoThree,
      loop: true,
      muted: true,
      crossOrigin: "Anonymous",
    })
  );

  const [roomVideo, setRoomVideo] = React.useState(0);

  React.useEffect(() => {
    videoOne.play();
    videoTwo.play();
    videoThree.play();
  }, [videoOne, videoTwo, videoThree]);

  React.useEffect(() => {
    eventBus.on("uRoomVideo", (data) => {
      console.log(data);
      setRoomVideo(data);
    });
  }, []);

  const moveCamera = ({ location, targetLocation, rotation }) => {
    const animation = (camera) => {
      console.log(camera);
      gsap.to(camera.position, {
        x: targetLocation[0],
        y: targetLocation[1],
        z: targetLocation[2],
        duration: 0.8,
        onComplete: () => {
          location();
        },
      });
      gsap.to("main", { opacity: 0, delay: 0.2 });
    };
    eventBus.dispatch("animCamera", animation);
  };

  return (
    <group {...props} dispose={null}>
      <group name="TV" position={[-0.02, 0, -0.02]}>
        <group name="Antenne001" position={[1.38, 1.01, -0.27]}>
          <mesh
            name="Cylinder013"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials["tvFrame.002"]}
          />
          <mesh
            name="Cylinder013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_1.geometry}
            material={materials["tvBody.002"]}
          />
        </group>
        <group name="Body001" position={[0.02, 0, 0.02]} scale={[1.5, 1, 1]}>
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials["tvBody.003"]}
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials["tvFrame.003"]}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials["tvScreenFrame.003"]}
          />
          <mesh
            name="Cube005_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={nodes.Cube005_3.material}
          />
        </group>
        <group
          name="Cursor001"
          position={[1.08, 0.27, 1.03]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.76, 0.1, 0.76]}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["tvBody.002"]}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["tvFrame.002"]}
          />
        </group>
        <group
          name="Cursor2001"
          position={[1.07, 0.67, 1.03]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.76, 0.1, 0.76]}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["tvBody.002"]}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["tvFrame.002"]}
          />
        </group>
        <mesh
          name="Power001"
          castShadow
          receiveShadow
          geometry={nodes.Power001.geometry}
          material={materials["tvFrame.002"]}
          position={[1.35, -0.01, 1.01]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="Screen001"
          castShadow
          receiveShadow
          geometry={nodes.Screen001.geometry}
          // material={materials["tvScreen.002"]}
          position={[0.02, 0, 0.02]}
          scale={[1.5, 1, 1]}
        >
          <meshBasicMaterial toneMapped={false}>
            <videoTexture
              attach={"map"}
              args={[videoOne]}
              encoding={THREE.sRGBEncoding}
              rotation={-1.5708}
              repeat={[1, 1]}
              center={[0.5, 0.5]}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh
          name="Signature001"
          castShadow
          receiveShadow
          geometry={nodes.Signature001.geometry}
          material={materials["mainBrand.001"]}
          position={[1.26, 1, 0.92]}
        />
        <Tooltip
          text="Photography"
          video={1}
          targetLocation={[0.02, 0, 0.02]}
          onClick={() => {
            var getUrl = window.location;
            var baseUrl =
              getUrl.protocol +
              "//" +
              getUrl.host +
              "/" +
              getUrl.pathname.split("/")[1];

            moveCamera({
              location: () => {
                window.location.href = baseUrl + "photography/";
              },
              targetLocation: [-0.02, 0, -0.02],
              rotation: null,
            });
          }}
        />
      </group>
      <group name="TV001" position={[5.79, 0, 0.25]}>
        <group
          name="Antenne002"
          position={[1.39, 1.01, 0.43]}
          rotation={[0, -0.38, 0]}
        >
          <mesh
            name="Cylinder013"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials["tvFrame.002"]}
          />
          <mesh
            name="Cylinder013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_1.geometry}
            material={materials["tvBody.002"]}
          />
        </group>
        <group
          name="Body002"
          position={[0.03, 0, 0.19]}
          rotation={[0, -0.38, 0]}
          scale={[1.5, 1, 1]}
        >
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials["tvBody.003"]}
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials["tvFrame.003"]}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials["tvScreenFrame.003"]}
          />
          <mesh
            name="Cube005_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={nodes.Cube005_3.material}
          />
        </group>
        <group
          name="Cursor002"
          position={[0.63, 0.27, 1.53]}
          rotation={[0, 1.19, Math.PI / 2]}
          scale={[0.76, 0.1, 0.76]}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["tvBody.002"]}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["tvFrame.002"]}
          />
        </group>
        <group
          name="Cursor2002"
          position={[0.62, 0.67, 1.52]}
          rotation={[0, 1.19, Math.PI / 2]}
          scale={[0.76, 0.1, 0.76]}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["tvBody.002"]}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["tvFrame.002"]}
          />
        </group>
        <mesh
          name="Power002"
          castShadow
          receiveShadow
          geometry={nodes.Power002.geometry}
          material={materials["tvFrame.002"]}
          position={[0.89, -0.01, 1.6]}
          rotation={[0, 1.19, Math.PI / 2]}
        />
        <mesh
          name="Screen002"
          castShadow
          receiveShadow
          geometry={nodes.Screen002.geometry}
          // material={materials["tvScreen.002"]}
          position={[0.03, 0, 0.19]}
          rotation={[0, -0.38, 0]}
          scale={[1.5, 1, 1]}
        >
          <meshBasicMaterial toneMapped={false}>
            <videoTexture
              attach={"map"}
              args={[videoTwo]}
              encoding={THREE.sRGBEncoding}
              rotation={-1.5708}
              repeat={[1, 1]}
              center={[0.5, 0.5]}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh
          name="Signature002"
          castShadow
          receiveShadow
          geometry={nodes.Signature002.geometry}
          material={materials["mainBrand.001"]}
          position={[0.84, 1, 1.49]}
          rotation={[0, -0.38, 0]}
        />
        <Tooltip
          text="Development"
          video={2}
          targetLocation={[0.03, 0, 0.19]}
          onClick={() => {
            var getUrl = window.location;
            var baseUrl =
              getUrl.protocol +
              "//" +
              getUrl.host +
              "/" +
              getUrl.pathname.split("/")[1];

            moveCamera({
              location: () => {
                window.location.href = baseUrl + "development/";
              },
              targetLocation: [5.79, 0, 0.25],
              rotation: null,
            });
          }}
        />
      </group>
      <group name="TV002" position={[-6.42, 0, 1.08]}>
        <group
          name="Antenne003"
          position={[1.06, 1.01, -0.78]}
          rotation={[0, 0.49, 0]}
        >
          <mesh
            name="Cylinder013"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials["tvFrame.002"]}
          />
          <mesh
            name="Cylinder013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_1.geometry}
            material={materials["tvBody.002"]}
          />
        </group>
        <group
          name="Body003"
          position={[0, 0, 0.11]}
          rotation={[0, 0.49, 0]}
          scale={[1.5, 1, 1]}
        >
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials["tvBody.003"]}
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials["tvFrame.003"]}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials["tvScreenFrame.003"]}
          />
          <mesh
            name="Cube005_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={nodes.Cube005_3.material}
          />
        </group>
        <group
          name="Cursor003"
          position={[1.41, 0.27, 0.51]}
          rotation={[Math.PI, 1.08, -Math.PI / 2]}
          scale={[0.76, 0.1, 0.76]}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["tvBody.002"]}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["tvFrame.002"]}
          />
        </group>
        <group
          name="Cursor2003"
          position={[1.41, 0.67, 0.51]}
          rotation={[Math.PI, 1.08, -Math.PI / 2]}
          scale={[0.76, 0.1, 0.76]}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["tvBody.002"]}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["tvFrame.002"]}
          />
        </group>
        <mesh
          name="Power003"
          castShadow
          receiveShadow
          geometry={nodes.Power003.geometry}
          material={materials["tvFrame.002"]}
          position={[1.64, -0.01, 0.35]}
          rotation={[Math.PI, 1.08, -Math.PI / 2]}
        />
        <mesh
          name="Screen003"
          castShadow
          receiveShadow
          geometry={nodes.Screen003.geometry}
          // material={materials["tvScreen.002"]}
          position={[0, 0, 0.11]}
          rotation={[0, 0.49, 0]}
          scale={[1.5, 1, 1]}
        >
          <meshBasicMaterial toneMapped={false}>
            <videoTexture
              attach={"map"}
              args={[videoThree]}
              encoding={THREE.sRGBEncoding}
              rotation={-1.5708}
              repeat={[1, 1]}
              center={[0.5, 0.5]}
            />
          </meshBasicMaterial>
        </mesh>
        <mesh
          name="Signature003"
          castShadow
          receiveShadow
          geometry={nodes.Signature003.geometry}
          material={materials["mainBrand.001"]}
          position={[1.52, 1, 0.32]}
          rotation={[0, 0.49, 0]}
        />
        <Tooltip
          text="Design"
          video={3}
          targetLocation={[0, 0, 0.11]}
          onClick={() => {
            var getUrl = window.location;
            var baseUrl =
              getUrl.protocol +
              "//" +
              getUrl.host +
              "/" +
              getUrl.pathname.split("/")[1];

            moveCamera({
              location: () => {
                window.location.href = baseUrl + "design/";
              },
              targetLocation: [-6.42, 0, 1.08],
              rotation: null,
            });
          }}
        />
      </group>
      <mesh
        name="RoomScreen"
        castShadow
        receiveShadow
        geometry={nodes.RoomScreen.geometry}
        // material={materials["tvScreen.004"]}
        position={[0.06, 6.19, -18.31]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        ref={videoScreen}
      >
        {roomVideo != 0 && (
          <meshBasicMaterial toneMapped={false}>
            {roomVideo && (
              <videoTexture
                attach={"map"}
                args={[
                  (roomVideo === 1 && videoOne) ||
                    (roomVideo === 2 && videoTwo) ||
                    (roomVideo === 3 && videoThree),
                ]}
                encoding={THREE.sRGBEncoding}
                rotation={-1.5708}
                repeat={[2, 1]}
                center={[0.5, 0.5]}
              />
            )}
          </meshBasicMaterial>
        )}
        {!roomVideo && (
          <meshBasicMaterial toneMapped={false}></meshBasicMaterial>
        )}
      </mesh>
      <mesh
        name="Plane"
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        position={[0, -1.18, 0]}
        scale={9.93}
      >
        <meshBasicMaterial attach="material" color="black" />
      </mesh>
    </group>
  );
};

const getAspect = () => {
  return window.innerWidth / window.innerHeight;
};

const mouseAnimation = (object) => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  document.addEventListener("mousemove", (event) => {
    object.current.position.x =
      0 +
      (event.clientX > window.innerWidth / 2
        ? (event.clientX - window.innerWidth / 2) * 0.002
        : -(window.innerWidth / 2 - event.clientX) * 0.002);
    object.current.position.y =
      10 +
      (event.clientY > window.innerWidth / 2
        ? (event.clientY - window.innerWidth / 2) * 0.001
        : -(window.innerWidth / 2 - event.clientY) * 0.001);
  });
};

const Scene = () => {
  const [cameraAspect, setCameraAspect] = React.useState(16 / 9);
  const camera = React.useRef();
  useEffect(() => {
    console.log(getAspect());
    setCameraAspect(getAspect());
    window.onresize = () => {
      setCameraAspect(getAspect());
    };

    mouseAnimation(camera);

    eventBus.on("animCamera", (data) => {
      data(camera.current);
    });

    animateTitle();
  }, []);

  return (
    <>
        <Canvas camera={{ position: [0, 2.5, 15] }} id="webGlWrapper">
          <PerspectiveCamera
            ref={camera}
            makeDefault
            manual
            position={[0, 10, 40]}
            aspect={cameraAspect}
          />
          <ambientLight />
          <pointLight position={[0, 10, 10]} />
          <BlenderScene />
        </Canvas>
    </>
  );
};

export default Scene;

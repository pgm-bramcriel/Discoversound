import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("../pages/index"), { ssr: false });

export default ReactPlayer;
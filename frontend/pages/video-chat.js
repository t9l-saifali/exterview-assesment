import dynamic from "next/dynamic";


const MeetingAppContainer = dynamic(
  () => import("../src/containers/MeetingAppContainer"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
      <MeetingAppContainer />
  );
}

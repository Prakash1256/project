import Ahead2 from "@/components/Ahead2";
import AheadApp from "@/components/AheadApp";
import Card from "@/components/Card";
import Feedback from "@/components/Feedback";
import Feedback2 from "@/components/Feedback2";
import Feedback3 from "@/components/Feedback3";
import Navbar from "@/components/Navbar";
import Privacy from "@/components/Privacy";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section/>
       <Card/>
       <AheadApp/>
       <Ahead2/>
       <Feedback/>
       <Privacy/>
       <Feedback2/>
       <Feedback3/>
    </>
  );
}

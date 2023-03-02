import Layout from "@/components/layout";
import Image from "next/image";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-violet-500">About Me</h2>
        <section className="hero container mx-auto p-4 flex justify-center">
          <Image
            src="/profilePic.jpeg"
            width={230}
            height={200}
            className="border-4 rounded-lg bg-gradient-to-br border-fuchsia-600 border-zinc-900"
          />
        </section>
        <div className="p-3">
            I am a software developer and an engineer.
        </div>
      </div>
    </Layout>
  );
};

export default About;

import ProjectCard from "@/components/cards";
import Layout from "@/components/layout";

const projImage = {
  imgName: "/public/projects/project1.png",
  alt: "Some project Image",
};

const projTags = ["#yolo", "#ooltd"];

const Project = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold text-indigo-500">Projects List:</h2>
        <ProjectCard
          projectTitle={"BCD"}
          projDescp={"Something Something"}
          projectImg={projImage}
          projTags={projTags}
        ></ProjectCard>

        <ProjectCard
          projectTitle={"BCD"}
          projDescp={"Something Something"}
          projectImg={projImage}
          projTags={projTags}
        ></ProjectCard>
        <ProjectCard
          projectTitle={"BCD"}
          projDescp={"Something Something"}
          projectImg={projImage}
          projTags={projTags}
        ></ProjectCard>
        <ProjectCard
          projectTitle={"BCD"}
          projDescp={"Something Something"}
          projectImg={projImage}
          projTags={projTags}
        ></ProjectCard>
        <ProjectCard
          projectTitle={"BCD"}
          projDescp={"Something Something"}
          projectImg={projImage}
          projTags={projTags}
        ></ProjectCard>
      </div>
    </Layout>
  );
};

export default Project;

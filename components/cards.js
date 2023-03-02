import Image from "next/image";

const ProjectCard = ({ projectTitle, projectImg, projDescp, projTags }) => {
  return (
    <div className="p-4 max-w-sm rounded overflow-hidden shadow-lg hover:border-4 hover:border-indigo-500">
      <Image
        className="w-full"
        src={`${projectImg.imgName}`}
        alt={`${projectImg.alt}`}
        width={250}
        height={250}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectTitle}</div>
        <p className="text-slate-200 text-base">{projDescp}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ul>
          {projTags.map((tag) => {
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

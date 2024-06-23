import SearchIcon from "./icons/SearchIcon";

const Preview = ({ newPost }) => {
    const {
        title,
        intro,
        minExperience,
        maxExperience,
        rolesAndResponsibility,
        qualification,
        salaryRange,
        description,
        company,
        jobLocation,
        jobType,
        labels,
    } = newPost;
    return (
        <fieldset className="w-full lg:w-2/5 p-4 flex flex-col gap-2 border-2 border-slate-400 ml-2 mb-6">
            <legend className="text-xl flex">
                <SearchIcon
                    svgProps={{ width: "28px", height: "28px" }}
                    pathProps={{ stroke: "#8E24AA" }}
                />
                <span>Live Preview</span>
            </legend>
            <div>
                {title.isChecked ? (
                    <div className="flex justify-between">
                        <p className="text-4xl">{title.title}</p>
                        {jobType.isChecked && labels.labels ? (
                            <div className="flex justify-center p-2 rounded-full bg-blue-500">
                                {labels.labels}
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
            {intro.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Introduction</span> :{" "}
                    <span className="text-blue-500">{intro.intro}</span>
                </p>
            ) : null}
            {rolesAndResponsibility.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Roles & Responsibilities</span> :
                    <span className="text-blue-500">
                        {rolesAndResponsibility.rolesAndResponsibility}
                    </span>
                </p>
            ) : null}
            {minExperience.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Prefered Experience</span> :
                    <span className="text-blue-500">
                        {minExperience.minExperience}{" "}
                        {`${maxExperience.maxExperience
                            ? `to ${maxExperience.maxExperience}`
                            : ""
                            }`}
                    </span>
                </p>
            ) : null}
            {qualification.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Qualification</span> :
                    <span className="text-blue-500">{qualification.qualification}</span>
                </p>
            ) : null}
            {salaryRange.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Salary</span> :
                    <span className="text-blue-500">{salaryRange.salaryRange}</span>
                </p>
            ) : null}
            {description.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Concluding Statement</span> :
                    <span className="text-blue-500">{description.description}</span>
                </p>
            ) : null}
            {company.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Company</span> :
                    <span className="text-blue-500">{company.company}</span>
                </p>
            ) : null}
            {jobLocation.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Location</span> :
                    <span className="text-blue-500">{jobLocation.jobLocation}</span>
                </p>
            ) : null}
            {jobType.isChecked ? (
                <p className="text-xl">
                    <span className="text-2xl">Job Type</span> :
                    <span className="text-blue-500">{jobType.jobType}</span>
                </p>
            ) : null}
        </fieldset>
    );
};

export default Preview;

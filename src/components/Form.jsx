import {
    JOB_LABELS,
    JOB_TYPE,
    MAX_EXPERIENCE,
    MIN_EXPERIENEC,
} from "./constants";
const Form = ({ newPost, handleInput, handleSave, children }) => {
    return (
        <section className="w-full lg:w-auto lg:mt-0 mt-4 p-4 pt-8 border-2 border-slate-400 relative">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <input
                        checked={newPost.title.isChecked}
                        onChange={(e) => handleInput(e, "title")}
                        type="checkbox"
                        className="mr-4 w-6 h-6"
                        name="post-title"
                        id="post-title"
                    />
                    <input
                        value={newPost.title.title}
                        onChange={(e) => handleInput(e, "title")}
                        type="text"
                        className="w-3/2 outline outline-2 outline-offset-2 placeholder:italic placeholder:text-slate-400"
                        name="post-title-input"
                        id="post-title-input"
                        placeholder="Job Post Title"
                    />
                </div>
                {children}
            </div>
            <div className="flex mb-4">
                <input
                    checked={newPost.intro.isChecked}
                    onChange={(e) => handleInput(e, "intro")}
                    type="checkbox"
                    name="post-intro"
                    className="mr-4 w-6 h-6"
                    id="post-intro"
                />
                <div className="flex flex-col">
                    <label htmlFor="post-intro" className="mb-4 text-xl ">
                        Introduction
                    </label>
                    <textarea
                        value={newPost.intro.intro}
                        onChange={(e) => handleInput(e, "intro")}
                        name="post-intro-input"
                        className="border-2 border-slate-400 p-2 w-full"
                        id="post-intro-input"
                        cols="60"
                        rows="2"
                        placeholder="The ideal candidate is someone..."
                    ></textarea>
                </div>
            </div>
            <div className="flex mb-4">
                <input
                    checked={newPost.rolesAndResponsibility.isChecked}
                    onChange={(e) => handleInput(e, "rolesAndResponsibility")}
                    type="checkbox"
                    name="rolesAndResponsibility"
                    className="mr-4 w-6 h-6"
                    id="rolesAndResponsibility"
                />
                <div className="flex flex-col">
                    <label htmlFor="rolesAndResponsibility" className="mb-4 text-xl">
                        Roles & Responsibility
                    </label>
                    <textarea
                        value={newPost.rolesAndResponsibility.rolesAndResponsibility}
                        onChange={(e) => handleInput(e, "rolesAndResponsibility")}
                        name="post-resp-input"
                        id="role-resp-input"
                        className="border-2 border-slate-400 p-2 w-full"
                        cols="60"
                        rows="2"
                        placeholder="Your job role will be include..."
                    ></textarea>
                </div>
            </div>

            <div className="flex mb-4">
                <input
                    checked={newPost.minExperience.isChecked}
                    onChange={(e) => handleInput(e, "minExperience")}
                    type="checkbox"
                    name="experience"
                    className="mr-4 w-6 h-6"
                    id="experience"
                />
                <div className="flex flex-wrap">
                    <label htmlFor="experience" className="mb-4 text-xl mr-4">
                        Experience Range (yrs)
                    </label>
                    <div className="flex items-center justify-center gap-2 border-2 border-gray-500">
                        <div className="border-r-2 border-gray-500 text-center p-2">
                            Min
                        </div>
                        <select
                            value={newPost.minExperience.minExperience}
                            onChange={(e) => handleInput(e, "minExperience")}
                            name="minExperience"
                            id="minExperience"
                            className="outline-none p-2"
                        >
                            {new Array(MIN_EXPERIENEC).fill("-").map((_, i) => (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="ml-4 flex items-center justify-center gap-2 border-2 border-gray-500">
                        <div className="border-r-2 border-gray-500 text-center p-2">
                            Max
                        </div>
                        <select
                            value={newPost.maxExperience.maxExperience}
                            onChange={(e) => handleInput(e, "maxExperience")}
                            name="maxExperience"
                            id="maxExperience"
                            className="outline-none p-2"
                        >
                            {new Array(MAX_EXPERIENCE).fill("-").map((_, i) => (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <input
                    checked={newPost.qualification.isChecked}
                    onChange={(e) => handleInput(e, "qualification")}
                    type="checkbox"
                    className="mr-4 w-6 h-6"
                    name="qualification-title"
                    id="qualification-title"
                />
                <input
                    value={newPost.qualification.qualification}
                    onChange={(e) => handleInput(e, "qualification")}
                    type="text"
                    className="w-full outline outline-2 outline-offset-2 placeholder:italic placeholder:text-slate-400"
                    name="qualification"
                    id="qualification"
                    placeholder="Qualifications"
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="w-full">
                    <input
                        checked={newPost.salaryRange.isChecked}
                        onChange={(e) => handleInput(e, "salaryRange")}
                        type="checkbox"
                        className="mr-4 w-6 h-6"
                        name="salary-title"
                        id="salary-title"
                    />
                    <input
                        value={newPost.salaryRange.salaryRange}
                        onChange={(e) => handleInput(e, "salaryRange")}
                        type="number"
                        className="w-1/2 outline outline-2 outline-offset-2 placeholder:italic placeholder:text-slate-400"
                        name="salary"
                        id="salary"
                        placeholder="Salary Range"
                    />
                </div>
            </div>
            <div className="flex mb-4">
                <input
                    checked={newPost.description.isChecked}
                    onChange={(e) => handleInput(e, "description")}
                    type="checkbox"
                    name="description"
                    className="mr-4 w-6 h-6"
                    id="rolesAndResponsibility"
                />
                <div className="flex flex-col">
                    <textarea
                        value={newPost.description.description}
                        onChange={(e) => handleInput(e, "description")}
                        name="description"
                        id="description"
                        className="border-2 border-slate-400 p-2 w-full"
                        cols="60"
                        rows="2"
                        placeholder="Description"
                    ></textarea>
                </div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="w-full">
                    <input
                        checked={newPost.company.isChecked}
                        onChange={(e) => handleInput(e, "company")}
                        type="checkbox"
                        className="mr-4 w-6 h-6"
                        name="company-title"
                        id="company-title"
                    />
                    <input
                        value={newPost.company.company}
                        onChange={(e) => handleInput(e, "company")}
                        type="text"
                        className="w-1/2 outline outline-2 outline-offset-2 placeholder:italic placeholder:text-slate-400"
                        name="company"
                        id="company"
                        placeholder="Company"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="w-full">
                    <input
                        checked={newPost.jobLocation.isChecked}
                        onChange={(e) => handleInput(e, "jobLocation")}
                        type="checkbox"
                        className="mr-4 w-6 h-6"
                        name="jobLocation-title"
                        id="jobLocation-title"
                    />
                    <input
                        value={newPost.jobLocation.jobLocation}
                        onChange={(e) => handleInput(e, "jobLocation")}
                        type="text"
                        className="w-1/2 outline outline-2 outline-offset-2 placeholder:italic placeholder:text-slate-400"
                        name="jobLocation"
                        id="jobLocation"
                        placeholder="Job Location (Map Search)"
                    />
                </div>
            </div>

            <div className="flex justify-start mb-4">
                <input
                    checked={newPost.jobType.isChecked}
                    onChange={(e) => handleInput(e, "jobType")}
                    type="checkbox"
                    name="jobType"
                    className="mr-4 w-6 h-6"
                    id="jobType"
                />
                <div className="flex w-full">
                    <div className="w-1/2 flex items-center justify-center gap-2 border-2 border-gray-500">
                        <select
                            value={newPost.jobType.jobType}
                            onChange={(e) => handleInput(e, "jobType")}
                            name="jobType"
                            id="jobType"
                            className="outline-none p-2 m-1 w-full"
                        >
                            {JOB_TYPE.map((element, i) => (
                                <option key={i} value={element}>
                                    {element}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="ml-8 w-1/2 flex items-center justify-center border-2 border-gray-500">
                        <select
                            value={newPost.labels.labels}
                            onChange={(e) => handleInput(e, "labels")}
                            name="labels"
                            id="labels"
                            className="outline-none p-2 m-1 w-full"
                        >
                            {JOB_LABELS.map((element, i) => (
                                <option key={i} value={element}>
                                    {element}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-sky-400 float-right"
            >
                Save
            </button>
        </section>
    );
};

export default Form;

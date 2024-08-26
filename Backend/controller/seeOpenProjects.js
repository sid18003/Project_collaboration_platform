const User = require("../model/user")
const Project = require("../model/project");
exports.see_open_projects = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("skills");

        if (!user || !user.skills) {
            return res.status(400).json({
                success: false,
                message: "User information is missing or incomplete.",
            });
        }
        console.log("User:", req.user);

        const userskills = user.skills;

        // Fetch all projects
        const Allproject = await Project.find({}, 'project_name project_desc required_skills');
        if (!Allproject.length) {
            return res.status(404).json({
                success: false,
                message: "No projects available",
            });
        }

        // Filter projects based on skill match percentage
        const matchingprojects = Allproject.filter(project => {
            const required = project.required_skills.split(',').map(skill => skill.trim());
            const matchingskills = required.filter(skill => userskills.includes(skill));
            const matchPercentage = (matchingskills.length / required.length) * 100;
            return matchPercentage >= 50; // Adjust match percentage if needed
        });

        if (!matchingprojects.length) {
            return res.status(404).json({
                success: false,
                message: "No matching projects available",
            });
        }

        // Respond with the filtered list of projects
        return res.status(200).json({
            success: true,
            count: matchingprojects.length,
            project: matchingprojects,
        });

    } catch (error) {
        console.error("Error while fetching projects: ", error);
        return res.status(500).json({
            success: false,
            message: "Error while fetching the projects",
            error: error.message,
        });
    }
};

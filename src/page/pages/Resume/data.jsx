import {bio} from './bio';

export let resumes = {
    "general": {
        author: bio.author,
        skills: bio.skills,
        experience: [
            bio.experience.GDC_CA,
            bio.experience.DB_intern,
            bio.experience.LORD_intern,
            bio.experience.ChamplainCollege_RA,
        ],
        education: bio.education,
    },
    all: {
        author: bio.author,
        skills: bio.skills,
        experience: [
            bio.experience.ChamplainCollege_RA,
            bio.experience.ChamplainCollege_SGA,
            bio.experience.GDC_CA,
            bio.experience.DB_intern,
            bio.experience.LORD_intern,
            bio.experience.idTech,
            bio.experience.LCDI_intern,
            bio.experience.LCDI_netAdmin,
        ],
        education: bio.education,
    }
};

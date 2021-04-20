export type ChangelogVersion = {
    version: string,
    description?: string,
    changes?: string[]
};

export const changelog: ChangelogVersion[] = [

    {
        version: "2.0",
        description: "A complete overhaul worthy of its own repository, I have rebuilt the site using Typescript and Tailwind.css and practically shifted everything in the process while retaining Next.js as the SSG that makes the site run smoothly.",
        changes: [
            "Complete Overhaul in Typescript",
            "Tailwind.css for design consistency",
            "Provide Modal for Changelog",
           'Added "Discard Changes" button in settings',
            "Added my logo",
            "Consistent Styling with my other sites"
        ]
    },
    {
        version: "1.0",
        description: "React Startpage written with React, Styled Components & SCSS."
    }
];
import {
    linkGroup,
    Theme, Search as SearchType,
    links,
    searchSettings
} from "./data/data";

export const Search = {
    get: () => {
        const lsSearch = localStorage.getItem("search-settings");
        if (!!lsSearch)
            return Search.parse(lsSearch);
        return undefined;
    },
    getWithFallback: () => {
        try {
            return Search.get() || searchSettings;
        } catch {
            console.error("No settings detected, there may be an issue or they may be no settings saved yet.");
            return searchSettings;
        }
    },

    set: (searchSettings: SearchType) =>
        localStorage.setItem("search-settings", JSON.stringify(searchSettings)),

    parse: (searchSettings: string) =>
        JSON.parse(searchSettings) as SearchType,
};

export const Links = {
    getRaw: () => localStorage.getItem("link-groups"),
    get: () => {
        const lsLinks = localStorage.getItem("link-groups");
        if (!!lsLinks)
            return Links.parse(lsLinks);
        return undefined;
    },
    getWithFallback: () => {
        try {
            return Links.get() || links;
        } catch {
            return links;
        }
    },

    set: (themes: linkGroup[]) =>
        localStorage.setItem("link-groups", JSON.stringify(themes)),

    parse: (linkGroups: string) =>
        JSON.parse(linkGroups) as linkGroup[],
};

export const Design = {
    get: () => {
        const lsDesign = localStorage.getItem("design");
        if (!!lsDesign)
            return Themes.parse(lsDesign);
        return undefined;
    },


    set: (design: Theme) =>
        localStorage.setItem("design", JSON.stringify(design)),
};


export const Themes = {
    get: () => {
        const lsThemes = localStorage.getItem("themes");
        if (!!lsThemes)
            return JSON.parse(lsThemes) as Theme[];
        return undefined;
    },


    set: (themes: Theme[]) =>
        localStorage.setItem("themes", JSON.stringify(themes)),


    add: (theme: Theme) => {
        const lsThemes = Themes.get();
        if (lsThemes)
            Themes.set([...lsThemes, theme])
        else
            Themes.set([theme])
    },

    remove: (name: string) => {
        const lsThemes = Themes.get();
        if (lsThemes)
            Themes.set(lsThemes.filter((theme) => theme.name !== name));
    },

    parse: (theme: string) =>
        JSON.parse(theme) as Theme,
};

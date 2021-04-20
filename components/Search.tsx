import React from 'react';
import styled from "@emotion/styled";
import * as Settings from "./settingsHandler";

import logo from '../static/media/logo.png'


export const Searchbar = () => {
    const searchSettings = Settings.Search.getWithFallback();
    const engine: string = searchSettings?.engine || "duckduckgo.com/";



    const redirectToSearch = (query: string) => {
        if (searchSettings?.fastForward[query])
            window.location.href = searchSettings.fastForward[query];
        else
            window.location.href = "https://" + engine + "?q=" + query;
    }

    return (
        <div className="content-center grid mt-12 grid-cols-3 grid-flow-row ">
          <img src={logo} className="h-24 w-24 text-center" />
            <input
                placeholder=" Enter Your Search Query!"
                type="input"
                onKeyUp={e => e.which === 13 && redirectToSearch(e.currentTarget.value)}
                autoFocus={true}
                className=" bg-transparent  w-full align-middle my-6 col-span-2 text-center rounded-lg border-2 border-gray-300 border-solid"
            />
        </div>
    );
}

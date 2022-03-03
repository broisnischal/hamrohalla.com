import { Client, Server } from "styletron-engine-atomic";

const getHydrateClass = () =>
    document.getElementsByClassName("_styletron_hydrate_");

// eslint-disable-next-line import/prefer-default-export
export const styletron =
    typeof window === "undefined"
        ? new Server()
        : new Client({ hydrate: getHydrateClass() });

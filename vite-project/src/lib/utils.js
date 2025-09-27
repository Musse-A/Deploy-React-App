import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

// function to help pass in multiple classes 
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
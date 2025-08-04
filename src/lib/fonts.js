import { Zen_Dots, Space_Grotesk } from "next/font/google"
const zen_dots = Zen_Dots({
    subsets: ["latin"],
    weight: ["400"],
});
const space = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: 'swap',
});

export {space ,zen_dots}
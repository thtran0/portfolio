const stars = [
    { slug: "sound", title: "Sound Physicians", x: 300, y: 150, size: 5, constellations: ["care"]},
    { slug: "orthonyx", title: "Orthonyx", x: 120, y: 230, size: 5, constellations: ["care"]},
    { slug: "research", title: "Research", x: 200, y: 400, size: 4, constellations: ["care", "connection"]},
    { slug: "vicinity", title: "Vicinity", x: 520, y: 380, size: 3, constellations: ["connection", "community"]},
    { slug: "umessage", title: "uMessage", x: 600, y: 370, size: 4, constellations: ["connection"]},
    { slug: "scheduling", title: "Scheduling Tool", x: 620, y: 480, size: 3, constellations: ["connection"]},
    { slug: "time", title: "Time Tool", x: 700, y: 410, size: 3, constellations: ["connection"]},
    { slug: "ambassador", title: "Lead Ambassador", x: 450, y: 320, size: 6, constellations: ["care", "community"]},
];

export const links = [
    ["orthonyx", "research"],
    ["orthonyx", "sound"],
    ["research", "ambassador"],
    ["sound", "ambassador"],
    ["vicinity", "ambassador"],
    ["vicinity", "umessage"],
    ["vicinity", "scheduling"],
    ["time", "scheduling"],
    ["time", "umessage"]
];

export default stars;
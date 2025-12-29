export interface Event {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    delay: number;
    mapUrl: string;
}

export const shremalEvents: Event[] = [
    {
        title: "Ooti Ceremony",
        date: "February 5, 2026",
        time: "6:00 PM",
        location: "Bride's Residence, Nalasopara",
        description: "A traditional pre-wedding ceremony celebrating the bride's journey, filled with rituals, blessings, and joyous moments with family.",
        delay: 0.2,
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Nalasopara"
    },
    {
        title: "The Marriage",
        date: "February 6, 2026",
        time: "11:00 AM",
        location: "Wagholi, Nalasopara",
        description: "Join us for the sacred wedding ceremony as we exchange vows under the mandap, surrounded by flowers, blessings, and loved ones.",
        delay: 0.4,
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wagholi+Nalasopara"
    }
];

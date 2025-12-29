export interface Event {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    delay: number;
    mapUrl: string;
}

export const himanshuEvents: Event[] = [
    {
        title: "Food for Guests",
        date: "February 5, 2026",
        time: "07:00 PM",
        location: "Wagholi, Nalasopara",
        description: "Join us for a delightful meal as we welcome our guests and celebrate together with delicious food and warm hospitality.",
        delay: 0.2,
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wagholi+Nalasopara"
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

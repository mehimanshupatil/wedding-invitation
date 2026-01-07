export interface Event {
    title: string;
    date: string;
    time: string;
    location: string;
    delay: number;
    mapUrl: string;
}

export const himanshuEvents: Event[] = [
    {
        title: "Pre-Wedding Dinner for Guests",
        date: "February 5, 2026",
        time: "07:00 PM",
        location: "Bhuigaon, Vasai",
        delay: 0.2,
        mapUrl: "https://maps.app.goo.gl/zoVLBwxGmAwnefzt5"
    },
    {
        title: "Wedding Ceremony",
        date: "February 6, 2026",
        time: "11:00 AM",
        location: "Wagholi, Nalasopara",
        delay: 0.4,
        mapUrl: "https://maps.app.goo.gl/EfyiLtrLr7MbLPHr6"
    }
];
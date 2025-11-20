export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "Event 1",
    slug: "event-1",
    location: "location-1",
    date: "date-1",
    time: "time-1",
  },
  {
    image: "/images/event2.png",
    title: "Event 2",
    slug: "event-2",
    location: "location-2",
    date: "date-2",
    time: "time-2",
  },
  {
    image: "/images/event3.png",
    title: "Event 3",
    slug: "event-3",
    location: "location-3",
    date: "date-3",
    time: "time-3",
  },
];

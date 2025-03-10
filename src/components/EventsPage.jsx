import React, { useState } from "react";
import { Card, TextInput, Label, Button, Select } from "flowbite-react";
import initialEventsData from "../Data/eventData";

const EventsPage = () => {
  const [events, setEvents] = useState(initialEventsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (
      newEvent.title &&
      newEvent.date &&
      newEvent.location &&
      newEvent.description &&
      newEvent.image &&
      newEvent.category
    ) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      setNewEvent({
        title: "",
        date: "",
        location: "",
        description: "",
        image: "",
        category: "",
      });
      setIsModalOpen(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-400 min-h-screen">
      <div className="container mx-auto px-6 py-8 max-w-5xl relative">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-b from-black to-sky-700 bg-clip-text text-transparent">
          We Helped Communities Connect & Flourish
        </h1>
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-b from-blue-950 to-blue-500 bg-clip-text text-transparent">
          ✦ Upcoming Events
        </h2>

        {/* Category Filter */}
        <div className="mb-6 flex justify-center">
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-md"
          >
            <option value="All">All Categories</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </Select>
        </div>

        {/* Add Event Button */}
        <div className="text-center mb-6">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
          >
            + Add Event
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(({ id, image, title, date, location, description, category }) => (
              <Card key={id} className="shadow-lg bg-white dark:bg-stone-200 dark:text-gray-900 duration-200 hover:opacity-80 hover:shadow-2xl hover:scale-110 hover:rotate-1">
                <img src={image} alt={title} className="rounded-lg w-64 h-44" />
                <h5 className="text-xl font-bold text-gray-900">{title}</h5>
                <p className="text-sm text-gray-600">{date} • {location}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <p className="text-sm font-semibold text-blue-700">Category: {category}</p>
                <Button className="bg-black  bottom-0 hover:bg-gray-600 ">Event details</Button>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-600">No events found in this category.</p>
          )}
        </div>

        {/* Modal for Adding Events */}
        {isModalOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <form
              className="flex flex-col gap-4 bg-gradient-to-br from-white to-slate-400 p-6 shadow-lg rounded-md w-full max-w-md"
              onSubmit={addEvent}
            >
              <h2 className="text-xl font-bold text-center mb-4">Add New Event</h2>

              {["title", "date", "location", "description", "image"].map((field) => (
                <div key={field}>
                  <Label htmlFor={field} value={field.charAt(0).toUpperCase() + field.slice(1)} />
                  <TextInput
                    id={field}
                    name={field}
                    type={field === "date" ? "date" : "text"}
                    placeholder={`Enter event ${field}`}
                    value={newEvent[field]}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}

              <div>
                <Label htmlFor="category" value="Event Category" />
                <Select
                  id="category"
                  name="category"
                  value={newEvent.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Religious">Religious</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                </Select>
              </div>
            <div className="flex ">
              <Button type="submit" className="bg-blue-700 text-white hover:bg-black transition-transform w-1/4">
                Add Event
              </Button>
              <Button
                type="button"
                className="bg-red-500 text-white hover:bg-black w-1/6 ml-56"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;

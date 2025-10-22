import React, { useState, useEffect } from 'react';
import EventSearchBar from '../components/EventSearchBar';
import EventList from '../components/EventList';
import { getAllEvents, filterEvents, sortEventsByDate } from '../services/eventsService';
import { Event } from '../types';

const FindAnEventScreen: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [filters, setFilters] = useState({
    search: '',
    communityType: '',
    isOpenToPublic: false,
    cost: '',
  });

  useEffect(() => {
    const allEvents = getAllEvents();
    const sortedEvents = sortEventsByDate(allEvents);
    setEvents(sortedEvents);
    setFilteredEvents(sortedEvents);
  }, []);

  useEffect(() => {
    const filtered = filterEvents(events, filters);
    const sortedFiltered = sortEventsByDate(filtered);
    setFilteredEvents(sortedFiltered);
  }, [events, filters]);

  return (
    <div>
      {/* Search and Filters */}
      <EventSearchBar filters={filters} onFiltersChange={setFilters} />

      {/* Events List */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <EventList events={filteredEvents} />
      </div>
    </div>
  );
};

export default FindAnEventScreen;

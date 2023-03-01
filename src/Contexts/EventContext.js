import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const EventContext = createContext()
let baseUrl = "http://localhost:3001/"

export const EventProvider = (props) => {
    const [events, setEvent] = useState()

    useEffect(() => {
        async function getEvents() {
          await refreshEvents()
        }
        getEvents()
      }, []);

    function refreshEvents() {
        return axios.get(baseUrl + "api/scheduledevents?_sort=day")
          .then(response => {
            setEvent(response.data)
          })
      }

    function getEvents(id) {
        return axios.get(baseUrl + `api/scheduledevents/${id}`)
          .then(response =>
            new Promise((resolve) => resolve(response.data))
          )
          .catch((error) =>
            new Promise((_, reject) => reject(error.response.statusText))
          )
      }

    function addEvent(product) {
        return axios.post(baseUrl + "api/scheduledevents", product)
        .then(response => {
        refreshEvents()
        return new Promise((resolve) => resolve(response.data))
        })
      }
    
      function updateEvent(event) {
        return axios.put(baseUrl + `api/scheduledevents/${event.id}`, event)
        .then(response => {
          refreshEvents()
          return new Promise((resolve) => resolve(response.data))
        })
      }

    function deleteEvent(id) {
        return axios.delete(baseUrl + `api/scheduledevents/${id}`)
        .then(refreshEvents())
    }
    
    return (
        <EventContext.Provider
          value={{
            events,
            getEvents,
            addEvent,
            updateEvent,
            deleteEvent,
            refreshEvents
          }}
        >
          {props.children}
        </EventContext.Provider>
      )
}
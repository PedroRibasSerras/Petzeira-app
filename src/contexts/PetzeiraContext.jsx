/** @format */
import axios from "../services/api";

import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { wait } from "@testing-library/user-event/dist/utils";

export const PetzeiraContext = createContext({});
const baseUrl = "http://api.pedroribasserras.space:3333";

export function PetzeiraProvider({ children }) {
	const [user, setUser] = useState({});
	const [modules, setModules] = useState([]);
  const [currentModule, setCurrentModule] = useState(0);
	const [fed, setFed] = useState([]);
	const [events, setEvents] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [schedule, setSchedule] = useState([])


	useEffect(() => {
		if(Cookies.get("ss")){
      getUser()
    }
	}, []);

  useEffect(() => {
    if(user.id){
      getModules()
    }
	}, [user]);

  useEffect(() => {
    if(modules.length){
      getFed()
      getEvents()
      getMeasurements()
      // getSchedule()
    }
	}, [modules,currentModule]);

	async function getUser(){
    let response = await axios.get(baseUrl + "/user")
    setUser(response.data)
  }

	async function login(email, password) {
		let response = await axios.post(baseUrl + "/auth/login", { email, password })
    setUser(response.data.data)
	}

  async function register(name, email, password, confirmPassword) {
    if(password == confirmPassword){
		  let response = await axios.post(baseUrl + "/auth/login", { email, password })
      setUser(response.data.data)
    }
	}

  async function getModules() {
		let response = await axios.get(baseUrl + "/module")
    setModules(response.data)
	}

  async function getFed() {
		let response = await axios.post(baseUrl + "/module/getfed",{
        serial:modules[currentModule].serial,
        moduleType:modules[currentModule].type
    })
    setFed(response.data)
	}

  async function getEvents() {
		let response = await axios.post(baseUrl + "/module/getevents",{
      serial:modules[currentModule].serial,
      moduleType:modules[currentModule].type
    })
    setEvents(response.data)
	}

  async function getMeasurements() {
		let response = await axios.post(baseUrl + "/module/getmeasurements",{
      serial:modules[currentModule].serial,
      moduleType:modules[currentModule].type
    })
    setMeasurements(response.data)
	}

  async function getSchedule() {
    console.log({
      serial:modules[currentModule].serial,
      moduleType:modules[currentModule].type
    })
		let response = await axios.get(baseUrl + "/module/schedule",{
      serial:modules[currentModule].serial,
      moduleType:modules[currentModule].type
    })
    setSchedule(response.data)
	}

  async function requestFed() {
		let response = await axios.post(baseUrl + "/module/fed", {
      serial:modules[currentModule].serial,
      moduleType:modules[currentModule].type
    })
    setTimeout(function(){
      getFed()
    }, 4000); 
	}

  async function requestCalibre() {
		let response = await axios.post(baseUrl + "/module/calibre", {
      serial:modules[currentModule].serial,
      moduleType:modules[currentModule].type,
      calibreWeight:1
    })
    setTimeout(function(){
      getEvents()
    }, 4000); 
	}

  async function requestMeasurements(email, password) {
		let response = await axios.post(baseUrl + "/module/measurements", {
      serial:modules[currentModule].serial,
      moduleType:modules[currentModule].type
    })
    setTimeout(function(){
      getMeasurements()
    }, 4000); 
	}

  async function createSchedule(time) {
		let response = await axios.post(baseUrl + "/module/schedule", {
      serial:modules[currentModule].serial,
      moduleType:modules[currentModule].type,
      time
    })
    setTimeout(function(){
      getSchedule()
    }, 2000); 
	}

  async function deleteSchedule(schedulingId) {
		let response = await axios.delete(baseUrl + "/module/schedule", {
      schedulingId
    })
    setTimeout(function(){
      getSchedule()
    }, 2000); 
	}

	return (
		<PetzeiraContext.Provider
			value={{
				// isLoadingUser,
				user,
				login,
        modules,
        setCurrentModule,
        currentModule,
        fed,
        events,
        measurements,
        schedule,
        requestFed,
        requestCalibre,
        requestMeasurements,
        createSchedule,
        deleteSchedule

			}}
		>
			{children}
		</PetzeiraContext.Provider>
	);
}

/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PetzeiraProvider } from "./contexts/PetzeiraContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<QueryClientProvider client={queryClient}>
		<PetzeiraProvider>
			<BrowserRouter>
				<ProSidebarProvider>
					<App />
				</ProSidebarProvider>
			</BrowserRouter>
		</PetzeiraProvider>
	</QueryClientProvider>
);

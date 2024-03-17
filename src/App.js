import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./components/layout-components/Layout";
import { useAuth } from './api/services/auth.js';

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/404NotFound";

import 'reactjs-popup/dist/index.css';
import "react-toastify/dist/ReactToastify.css";
import "../src/assets/css/main.css";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Temperature from "./pages/temperature/index.js";


function App() {
	const { userExist } = useAuth();

	return (
		<>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route element={userExist && <Layout />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/temperature" element={<Temperature />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

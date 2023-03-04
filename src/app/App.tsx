import React, { Suspense } from "react";

import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "@/shared/lib/ClassNames/ClassNames";

import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", [theme], {})}>
			<Navbar />
			<Suspense fallback="">
				<div className="content">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;

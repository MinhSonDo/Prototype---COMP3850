import React from 'react'

const AdminPage = React.lazy(() => import('./Pages/adminPage/AdminPage.js'))
const HomePage = React.lazy(() => import('./Pages/homePage/HomePage.js'))
const LoginPage = React.lazy(() => import('./Pages/loginPage/LoginPage.js'))
const Set1Page = React.lazy(() => import('./Pages/setPage/SetOnePage.js'))
const Set2Page = React.lazy(() => import('./Pages/setPage/SetTwoPage.js'))
const Set3Page = React.lazy(() => import('./Pages/setPage/SetThreePage.js'))
const CreateQuestionPage = React.lazy(() =>
	import('./Pages/createQuestionPage/createQuestionPage.js')
)
const CurrentQuestionPage = React.lazy(() =>
	import('./Pages/currentQuestionPage/currentQuestionPage.js')
)
const MenuPage = React.lazy(() => import('./Pages/menuPage/MenuPage.js'))

const routes = [
	{
		path: '/',
		element: <HomePage />,
		exact: true
	},
	{
		path: '/login',
		element: <LoginPage />
	},
	{
		path: '/adminPage',
		element: <AdminPage />
	},
	{
		path: '/set1',
		element: <Set1Page />
	},
	{
		path: '/set2',
		element: <Set2Page />
	},
	{
		path: '/set3',
		element: <Set3Page />
	},
	{
		path: '/createQuestion',
		element: <CreateQuestionPage />
	},
	{
		path: '/currentQuestion',
		element: <CurrentQuestionPage />
	},
	{
		path: '/menu',
		element: <MenuPage />
	}
]

export default routes

import React from 'react'

import '/Users/orest/Desktop/CourseSkillUP/react/shop-project/src/reset.css'
import '/Users/orest/Desktop/CourseSkillUP/react/shop-project/src/base.css'
import '/Users/orest/Desktop/CourseSkillUP/react/shop-project/src/header.css'
import '/Users/orest/Desktop/CourseSkillUP/react/shop-project/src/menu.css'
import '/Users/orest/Desktop/CourseSkillUP/react/shop-project/src/cart.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

export default App
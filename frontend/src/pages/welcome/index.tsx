import { Advantages } from './advantages';
import { Beta } from './beta';
import { Intro } from './intro';

import { Footer } from '@/modules/footer';
import { Header } from '@/modules/header';

export const Welcome = () => {
	return (
		<>
			<Header main />
			<Intro />
			<Advantages />
			<Beta />
			<Footer />
		</>
	);
};

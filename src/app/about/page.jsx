import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'DBBL | About Us',
  description: '...',
}

const AboutPage = () => {
    return (
        <div>
            <h2>About Us</h2>

            <Image src="https://images.unsplash.com/photo-1788270083262-55c5df22ed45" width={300} height={300} alt="Unsplash Image"></Image>

            <Image src="https://i.ibb.co/Xp3sL2h/1.png" width={300} height={300} alt="Another Image"></Image>

            <Image src="/sheldon.jpg" width={300} height="300" alt="shedlon cooper"></Image>
            <Image src="/images/cena.jpg" width="300" height="500" alt="john ochena"></Image>
            <Image src="/images/hablu.jpg" width="300" height="500" alt="john ochena"></Image>
        </div>
    );
};

export default AboutPage;
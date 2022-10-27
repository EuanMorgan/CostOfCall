import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const yearlySalary = 25000;
const monthlySalary = yearlySalary / 12;
const weeklySalary = monthlySalary / 4;
const dailySalary = weeklySalary / 5;
const hourlySalary = dailySalary / 8;
const minuteSalary = hourlySalary / 60;
const secondSalary = minuteSalary / 60;

const colours = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
const Home: NextPage = () => {
  const [seconds, setSeconds] = useState(0);
  const [colour, setColour] = useState('#000000');

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    const colourInterval = setInterval(() => {
      const randomColour = colours[Math.floor(Math.random() * colours.length)];
      setColour(randomColour);
    }, 4000);
    return () => {
      clearInterval(interval);
      clearInterval(colourInterval);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: colour,
      }}
      className={`transition-all px-6 text-center duration-[4000ms] ease-in-out flex flex-col gap-6 items-center justify-center h-screen w-screen text-6xl text-white font-bold `}
    >
      {/* <p>You have worked for {seconds}</p> */}

      <p>
        CURRENT COST OF THIS CALL:{' '}
        {Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format(seconds * secondSalary * 4)}
      </p>

      <p className="text-xs opacity-50">
        *based on 6 people in this call and an estimated average salary
      </p>
    </div>
  );
};

export default Home;

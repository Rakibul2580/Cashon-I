import { Card1, Chip } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import Chart from "react-apexcharts";
const Top = () => {
  var options = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <div className="flex items-center">
      <div className="w-[350px] my-5 border-r-2 ">
        <div className="flex justify-around mr-2 border-b-2">
          <div className="flex flex-col justify-center ml-5 space-y-3">
            <p className="text-[#9E9E9E]">Total Balance</p>
            <h2 className="text-2xl font-semibold">$1,251,321</h2>
          </div>
          <Chart
            options={options}
            series={options.series}
            type="line"
            height={150}
            width={180}
          />
        </div>
        <div className="flex justify-around mt-5">
          <div className="space-y-3">
            <p className="text-[#9E9E9E]">Income</p>
            <h2 className="text-2xl font-semibold">
              $51,321 <span className="text-[#2DBF3C] ml-5 text-lg">+2.01</span>
            </h2>
          </div>
          <div className="pl-5 space-y-3 border-l-2 ">
            <p className="text-[#9E9E9E]">Expenses</p>
            <h2 className="text-2xl font-semibold">
              $21,321 <span className="text-[#FF7D33] ml-5 text-lg">-0.05</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex w-8/12 mx-10">
        <div
          className={`bg-[url('https://i.ibb.co/9h3Q8Cz/image-93-1.png')] bg- bg-no-repeat bg-opacity-5 w-96`}
        >
          <div className="p-5 space-y-8 bg-blue-500 rounded-lg bg-opacity-90 h-52 w-80">
            <div className="flex items-center justify-between">
              <h1 className="text-xl text-white"> LOGO</h1>
              <Image src={Chip} />
            </div>
            <h1 className="text-xl text-white"> 3475 7381 3759 ****</h1>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">TOTAL BLANCA</p>
                <p className="text-xs text-slate-400">EXP. DATE</p>
              </div>
              <div className="flex items-center justify-between text-lg">
                <p className="text-white">3,215,352 USD</p>
                <p className="text-white">04 / 24</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            className={`bg-[url('https://i.ibb.co/wdpkMTN/image-93-2.png')] bg- bg-no-repeat bg-opacity-5 w-96`}
          >
            <div className="p-5 space-y-8 bg-blue-900 rounded-lg bg-opacity-90 h-52 w-80">
              <div className="flex items-center justify-between">
                <h1 className="text-xl text-white"> LOGO</h1>
                <Image src={Chip} />
              </div>
              <h1 className="text-xl text-white"> 3475 7381 3759 ****</h1>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400">TOTAL BLANCA</p>
                  <p className="text-xs text-slate-400">EXP. DATE</p>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <p className="text-white">3,215,352 USD</p>
                  <p className="text-white">04 / 24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-ml-10 space-y-3 text-blue-500 border border-blue-500 rounded-md h-fit">
            <h1 className="py-[91px] -mx-4 text-lg -rotate-90">+ Add Card</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;

import React from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";

function Admissions() {
  return (
    <main>
      {/*Banner section*/}
      <section>
        <Banner className="rounded-t-xl"></Banner>
      </section>

      {/*Admissions section*/}
      <section>
        <div className="mt-20 lg:mt-20 p-8 container mx-auto max-w-8xl text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-7 text-center pb-7">
            Admissions
          </h2>
          <div className="max-w-xl pb-5">
            <p>
              Chamabondo Primary School welcomes applications from learners of
              all backgrounds who are ready to grow in a vibrant, disciplined,
              and nurturing learning environment. We accept children for ECD A
              to Grade 7, and placements are subject to available space.
            </p>
          </div>

          <Button>Download Application form </Button>
        </div>
      </section>

      {/*Admissions requirements section*/}
      <section></section>
    </main>
  );
}

export default Admissions;

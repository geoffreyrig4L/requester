import { Field, Formik, Form } from "formik";
import { Dispatch, SetStateAction, useCallback } from "react";
import api from "../services/api";

interface MyFormValues {
  depart: string;
  arrive: string;
  date: Date;
  heure: Date;
  timeslot: string;
}

const Researcher: React.FC = () => {
  const spanCss = "flex flex-row";
  const fieldCss =
    "bg-gray-200 p-2 rounded-md focus:ring-2 focus:outline-none focus:ring-offset focus:ring-[#8DE8FE] w-[220px] pl-4";
  const labelCss = "w-[155px] p-2 font-semibold";

  const initialValues: MyFormValues = {
    depart: "",
    arrive: "",
    date: new Date(),
    heure: new Date(),
    timeslot: "",
  };

  const handleFormSubmit = useCallback(async (initialValues: MyFormValues) => {
    try {
      console.log(initialValues); /*
      await api.get(
        `http://integration-idh.sncfvoyages-dev.aws.vsct.fr:55541/sidh1i/itineraries/${initialValues.depart}/${initialValues.arrive}/${initialValues.date}/${initialValues.heure}/${initialValues.timeslot}`
      );*/
    } catch (e) {
      return { error: e };
    }
  }, []);

  return (
    <div className=" flex flex-row bg-white rounded-xl mr-3">
      <div className="h-[750px] w-[500px]">
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          <Form className="flex flex-col p-12 justify-between h-full m-auto w-full">
            <div className="flex flex-row items-center">
              <div className="flex flex-col justify-between h-[85px] mr-2">
                <span className={spanCss}>
                  <label className={labelCss}>Départ</label>
                  <Field
                    className={fieldCss}
                    type="text"
                    name="depart"
                    placeholder="Paris"
                  />
                </span>
                <span className={spanCss}>
                  <label className={labelCss}>Arrivé</label>
                  <Field
                    className={fieldCss}
                    type="text"
                    name="arrive"
                    placeholder="Lyon"
                  />
                </span>
              </div>
              <button className="bg-[#8DE8FE] rounded-full text-xl font-extrabold h-[33px] w-[33px]">
                ↕
              </button>
            </div>
            <span className={spanCss}>
              <label className={labelCss}>Environnement</label>
              <select className={fieldCss} name="env">
                <option>1</option>
                <option>2</option>
              </select>
            </span>
            <span className={spanCss}>
              <label className={labelCss}>Date</label>
              <Field className={fieldCss} type="date" name="date" />
            </span>
            <span className={spanCss}>
              <label className={labelCss}>Heure</label>
              <Field className={fieldCss} type="time" name="heure" />
            </span>
            <span className={spanCss}>
              <label className={labelCss}>Timeslot</label>
              <Field className={fieldCss} type="text" name="timeslot" />
            </span>
            <span className={spanCss}>
              <label className={labelCss}>Profil</label>
              <select className={fieldCss} name="env">
                <option>1</option>
                <option>2</option>
              </select>
            </span>
            <button
              className="w-full p-2 rounded-lg bg-[#8DE8FE] hover:ring-1 hover:ring-black"
              type="submit"
            >
              Rechercher
            </button>
          </Form>
        </Formik>
      </div>
      <div>
        <button className="w-[20px] h-full bg-gray-300 border-l-[1px] border-gray-400 text-center text-xl rounded-r-xl">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Researcher;
